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

export const validation = (indexes) => {
  return {
    type: actionTypes.VALIDATION,
    payload:indexes

  };
};

export const generate = () => {
  return {
    type: actionTypes.GENERATE_PATTERN
  };
};

export const checkLose = () => {
  return {
    type: actionTypes.CHECK_LOSE
  };
};
