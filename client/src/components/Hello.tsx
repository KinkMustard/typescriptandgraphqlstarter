import * as React from "react";
import { connect, Dispatch } from "react-redux";
import {
  decrementEnthusiasm,
  incrementEnthusiasm
} from "../store/enthusiasm/actions";
import { EnthusiasmActions, EnthusiasmState } from "../store/enthusiasm/types";
import { ApplicationState, ConnectedReduxProps } from "../store/index";
import "./Hello.css";
interface Props {
  languageName?: string;
  enthusiasmLevel?: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
}
// type AllProps = Props & EnthusiasmState;

class Hello extends React.Component<Props> {
  render() {
    if (this.props.enthusiasmLevel < 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello{" "}
          {this.props.languageName +
            getExclamationMarks(this.props.enthusiasmLevel)}
        </div>
        <div>
          <button onClick={this.props.onDecrement}>-</button>
          <button onClick={this.props.onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => state.enthusiasm;
const mapDispatchToProps = (dispatch: Dispatch<EnthusiasmActions>) => {
  return {
    onDecrement: () => dispatch(decrementEnthusiasm()),
    onIncrement: () => dispatch(incrementEnthusiasm())
  };
};
// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

export default connect<Props>(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
