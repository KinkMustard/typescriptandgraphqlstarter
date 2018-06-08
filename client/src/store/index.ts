import { routerReducer } from "react-router-redux";
import { combineReducers, Dispatch, Reducer } from "redux";
import { reducer as reduxForm } from "redux-form";
// Import your state types and reducers here.
import EnthusiasmReducer from "./enthusiasm/reducer";
import { EnthusiasmState } from "./enthusiasm/types";
import UserReducer from "./user/reducer";
import { UserState } from "./user/types";

// The top-level state object
export interface ApplicationState {
  enthusiasm: EnthusiasmState;
  user: UserState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  enthusiasm: EnthusiasmReducer,
  router: routerReducer,
  form: reduxForm,
  user: UserReducer
});

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<S> {
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<S>;
}
