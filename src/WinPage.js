import React,{Component} from "react";

class WinPage extends Component {
    render(){

    return (
        <>
        <h1> You Won </h1>
        <button className="button mx-3" onClick={this.props.playAgain }> Play Again </button>
        </>
        );
    }
  }

export default WinPage;
