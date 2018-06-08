import { Reducer } from "redux";
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "./constants";
import { EnthusiasmActions, EnthusiasmState } from "./types";

export const initialState: EnthusiasmState = {
  languageName: "i love memes",
  enthusiasmLevel: 0
};

const reducer: Reducer<EnthusiasmState> = (
  state: EnthusiasmState = initialState,
  action
) => {
  switch ((action as EnthusiasmActions).type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(0, state.enthusiasmLevel - 1)
      };
    default:
      return state;
  }
};

export default reducer;
