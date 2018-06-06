import * as React from "react";
import { Route, Switch } from "react-router-dom";
import AddAuthor from "./components/AddAuthor";
// import "./App.css";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import Home from "./components/Home";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";
import Hello from "./containers/Hello";
const logo = require("./logo.svg");

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
