import { WithStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import * as PropTypes from "prop-types";
import * as React from "react";
import { compose } from "react-apollo";
import { connect, Dispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ApplicationState } from "../../store/index";
import { setUser } from "../../store/user/actions";
import { UserActions, UserState } from "../../store/user/types";

const drawerWidth = 0;

const styles = (theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing.unit
    },
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      width: "100%"
    },
    appBar: {
      position: "absolute",
      marginLeft: drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    navIconHide: {
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up("md")]: {
        position: "relative"
      }
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    }
  });

interface Props extends WithStyles<typeof styles> {
  // handleDrawerToggle: () => void;
  history: any;
  location: any;
  match: any;
  staticContext: any;
}

type AllProps = Props & UserState;

class Header extends React.Component<AllProps> {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, theme } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={this.props.handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap={true}>
            Hello {this.props.email}
          </Typography>
          <Button
            aria-owns={anchorEl ? "simple-menu" : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            color="inherit"
          >
            Toggle navigation
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link to="/api">API Examples</Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link to="/contact">Contact</Link>
            </MenuItem>
          </Menu>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              this.props.history.push("/login");
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => {
              this.props.history.push("/signup");
            }}
          >
            Create Account
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => state.user;
const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => {
  return {
    setUser: () => dispatch(setUser())
  };
};

export default compose(
  connect<UserState>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles, { withTheme: true })
)(withRouter(Header));
