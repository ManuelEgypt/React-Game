import React, { Component } from "react";
import "./App.css";
import img from "./data";

//Components
import GamePage from "./GamePage";
import LosePage from "./LosePage";
import WinPage from "./WinPage";

const images = img.map(i => {
  return <img src={i.imageUrl} />;
});

let highscore = 15;
let attemptsList = [];
let validationsList = [];
let check = [];
let randomAnswer = [];

let generate = () => {
  randomAnswer = [];
  while (randomAnswer.length < 4) {
    let a = Math.random();
    let n = Math.round(a * 10);
    if (a < 0.75 && a > 0.15 && !randomAnswer.includes(n)) {
      randomAnswer.push(Math.round(a * 10));
    }
  }
  return randomAnswer;
};

class App extends Component {
  state = {
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

  componentDidMount() {
    {
      generate();
    }
  }

  componentDidUpdate() {
    if (this.state.mode === "Lose" || this.state.mode === "Win") {
      generate();
    }
  }

  // componentDidUpdate() {
  //   {
  //     if (this.state.mode === "Lose") {
  //       generate();
  //     }
  //   }
  // }

  render() {
    let playAgain = () => {
      this.setState({
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
      });
    };

    let currentPage = () => {
      if (this.state.mode === "inProgress") {
        return (
          <GamePage
            attempts={this.state.attempts}
            attemptColors={this.state.attemptColors}
            attemptValidations={this.state.attemptValidations}
            colors={this.state.colors}
            changeColors={changeColors}
            attempt={attempt}
            validation={validation}
          />
        );
      }
      if (this.state.mode === "Lose") {
        return <LosePage playAgain={playAgain} />;
      }
      if (this.state.mode === "Win") {
        return <WinPage playAgain={playAgain} />;
      }
    };

    let colors = [
      <img width="50" height="50" src={img[1].imageUrl} />,
      <img width="50" height="50" src={img[1].imageUrl} />,
      <img width="50" height="50" src={img[2].imageUrl} />,
      <img width="50" height="50" src={img[3].imageUrl} />,
      <img width="50" height="50" src={img[4].imageUrl} />,
      <img width="50" height="50" src={img[5].imageUrl} />,
      <img width="50" height="50" src={img[6].imageUrl} />
    ];
    let userChoice = this.state.indexes;
    console.log(randomAnswer);

    let changeColors = index => {
      if (this.state.indexes[index] < 7) {
        const newIndexes = this.state.indexes;
        let newIndex = newIndexes[index]++;
        const newColors = this.state.colors;
        newColors[index] = (
          <img width="50" height="50" src={img[newIndex].imageUrl} />
        );
        this.setState({
          indexes: [...this.state.indexes],
          colors: [...this.state.colors]
        });
      } else {
        const newIndexes = this.state.indexes;
        newIndexes[index] = 2;
        const newColors = this.state.colors;
        newColors[index] = <img width="50" height="50" src={img[1].imageUrl} />;
        this.setState({
          indexes: [...this.state.indexes],
          colors: [...this.state.colors]
        });
      }
    };

    let findDuplicates = indexes =>
      indexes.filter((item, index) => indexes.indexOf(item) != index);

    let isThereDublicates = findDuplicates(this.state.indexes);

    let attempt = () => {
      if (isThereDublicates.length === 0 && !this.state.indexes.includes(1)) {
        console.log("PASS");
        const attemptsList = this.state.colors;
        let no = this.state.attempts;
        const newAttemptColors = this.state.attemptColors;
        newAttemptColors[no] = attemptsList;
        console.log();
        this.setState({
          attemptColors: [...this.state.attemptColors],
          attempts: no + 1
        });
      } else if (
        isThereDublicates.length !== 0 &&
        !this.state.indexes.includes(1)
      ) {
        alert(`Don't repeat a color!`);
      }
      if (this.state.attempts === 12) {
        this.setState({
          mode: "Lose"
        });
      }
    };

    let validation = () => {
      if (isThereDublicates.length === 0 && !this.state.indexes.includes(1)) {
        this.state.indexes.map(index => validationsList.push(index));
      }

      let no = this.state.attempts;

      check = [];
      let sortedCheckList = [];
      userChoice.forEach((input, choiceIndex) => {
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
        this.setState({
          mode: "Win"
        });
      } else {
        let redColor = <img width="20" height="20" src={img[1].imageUrl} />;
        let greenColor = <img width="20" height="20" src={img[3].imageUrl} />;
        console.log(check);
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
        const newAttempVaildations = this.state.attemptValidations;
        newAttempVaildations[no] = sortedCheckList;
        this.setState({
          attemptValidations: [...this.state.attemptValidations]
        });
      }
    };

    return <>{currentPage()}</>;
  }
}

export default App;
