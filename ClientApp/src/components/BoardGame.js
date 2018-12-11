import React, { Component } from 'react';
import rock from '../assets/images/rock.png';
import paper from '../assets/images/paper.jpg';
import scissors from '../assets/images/scissors.png';
import { Finish } from './Finish';
import {TableRounds} from './TableRound';

export class BoardGame extends Component{ 

  constructor(props) {
    super(props);
    this.state = { move: '',
                  currentRound: 1,
                  currentPlayer: this.props.names.playerone,
                  turn: 1,
                  gameMoves: [],
                  winer: '',
                  Finished: false,
                  TableRoundsData: {[this.props.names.playerone]: 0,[this.props.names.playertwo]: 0}}
  }
  handleNext(){
      if(this.state.currentRound <= 3)
      {
        this.PlayerMove = {raund: this.state.currentRound,
            playeroneMove: this.state.currentPlayer === this.props.names.playerone ? this.state.move : this.PlayerMove.playeroneMove,
            playertwoMove: this.state.currentPlayer === this.props.names.playertwo ? this.state.move : null}
       this.setState({
            turn: this.state.turn + 1, 
            currentPlayer: (this.state.currentPlayer === this.props.names.playerone) ? this.props.names.playertwo : this.props.names.playerone,
            move: ''
        });    
        if(this.state.turn === 2){
            let wn = (this.getWinerRound())
            this.PlayerMove.winer = (wn === 1 ? this.props.names.playerone : wn === 2 ? this.props.names.playertwo : 0)
            this.updateTableRaunds()
            this.gameMoves = this.state.gameMoves.push(this.PlayerMove)
            this.setState({
                currentRound: this.state.currentRound + 1,
                turn: 1,
                gameMoves: this.state.gameMoves
            }); 
            if(this.state.currentRound === 3)
            {
                this.finishGame();
            }
        }
      }
  }
  
  updateTableRaunds()
  {
    this.state.TableRoundsData[this.PlayerMove.winer] = this.state.TableRoundsData[this.PlayerMove.winer] + 1
  }

  finishGame()
  {
    let playerOneWins = this.state.TableRoundsData[this.props.names.playerone]
    let playerTwoWins = this.state.TableRoundsData[this.props.names.playertwo]
    var winer = "Empate"
    if(playerOneWins > playerTwoWins)
    {   winer = this.props.names.playerone  }
    if(playerOneWins < playerTwoWins)
    {   winer = this.props.names.playertwo }

    ///////call service save data
    var formData = new FormData();
    var date = new Date();
    var dateValue = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear()

    formData.append("IdStatistics", 0);
    formData.append("Playername", winer);
    formData.append("DateSave", dateValue);
      fetch('api/StartGame/Create', {  
              method: 'POST',  
              body: formData,  
          }).then((response) => response.json())  
              .then((responseJson) => {  
                  console.log(responseJson);  
              })  
    /////////
    winer = `${winer} is the new EMPEROR!`
    this.setState({
        currentRound:1,
        turn: 1,
        gameMoves: [],
        Finished: true,
        winer: winer
    }); 
  }
    
  getWinerRound(){
    if(this.PlayerMove.playeroneMove === "Rock" && this.PlayerMove.playertwoMove === "Scissors")
    { return 1 }
    if(this.PlayerMove.playeroneMove === "Scissors" && this.PlayerMove.playertwoMove === "Rock")
    { return 2 }
    if(this.PlayerMove.playeroneMove === "Paper" && this.PlayerMove.playertwoMove === "Rock")
    { return 1 }
    if(this.PlayerMove.playeroneMove === "Rock" && this.PlayerMove.playertwoMove === "Paper")
    { return 2 }
    if(this.PlayerMove.playeroneMove === "Scissors" && this.PlayerMove.playertwoMove === "Paper")
    { return 1 }
    if(this.PlayerMove.playeroneMove === "Paper" && this.PlayerMove.playertwoMove === "Scissors")
    { return 2 }
  }

  handleChangeRadio(value) {
    this.setState({
        move: value
      });
  }

  boardGame(){
    return (
        <div>
        <TableRounds names={this.props.names} TableRoundsData={this.state.TableRoundsData}/>
           <form className="col-sm-6 col-sm-offset-3">
          <h1 className="title">Round {this.state.currentRound} </h1>
          <h1 className="title">{this.state.currentPlayer}</h1>
          <div>
              <div className="col-sm-4  col-xs-4  img-select">
                 <img className="img-responsive" src={rock} alt="Rock"
                 onClick={() => this.handleChangeRadio("Rock")}/>
              </div>
              <div className="col-sm-4 col-xs-4 img-select">
              <img className="img-responsive" src={paper} alt="Paper"
               onClick={() => this.handleChangeRadio("Paper")}/>
              </div>
              <div className="col-sm-4 col-xs-4 img-select">
           <img className="img-responsive" src={scissors} alt="Scissors"
           onClick={() => this.handleChangeRadio("Scissors")}/>
          </div>
          </div>
          <div className="col-md-offset-3 col-md-6 col-xs-12">
          <h2 className="title">{this.state.move != '' ? this.state.move : "Move"}</h2>
          </div>
          <input type="button allbutton" disabled={this.state.move === ""} className="btn btn-primary col-md-offset-3 col-md-6 col-xs-12" value="OK"
           onClick={() => this.handleNext()} /> 
          </form>
        </div>
      );
  }

  FinishView()
  {
      return(
         <Finish winer={this.state.winer}/>
    );
  }

  render() {
   if(this.state.Finished === true)
   {
      return this.FinishView()
   }
   else{
      return this.boardGame()
   }
  }

}
