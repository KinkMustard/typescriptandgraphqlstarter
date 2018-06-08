import { applyMiddleware, createStore, Store } from "redux";

// react-router has its own Redux middleware, so we'll use this
// If you use react-router, don't forget to pass in your history type.
import { History } from "history";
import { routerMiddleware } from "react-router-redux";
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from "redux-devtools-extension";

// Import the state interface and our combined reducers.
// import reduxThunk from "redux-thunk";
import { ApplicationState, reducers } from "./index";

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});

  // We'll create our store with the combined reducers and the initial Redux state that
  // we'll be passing from our entry point.
  return createStore<ApplicationState>(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
}
