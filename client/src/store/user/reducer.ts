import { Reducer } from "redux";
import { SET_USER } from "./constants";
import { UserActions, UserState } from "./types";

export const initialState: UserState = {
  email: ""
};

const reducer: Reducer<UserState> = (
  state: UserState = initialState,
  action
) => {
  switch ((action as UserActions).type) {
    case SET_USER:
      console.log(action);
      return { ...state, email: action.payload.email };
    default:
      return state;
  }
};

export default reducer;
