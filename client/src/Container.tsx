import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent/SnackbarContent";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import * as classNames from "classnames";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/account/Login";
import Signup from "./components/account/Signup";
import Hello from "./components/Hello";
// import "./App.css";
import Home from "./components/Home";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";
const logo = require("./logo.svg");

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      top: 0,
      left: 0,
      overflow: "hidden",
      display: "flex",
      flexFlow: "column",
      width: "100%"
    }
  });

interface Props extends WithStyles<typeof styles> {}

class Container extends React.Component<Props> {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
        <Hello />
        <Hello />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Container);
