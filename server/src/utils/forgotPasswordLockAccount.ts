import { Redis } from "ioredis";
import { default as User } from "../entity/User";
import { removeAllUsersSessions } from "./removeAllUsersSessions";

export const forgotPasswordLockAccount = async (
  userId: string,
  redis: Redis
) => {
  // can't login
  await User.update({ id: userId }, { forgotPasswordLocked: true });
  // remove all sessions
  await removeAllUsersSessions(userId, redis);
};
