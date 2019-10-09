import React, { Component } from "react";

//Components
import GameRow from "./GameRow";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "./redux/actions";

class GamePage extends Component {
  render() {
    return (
      <>
        <div className="row my-3 mx-5">
          <h2> Attempts left: {13 - this.props.attempts} </h2>
        </div>

        <div className="row my-3">
          <div className="mx-5">
            {this.props.attemptColors[0]} {this.props.attemptValidations[0]}
          </div>
          <div className="mx-5">
            {this.props.attemptColors[6]} {this.props.attemptValidations[6]}
          </div>
        </div>

        <div className="row my-3">
          <div className="mx-5">
            {this.props.attemptColors[1]} {this.props.attemptValidations[1]}
          </div>
          <div className="mx-5">
            {this.props.attemptColors[7]} {this.props.attemptValidations[7]}
          </div>
        </div>

        <div className="row my-3">
          <div className="mx-5">
            {this.props.attemptColors[2]} {this.props.attemptValidations[2]}
          </div>
          <div className="mx-5">
            {this.props.attemptColors[8]} {this.props.attemptValidations[8]}
          </div>
        </div>

        <div className="row my-3">
          <div className="mx-5">
            {this.props.attemptColors[3]} {this.props.attemptValidations[3]}
          </div>
          <div className="mx-5">
            {this.props.attemptColors[9]} {this.props.attemptValidations[9]}
          </div>
        </div>

        <div className="row my-3">
          <div className="mx-5">
            {this.props.attemptColors[4]} {this.props.attemptValidations[4]}
          </div>
          <div className="mx-5">
            {this.props.attemptColors[10]} {this.props.attemptValidations[10]}
          </div>
        </div>

        <div className="row my-3">
          <div className="mx-5">
            {this.props.attemptColors[5]} {this.props.attemptValidations[5]}
          </div>
          <div className="mx-5">
            {this.props.attemptColors[11]} {this.props.attemptValidations[11]}
          </div>
        </div>

        <div className="row mx-5">
          <div>
            <GameRow
              color={this.props.colors}
              changeColors={this.props.changeColors(0)}
            />
          </div>
          <div>
            <GameRow
              color={this.props.colors}
              changeColors={this.props.changeColors(1)}
            />
          </div>
          <div>
            <GameRow
              color={this.props.colors}
              changeColors={this.props.changeColors(2)}
            />
          </div>
          <div>
            <GameRow
              color={this.props.colors}
              changeColors={this.props.changeColors(3)}
            />
          </div>

          <button
            className="button mx-3"
            onClick={() => {
              this.props.attempt(this.props.indexes);
              this.props.validation();
            }}
          >
            SUBMIT
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    attemptValidations: state.attemptValidations,
    attemptColors: state.attemptColors,
    attemps: state.attempts,
    colors: state.colors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attempt: indexes => dispatch(actionCreators.attempt(indexes)),
    validation: () => dispatch(actionCreators.attempt()),
    changeColors: index => dispatch(actionCreators.changeColors(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
