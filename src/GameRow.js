import React,{Component} from "react";

class GameRow extends Component {
    render(){

    return (
        
        <h1 onClick={this.props.changeColor}> {this.props.color} {this.props.validation} </h1>
        
        );
    }
  }

export default GameRow;