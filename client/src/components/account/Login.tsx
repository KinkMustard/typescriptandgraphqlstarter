import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import * as React from "react";
import { compose, graphql, MutationFunc } from "react-apollo";
import { connect, Dispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {
  loginMutation,
  loginMutationVariables
} from "../../operation-result-types";
import { login } from "../../queries/queries";
import { ApplicationState } from "../../store";
import { setUser } from "../../store/user/actions";
import { UserActions, UserState } from "../../store/user/types";
import CustomSnackbar from "../presentational/CustomSnackbar";

const styles = (theme: Theme) =>
  createStyles({
    card: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "400px",
      height: "400px",
      marginTop: "-200px" /* Half the height */,
      marginLeft: "-200px" /* Half the width */,
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      marginBottom: 16,
      fontSize: 18
    },
    field: {
      display: "block",
      margin: "0 auto",
      marginBottom: 10
    },
    button: {
      margin: theme.spacing.unit
    },
    gradient: {
      position: "fixed",
      top: 0,
      left: 0,
      display: "block",
      width: "100vw",
      height: "100vh",
      margin: 0,
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
    },
    textField: {
      width: "100%"
    }
  });
interface Props extends WithStyles<typeof styles> {
  login: MutationFunc<loginMutation, loginMutationVariables>;
  handleSubmit: any;
  submitting: boolean;
  history: any;
  location: any;
  match: any;
  staticContext: any;
  setUser: (user: UserState) => void;
}

type AllProps = Props & UserState;

class Login extends React.Component<AllProps> {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    showPassword: false,
    snackbarOpen: false
  };

  handleOpenSnackbar = () => {
    this.setState({ snackbarOpen: true });
  };

  handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackbarOpen: false });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = async () => {
    await this.setState({ showPassword: !this.state.showPassword });
    this.forceUpdate();
  };

  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
      label={label}
      error={touched && Boolean(error)}
      className={this.props.classes.textField}
      InputProps={{
        className: this.props.classes.textField
      }}
      helperText={touched && error ? error : " "}
      {...input}
      {...custom}
    />
  );

  renderPasswordField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      label={label}
      error={touched && Boolean(error)}
      helperText={touched && error ? error : " "}
      className={this.props.classes.textField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...input}
      {...custom}
    />
  );

  submitForm = async values => {
    const message = await this.props.login({
      // refetchQueries: [{ query: getBooks }],
      variables: {
        email: values.email,
        password: values.password
      }
    });

    console.log(message);
    if (!message.data) {
      this.props.setUser({ email: values.email });
      this.props.history.push("/");
    } else {
      this.handleOpenSnackbar();
    }
  };

  render() {
    const { classes, theme, handleSubmit, submitting } = this.props;
    return (
      <div className={classes.gradient}>
        <Card className={classes.card}>
          <form onSubmit={handleSubmit(this.submitForm)}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Login to an existing account
              </Typography>
              <Field
                className={classes.field}
                name="email"
                component={this.renderTextField as any}
                label="email"
              />
              <Field
                className={classes.field}
                name="password"
                type={this.state.showPassword ? "text" : "password"}
                component={this.renderPasswordField as any}
                label="password"
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
                disabled={submitting}
              >
                Continue
              </Button>
            </CardActions>
          </form>
          <CustomSnackbar
            open={this.state.snackbarOpen}
            handleClick={this.handleOpenSnackbar}
            handleClose={this.handleCloseSnackbar}
            variant="error"
            message="The username or password that you entered was not correct."
          />
        </Card>
      </div>
    );
  }
}

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validate = values => {
  const errors = { email: "", password: "" };
  if (!validateEmail(values.email)) {
    errors.email = "You must provide a valid email";
  }
  if (!values.email) {
    errors.email = "You must provide an email";
  }
  if (!values.password) {
    errors.password = "You must provide a password";
  }
  if (values.password && values.password.length < 3) {
    errors.password = "Password must be at least 3 characters";
  }

  return errors;
};

const mapStateToProps = (state: ApplicationState) => state.user;
const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => {
  return {
    setUser: () => dispatch(setUser())
  };
};

export default compose(
  graphql<Props, loginMutation, loginMutationVariables>(login, {
    name: "login"
  }),
  reduxForm({
    form: "loginForm",
    validate
  }),
  connect<UserState>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles, { withTheme: true })
)(withRouter(Login));
