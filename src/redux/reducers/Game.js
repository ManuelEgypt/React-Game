import * as actionTypes from "../actions/actionTypes";
import img from "../../data";
import React from "react";

let validationsList = [];
let check = [];
let randomAnswer = [];
const initialState = {
  colors: [
    <img width="50" height="50" src={img[0].imageUrl} />,
    <img width="50" height="50" src={img[0].imageUrl} />,
    <img width="50" height="50" src={img[0].imageUrl} />,
    <img width="50" height="50" src={img[0].imageUrl} />
  ],
  indexes: [1, 1, 1, 1],
  attempts: 1,
  attemptColors: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  attemptValidations: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],

  mode: "inProgress"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAY_AGAIN:
      return {
        ...state,
        colors: [
          <img width="50" height="50" src={img[0].imageUrl} />,
          <img width="50" height="50" src={img[0].imageUrl} />,
          <img width="50" height="50" src={img[0].imageUrl} />,
          <img width="50" height="50" src={img[0].imageUrl} />
        ],
        indexes: [1, 1, 1, 1],
        attempts: 1,
        attemptColors: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],

        attemptValidations: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        mode: "inProgress"
      };

    case actionTypes.CHANGE_COLORS:
      let index = action.payload;
      if (state.indexes[index] < 7) {
        const newIndexes = state.indexes;
        let newIndex = newIndexes[index]++;
        const newColors = state.colors;
        newColors[index] = (
          <img width="50" height="50" src={img[newIndex].imageUrl} />
        );
        return {
          ...state,
          indexes: [...state.indexes],
          colors: [...state.colors]
        };
      } else {
        const newIndexes = state.indexes;
        newIndexes[index] = 2;
        const newColors = state.colors;
        newColors[index] = <img width="50" height="50" src={img[1].imageUrl} />;
        return {
          ...state,
          indexes: [...state.indexes],
          colors: [...state.colors]
        };
      }

    case actionTypes.ATTEMPT:
        let indexes= []
      if(action.payload) {
        indexes = action.payload
      }
      
      let findDuplicates = indexes =>
        indexes.filter((item, index) => indexes.indexOf(item) != index);
      let isThereDublicates = findDuplicates(indexes);
      if (isThereDublicates.length === 0 && !indexes.includes(1)) {
        console.log("PASS");
        const attemptsList = state.colors;
        let no = state.attempts;
        const newAttemptColors = state.attemptColors;
        newAttemptColors[no] = attemptsList;
        console.log();
        return {
          ...state,
          attemptColors: [...state.attemptColors],
          attempts: no + 1
        };
      } else if (isThereDublicates.length !== 0 && !indexes.includes(1)) {
        alert(`Don't repeat a color!`);
      }
      
      

    case actionTypes.VALIDATION:
        let inx= []
        if(action.payload) {
          inx = action.payload
        }
        
        let findDuplicates2 = indexes =>
          indexes.filter((item, index) => indexes.indexOf(item) != index);
        let isThereDublicates2 = findDuplicates2(inx);
  if (isThereDublicates2.length === 0 && !state.indexes.includes(1)) {
    state.indexes.map(index => validationsList.push(index));
  }

  let no = state.attempts;

  check = [];
  let sortedCheckList = [];
  inx.forEach((input, choiceIndex) => {
    console.log(randomAnswer)
    randomAnswer.forEach((ans, ansIndex) => {
      if (input === ans) {
        if (choiceIndex === ansIndex) {
          check.push("vr");
        } else {
          check.push("r");
        }
      }
    });
  });

  if (
    check.length === 4 &&
    check[0] == "vr" &&
    check[1] == "vr" &&
    check[2] == "vr" &&
    check[3] == "vr"
  ) {
    return{
      ...state,
      mode: "Win"
    };
  } else {
    let redColor = <img width="20" height="20" src={img[1].imageUrl} />;
    let greenColor = <img width="20" height="20" src={img[3].imageUrl} />;
    let sortedCheck = check.sort().reverse();
    sortedCheck.forEach(checkValue => {
      if (checkValue === "vr") {
        sortedCheckList.push(greenColor);
      }
    });
    sortedCheck.forEach(checkValue => {
      if (checkValue === "r") {
        sortedCheckList.push(redColor);
      }
    });
    console.log(sortedCheck);
    console.log(sortedCheckList);
    const newAttempVaildations = state.attemptValidations;
    newAttempVaildations[no] = sortedCheckList;
    return{
      ...state,
      attemptValidations: [...state.attemptValidations]
    };
    
  }

    case actionTypes.GENERATE_PATTERN:
      randomAnswer = [];
      while (randomAnswer.length < 4) {
        let a = Math.random();
        let n = Math.round(a * 10);
        if (a < 0.75 && a > 0.15 && !randomAnswer.includes(n)) {
          randomAnswer.push(Math.round(a * 10));
        }
      }
      case actionTypes.CHECK_LOSE:
          if (state.attempts === 12) {
            return {
              ...state,
              mode: "Lose"
            };
          }
    default:
      return state;
  }
};

export default reducer;
