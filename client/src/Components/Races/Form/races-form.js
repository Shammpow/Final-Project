import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import racesApi from '../../../Data/races-api';
import './races-form.scss';
class RacesList extends Component {
  state = {
    races: []
  };
  componentDidMount = () => {
    racesApi.getAll({}).then(races => {
      this.setState({
        races
      })
    })
  }
  render() {
    return (
      <div className="races-form">
        <div className="races-inputs">
        {this.state.races.map(race => (
          <div>
            <h1> Race: {this.state.races.length !==0 && race.race} </h1>
            <p> Languages: {this.state.races.length !==0 && race.language} </p>
            <p> Size: {this.state.races.length !==0 && race.size} </p>
            <p> Speed: {this.state.races.length !==0 && race.speed} </p>
          </div>
        ))}
        </div>
      </div>
    )
  }
}
export default withRouter(RacesList);
