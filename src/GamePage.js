import React,{Component} from "react";

//Components
import GameRow from './GameRow'

class GamePage extends Component {
    render(){

    return (
            <>

            <div className="row my-3 mx-5" >
            <h2> Attempts left: {13 - this.props.attempts} </h2>
            </div>

            <div className="row my-3" > 
            <div className="mx-5"> {this.props.attempt1Colors} {this.props.attempt1Validation} </div>
            <div className="mx-5"> {this.props.attempt7Colors} {this.props.attempt7Validation} </div>
            </div>

            <div className="row my-3" > 
            <div className="mx-5"> {this.props.attempt2Colors} {this.props.attempt2Validation} </div>
            <div className="mx-5"> {this.props.attempt8Colors} {this.props.attempt8Validation} </div>
            </div>

            <div className="row my-3" > 
            <div className="mx-5"> {this.props.attempt3Colors} {this.props.attempt3Validation} </div>
            <div className="mx-5"> {this.props.attempt9Colors} {this.props.attempt9Validation} </div>
            </div>

            <div className="row my-3" > 
            <div className="mx-5"> {this.props.attempt4Colors} {this.props.attempt4Validation} </div>
            <div className="mx-5"> {this.props.attempt10Colors} {this.props.attempt10Validation} </div>
            </div>

            <div className="row my-3" > 
            <div className="mx-5"> {this.props.attempt5Colors} {this.props.attempt5Validation} </div>
            <div className="mx-5"> {this.props.attempt11Colors} {this.props.attempt11Validation} </div>
            </div>

            <div className="row my-3" > 
            <div className="mx-5"> {this.props.attempt6Colors} {this.props.attempt6Validation} </div>
            <div className="mx-5"> {this.props.attempt12Colors} {this.props.attempt12Validation} </div>
            </div>






            <div className="row mx-5" > 
            <div> <GameRow color={this.props.color1} changeColor={this.props.changeColor1}/></div>
            <div> <GameRow color={this.props.color2} changeColor={this.props.changeColor2}/></div>
            <div> <GameRow color={this.props.color3} changeColor={this.props.changeColor3}/></div>
            <div> <GameRow color={this.props.color4} changeColor={this.props.changeColor4}/></div>
            <button className="button mx-3" onClick={() => {this.props.attempt(); this.props.validation();} }> SUBMIT </button>

            </div>

            </>
        );
    }
  }

export default GamePage;

