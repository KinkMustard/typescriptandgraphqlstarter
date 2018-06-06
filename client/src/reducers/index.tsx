import { EnthusiasmAction } from "../actions";
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "../constants/index";
import { StoreState } from "../types/index";

export function enthusiasm(
  state: StoreState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
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
}
