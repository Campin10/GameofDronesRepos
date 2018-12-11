import React, { Component } from 'react';
import '../Styles/Main.css';
import { BoardGame } from './BoardGame';
export class Home extends Component { 

  constructor(props) {
    super(props);
    this.state = { playerone: '', playertwo: '', startGame: false}
  }
  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  handleStartGame(){
    this.setState({
      startGame: true
    })
  }

  renderStartGame(){
    return(
      <BoardGame names={this.state} />
    );
  }

  renderInit(){
    const { playerone, playertwo} = this.state;
    return (
      <div>
        <form className="col-md-offset-3 col-md-6">
        <h1 className="title">Enter Player names</h1>
       <div className="form-group">
       <input
          className="form-control"
          placeholder="Player 1"
          onChange={(ev) => this.handleChangeField('playerone', ev)}
          value={playerone}
        />
       </div>
       <div className="form-group">
        <input
          className="form-control"
          placeholder="Player 2"
          onChange={(ev) => this.handleChangeField('playertwo', ev)}
          value={playertwo}
        />       
        </div>
        <input type="button" className="btn btn-primary col-md-offset-3 col-md-6 col-xs-12" value="Start"
         onClick={() => this.handleStartGame()} 
         disabled={this.state.playerone.trim() === "" || this.state.playertwo.trim() === ""}
         /> 
        </form>
      </div>
    );
  }
  render() {
    if (this.state.startGame === true) {
      return this.renderStartGame();
    }
    else{
      return this.renderInit();   
    }
  }
}
