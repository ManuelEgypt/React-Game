import React, { Component } from "react";
import "./App.css";

//Components
import GamePage from "./GamePage";
import LosePage from "./LosePage";
import WinPage from "./WinPage";

import { connect } from "react-redux";

class App extends Component {

  render() {
    console.log(this.props)
    let currentPage = () => {
      if (this.props.mode === "inProgress") {
        return <GamePage />;
      }
      if (this.props.mode === "Lose") {
        return <LosePage />;
      }
      if (this.props.mode === "Win") {
        return <WinPage />;
      }
    };

    return <>{currentPage()}</>;
  }
}

const mapStateToProps = state => {
  return {
    mode: state.rootGame.mode
  };
};

export default connect(mapStateToProps)(App);
