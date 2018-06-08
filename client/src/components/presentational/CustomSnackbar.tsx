import Button from "@material-ui/core/Button";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import * as classNames from "classnames";
import * as React from "react";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles1 = (theme: Theme) =>
  createStyles({
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: "flex",
      alignItems: "center"
    },
    close: {},
    margin: {}
  });

interface BaseSnackProps extends WithStyles<typeof styles1> {
  className?: string;
  message?: string;
  onClose?: (event?: any, reason?: any) => void;
  variant?: "success" | "warning" | "error" | "info";
}

const MySnackbarContent: React.SFC<BaseSnackProps> = props => {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className) as any}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon
            className={classNames(classes.icon, classes.iconVariant) as any}
          />
          {message}
        </span>
      }
      action={
        [
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ] as any
      }
      {...other}
    />
  );
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

interface CustomSnackProps extends WithStyles<typeof styles1> {
  open?: boolean;
  handleClose?: (event?: any, reason?: any) => void;
  handleClick?: () => void;
  message?: string;
  variant?: "success" | "warning" | "error" | "info";
}

class CustomizedSnackbars extends React.Component<CustomSnackProps> {
  render() {
    const { classes, handleClose, handleClick, open } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: "center",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant={this.props.variant}
          message={this.props.message}
        />
      </Snackbar>
    );
  }
}

export default withStyles(styles2)(CustomizedSnackbars);
