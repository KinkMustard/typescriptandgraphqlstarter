import { ActionCreator } from "react-redux";
import * as constants from "./constants";
import { SetUser, UserState } from "./types";

export const setUser: ActionCreator<SetUser> = (user: UserState) => ({
  type: constants.SET_USER,
  payload: {
    user
  }
});
