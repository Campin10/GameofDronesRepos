import React, { Component } from 'react';
import '../Styles/Main.css';

export class StatisticData extends Component {
  
  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
     fetch('api/StartGame/ListStatistics')
       .then(response => response.json())
       .then(data => {
     this.setState({ forecasts: data, loading: false })
    });
  }

  static renderForecastsTable(forecasts) {
    return (
<div className="col-sm-6 col-sm-offset-3" >
<table className='table table-bordered texts'>
        <thead>
          <tr>
            <th className="texts">Player</th>
            <th className="texts">Date</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.idStatistics}>
              <td>{forecast.playername}</td>
              <td>{forecast.dateSave}</td>
            </tr>
          )}
        </tbody>
      </table>
</div>

    );
  }

  render() {
    let contents = this.state.loading
      ? <p className="texts"><em>Loading...</em></p>
      : StatisticData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 className="texts">Game statistics</h1>
        {contents}
      </div>
    );
  }
}
