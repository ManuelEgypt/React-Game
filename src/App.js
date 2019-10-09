import React,{Component} from 'react';
import './App.css';
import img from './data';

//Components
import GamePage from './GamePage'
import LosePage from './LosePage'
import WinPage from './WinPage'




const images = img.map(i => {
  return <img src={i.imageUrl} />;
});

let highscore = 15
let attemptsList = []
let validationsList = []
let check = []
let randomAnswer = []


let generate = () => {

while(randomAnswer.length < 4){
  let a = Math.random()
  let n = Math.round(a*10)
 if (a<0.75 && a>0.15 && !randomAnswer.includes(n)){
   randomAnswer.push(Math.round(a*10))
 }
}
return randomAnswer
}
let generated = generate()

  
class App extends Component {
  state = {
    color1: <img width="50" height="50" src={img[0].imageUrl} />, 
    color2: <img width="50" height="50" src={img[0].imageUrl} />,
    color3: <img width="50" height="50" src={img[0].imageUrl} />,
    color4: <img width="50" height="50" src={img[0].imageUrl} />,
    index1: 1,
    index2: 1,
    index3: 1,
    index4: 1,
    attempts: 1,
    attempt1Colors: null,
    attempt2Colors: null,
    attempt3Colors: null,
    attempt4Colors: null,
    attempt5Colors: null,
    attempt6Colors: null,
    attempt7Colors: null,
    attempt8Colors: null,
    attempt9Colors: null,
    attempt10Colors: null,
    attempt11Colors: null,
    attempt12Colors: null,

    attempt1Validation: null,
    attempt2Validation: null,
    attempt3Validation: null,
    attempt4Validation: null,
    attempt5Validation: null,
    attempt6Validation: null,
    attempt7Validation: null,
    attempt8Validation: null,
    attempt9Validation: null,
    attempt10Validation: null,
    attempt11Validation: null,
    attempt12Validation: null,

    mode:'inProgress',
    
  }

  render(){

    let playAgain= () => {
      answer = {generated}
      this.setState({
        color1: <img width="50" height="50" src={img[0].imageUrl} />, 
        color2: <img width="50" height="50" src={img[0].imageUrl} />,
        color3: <img width="50" height="50" src={img[0].imageUrl} />,
        color4: <img width="50" height="50" src={img[0].imageUrl} />,
        index1: 1,
        index2: 1,
        index3: 1,
        index4: 1,
        attempts: 1,
        attempt1Colors: null,
        attempt2Colors: null,
        attempt3Colors: null,
        attempt4Colors: null,
        attempt5Colors: null,
        attempt6Colors: null,
        attempt7Colors: null,
        attempt8Colors: null,
        attempt9Colors: null,
        attempt10Colors: null,
        attempt11Colors: null,
        attempt12Colors: null,
    
        attempt1Validation: null,
        attempt2Validation: null,
        attempt3Validation: null,
        attempt4Validation: null,
        attempt5Validation: null,
        attempt6Validation: null,
        attempt7Validation: null,
        attempt8Validation: null,
        attempt9Validation: null,
        attempt10Validation: null,
        attempt11Validation: null,
        attempt12Validation: null,
        mode: 'inProgress'
      })
    }
      

    let currentPage = () => {
      if (this.state.mode==='inProgress') {
        return (
    <GamePage attempts={this.state.attempts}
     attempt1Colors={this.state.attempt1Colors} 
     attempt2Colors={this.state.attempt2Colors}
     attempt3Colors={this.state.attempt3Colors}
     attempt4Colors={this.state.attempt4Colors}
     attempt5Colors={this.state.attempt5Colors}
     attempt6Colors={this.state.attempt6Colors}
     attempt7Colors={this.state.attempt7Colors}
     attempt8Colors={this.state.attempt8Colors}
     attempt9Colors={this.state.attempt9Colors}
     attempt10Colors={this.state.attempt10Colors}
     attempt11Colors={this.state.attempt11Colors}
     attempt12Colors={this.state.attempt12Colors}
     attempt1Validation={this.state.attempt1Validation}
     attempt2Validation={this.state.attempt2Validation}
     attempt3Validation={this.state.attempt3Validation}
     attempt4Validation={this.state.attempt4Validation}
     attempt5Validation={this.state.attempt5Validation}
     attempt6Validation={this.state.attempt6Validation}
     attempt7Validation={this.state.attempt7Validation}
     attempt8Validation={this.state.attempt8Validation}
     attempt9Validation={this.state.attempt9Validation}
     attempt10Validation={this.state.attempt10Validation}
     attempt11Validation={this.state.attempt11Validation}
     attempt12Validation={this.state.attempt12Validation}
     color1={this.state.color1}
     color2={this.state.color2}
     color3={this.state.color3}
     color4={this.state.color4}
     changeColor1={changeColor1}
     changeColor2={changeColor2}
     changeColor3={changeColor3}
     changeColor4={changeColor4}
     attempt = {attempt}
     validation = {validation}
     />
        );
      }
      if (this.state.mode==='Lose') {
        return <LosePage playAgain = {playAgain} />
    };
    if (this.state.mode==='Win') {
      return <WinPage playAgain = {playAgain}/>
  };
  }

    
    let colors = [<img width="50" height="50" src={img[1].imageUrl} />,<img width="50" height="50" src={img[1].imageUrl} />,<img width="50" height="50" src={img[2].imageUrl} />,<img width="50" height="50" src={img[3].imageUrl} />,<img width="50" height="50" src={img[4].imageUrl} />,<img width="50" height="50" src={img[5].imageUrl} />,<img width="50" height="50" src={img[6].imageUrl} />]
    let userChoice = [this.state.index1,this.state.index2,this.state.index3,this.state.index4]
    let answer = randomAnswer
    console.log(answer)
   let changeColor1 = () => {
     if (this.state.index1<7){
      this.setState({
        index1: this.state.index1 + 1
      })
      this.setState({
        color1: colors[this.state.index1]
      })
     }
     else { 
      this.setState({
        color1: colors[0],
        index1: 2
      })
     }
   }

   let changeColor2 = () => {
    if (this.state.index2<7){
     this.setState({
       index2: this.state.index2 + 1
     })
     this.setState({
       color2: colors[this.state.index2]
     })
    }
    else { 
     this.setState({
       color2: colors[0],
       index2: 2
     })
    }
  }

  let changeColor3 = () => {
    if (this.state.index3<7){
     this.setState({
       index3: this.state.index3 + 1
     })
     this.setState({
       color3: colors[this.state.index3]
     })
    }
    else { 
     this.setState({
       color3: colors[0],
       index3: 2
     })
    }
  }

  let changeColor4 = () => {
    if (this.state.index4<7){
     this.setState({
       index4: this.state.index4 + 1
     })
     this.setState({
       color4: colors[this.state.index4]
     })
    }
    else { 
     this.setState({
       color4: colors[0],
       index4: 2
     })
    }
  }


  let array = [this.state.index1,this.state.index2,this.state.index3,this.state.index4]
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
  let isThereDublicates = findDuplicates(array)

  let attempt = () => {
    if ((isThereDublicates.length === 0) && (!array.includes(1))){
    console.log("PASS")
    attemptsList.push([this.state.color1,this.state.color2,this.state.color3,this.state.color4])
    let no = this.state.attempts
    this.setState({
      [`attempt${no}Colors`]: attemptsList[no-1],
      attempts: no+1
    })
   }
   else if ((isThereDublicates.length !== 0) && (!array.includes(1))){
    alert(`Don't repeat a color!`)
   }
   if (this.state.attempts === 12){
    this.setState({
      mode:'Lose' 
    })
   }
  }


  let validation = () => {
    if ((isThereDublicates.length === 0) && (!array.includes(1))){
    validationsList.push([this.state.index1,this.state.index2,this.state.index3,this.state.index4])
    let no = this.state.attempts

    check = []
    let sortedCheckList = []
    userChoice.forEach((input,choiceIndex) => {
      answer.forEach((ans,ansIndex) => {
        if (input === ans) {
          if (choiceIndex === ansIndex){
            check.push("vr")
          }
          else {
            check.push("r")
          }
        }
      })
    })
 
      if ( (check.length ===4) && (check[0]=="vr") && (check[1]=="vr") && (check[2]=="vr") && (check[3]=="vr")){
        this.setState({
          mode:'Win' 
        })
      }

      else {
    let redColor = <img width="20" height="20" src={img[1].imageUrl} />
    let greenColor = <img width="20" height="20" src={img[3].imageUrl} />
    console.log(check)
    let sortedCheck = check.sort().reverse()
     sortedCheck.forEach(checkValue => {
      if (checkValue==="vr"){
        sortedCheckList.push(greenColor)
      }
    });
    sortedCheck.forEach(checkValue => {
      if (checkValue==="r"){
        sortedCheckList.push(redColor)
      }
    });
    console.log(sortedCheck)
    console.log(sortedCheckList)

    this.setState({
      [`attempt${no}Validation`]: sortedCheckList,
    })
  }
  }
}



  return (
    <>
    {currentPage()}
    </>
    

  );
    
}
}

export default App;

