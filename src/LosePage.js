import React,{Component} from "react";

class LosePage extends Component {
    render(){

    return (
        
        <>
        <h1> You Lost </h1>
        <button className="button mx-3" onClick={this.props.playAgain }> Try Again </button>
        </>
        
        );
    }
  }

export default LosePage;

