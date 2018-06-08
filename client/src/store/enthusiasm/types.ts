import * as constants from "./constants";

export interface EnthusiasmState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmActions = IncrementEnthusiasm | DecrementEnthusiasm;
