import React, { Component } from 'react';
import FinishImg from '../assets/images/FinishImg.jpg';
import { Home } from './Home';

export class Finish extends Component{ 

  constructor(props) {
    super(props);
    this.state = {PlayAgain: false}
  }

  FinishGame(){
    return (
        <div>
          <form className="col-sm-8 col-sm-offset-2">
          <h1 className="texts">We have a Result!!!</h1>
          <h1 className="texts">{this.props.winer}</h1>
          <div>
              <div className="col-sm-4 col-sm-offset-4 img-select">
                 <img className="img-responsive" src={FinishImg} alt="Rock"/>
              </div>
             
          </div>
          <input type="button" className="btn btn-primary btn-lg col-md-offset-3 col-md-6 col-xs-12" value="Play Again"
           onClick={() => this.handlePlayAgain()} /> 
          </form>
        </div>
      );
  }

  handlePlayAgain(){
    this.setState({
        PlayAgain: true
    }); 
  }

  PlayAgainView(){
     return(
        <Home/>
    );
  }

  render() {
   if(this.state.PlayAgain === true)
   {
      return this.PlayAgainView()
   }
   else{
      return this.FinishGame()
   }
  }
}
