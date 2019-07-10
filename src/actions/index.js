import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  SET_SEARCHING,
} from "../constants/action-types";

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
      message,
      userId
  }
});

export const setSearching = (search_text) => ({
  type: SET_SEARCHING,
  payload: {
      search_text
  }
});
