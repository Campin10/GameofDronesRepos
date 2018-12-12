import React, { Component } from 'react';
import '../Styles/Main.css';

export class TableRounds extends Component{ 

  render() {
   return(
    <div className="texts">
     <h3>{this.props.names.playerone} ( {this.props.TableRoundsData[this.props.names.playerone]}  ) -- {this.props.names.playertwo} ( {this.props.TableRoundsData[this.props.names.playertwo]} )</h3>           
    </div>
   );
}
}