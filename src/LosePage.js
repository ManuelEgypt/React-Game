import React,{Component} from "react";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "./redux/actions";

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

  const mapDispatchToProps = dispatch => {
    return {
      playAgain: () => dispatch(actionCreators.playAgain()),
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(LosePage);

