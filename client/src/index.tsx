import ApolloClient from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

// import Hello from "./containers/Hello";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import "./index.css";
import configureStore from "./store/configureStore";

if (module.hot) {
  module.hot.accept();
}

const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? "http://192.168.1.97:4000" : "/"
});

const initialState = {
  enthusiasm: {
    languageName: "i love memes",
    enthusiasmLevel: 0
  },
  user: {
    email: ""
  }
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={configureStore(null, initialState)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
