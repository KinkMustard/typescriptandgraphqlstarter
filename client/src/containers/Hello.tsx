import { connect, Dispatch } from "react-redux";
import * as actions from "../actions/";
import Hello, { Props } from "../components/Hello";
import { StoreState } from "../types/index";

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm())
  };
}

export default connect<Props>(mapStateToProps, mapDispatchToProps)(Hello);
