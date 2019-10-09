import * as actionTypes from "./actionTypes";

export const playAgain = () => {
  return {
    type: actionTypes.PLAY_AGAIN
  };
};

export const changeColors = index => {
  return {
    type: actionTypes.CHANGE_COLORS,
    payload: index
  };
};

export const attempt = indexes => {
  return {
    type: actionTypes.ATTEMPT,
    payload: indexes
  };
};

export const validation = () => {
  return {
    type: actionTypes.VALIDATION
  };
};

export const generate = () => {
  return {
    type: actionTypes.GENERATE_PATTERN
  };
};
