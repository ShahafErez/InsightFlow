import { FETCH_SERVEYS } from "../actions/types";

export default function surveysReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SERVEYS:
      return action.payload;
    default:
      return state;
  }
}
