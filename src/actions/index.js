import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE
} from "../constants/action-types";

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});