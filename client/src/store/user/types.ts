import * as constants from "./constants";

export interface UserState {
  email: string;
}

export interface SetUser {
  type: constants.SET_USER;
}

export type UserActions = SetUser;
