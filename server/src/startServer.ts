import bluebird from "bluebird";
import bodyParser from "body-parser";
import compression from "compression";
import mongo from "connect-mongo";
import connectRedis from "connect-redis";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import flash from "express-flash";
import graphqlHTTP from "express-graphql";
import RateLimit from "express-rate-limit";
import session from "express-session";
import expressValidator from "express-validator";
import { GraphQLServer } from "graphql-yoga";
import lusca from "lusca";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";
import RateLimitRedisStore from "rate-limit-redis";
import "reflect-metadata";
import * as passportConfig from "./config/passport";
import { redisSessionPrefix } from "./constants";
// import { redis } from "./redis";
import { confirmEmail } from "./routes/confirmEmail";
import { createTestConn } from "./testUtils/createTestConn";
import { createTypeormConn } from "./utils/createTypeormConn";
import { genSchema } from "./utils/genSchema";
import { MONGODB_URI, MONGODB_URI_TEST, SESSION_SECRET } from "./utils/secrets";

dotenv.config({ path: ".env" });
// const RedisStore = connectRedis(session);

const mongoUrl =
  process.env.NODE_ENV === "test" ? MONGODB_URI_TEST : MONGODB_URI;
const MongoStore = mongo(session);
const schema = genSchema();
export const startServer = async () => {
  // if (process.env.NODE_ENV === "test") {
  //   await redis.flushall();
  // }
  let db;
  (mongoose as any).Promise = bluebird;
  db = await mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("successfully connected to mongodb");
    })
    .catch(err => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      // process.exit();
    });

  const server = new GraphQLServer({
    schema,
    context: ({ request }) => ({
      // redis,
      url: request.protocol + "://" + request.get("host"),
      session: request.session,
      req: request,
      db
    })
  });
  // server.express.use(
  //   new RateLimit({
  //     store: new RateLimitRedisStore({
  //       client: redis
  //     }),
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //     delayMs: 0 // disable delaying - full speed until the max limit is reached
  //   })
  // );

  server.express.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: SESSION_SECRET,
      store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
      })
    })
  );
  server.express.use(cors());
  server.express.use(compression());
  server.express.use(bodyParser.json());
  server.express.use(bodyParser.urlencoded({ extended: true }));
  server.express.use(expressValidator());
  server.express.use(passport.initialize());
  server.express.use(passport.session());
  server.express.use(flash());
  server.express.use(lusca.xframe("SAMEORIGIN"));
  server.express.use(lusca.xssProtection(true));
  server.express.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });
  server.express.use((req, res, next) => {
    if (
      !req.user &&
      req.path !== "/login" &&
      req.path !== "/signup" &&
      !req.path.match(/^\/auth/) &&
      !req.path.match(/\./)
    ) {
      req.session.returnTo = req.path;
    } else if (req.user && req.path === "/account") {
      req.session.returnTo = req.path;
    }
    next();
  });
  server.express.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
  );

  server.express.get("/confirm/:id", confirmEmail);

  const bcors = {
    credentials: true,
    origin:
      process.env.NODE_ENV === "test"
        ? "*"
        : (process.env.FRONTEND_HOST as string)
  };
  const app = await server.start(
    {
      cors: bcors,
      port: process.env.NODE_ENV === "test" ? 0 : 4000
    },
    ({ port }) => {
      console.log(`Server is running on ${port}`);
    }
  );

  return app;
};
