import ApolloClient from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { EnthusiasmAction } from "./actions/index";
import Hello from "./containers/Hello";
import { enthusiasm } from "./reducers/index";
import { StoreState } from "./types/index";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://192.168.1.97:5000/graphql"
      : "/"
});

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 0,
  languageName: "lit fam"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
