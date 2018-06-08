import { ActionCreator } from "react-redux";
import * as constants from "./constants";
import { DecrementEnthusiasm, IncrementEnthusiasm } from "./types";

export const incrementEnthusiasm: ActionCreator<IncrementEnthusiasm> = () => ({
  type: constants.INCREMENT_ENTHUSIASM
});

export const decrementEnthusiasm: ActionCreator<DecrementEnthusiasm> = () => ({
  type: constants.DECREMENT_ENTHUSIASM
});
