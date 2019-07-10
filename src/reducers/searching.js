import { SET_SEARCHING } from "../constants/action-types";

export default function searching(state = "", action) {
  switch (action.type) {
    case SET_SEARCHING:
      return action.payload;
    default:
      return state;
  }
}