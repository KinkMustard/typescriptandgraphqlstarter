import * as bcrypt from "bcryptjs";

import { NextFunction, Request, Response } from "express";
import { userSessionIdPrefix } from "../../../constants";
import { default as User } from "../../../entity/User";
import { ResolverMap } from "../../../types/graphql-utils";
import {
  confirmEmailError,
  forgotPasswordLockedError,
  invalidLogin
} from "./errorMessages";

const errorResponse = [
  {
    path: "email",
    message: invalidLogin
  }
];

export const resolvers: ResolverMap = {
  Mutation: {
    login: async (
      _,
      { email, password }: GQL.ILoginOnMutationArguments,
      { session, req }
    ) => {
      const user = await User.findOne({ email });

      if (!user) {
        return errorResponse;
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return errorResponse;
      }

      // login sucessful
      session.userId = user.id;
      // if (req.sessionID) {
      //   await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID);
      // }

      return undefined;
    }
  }
};
