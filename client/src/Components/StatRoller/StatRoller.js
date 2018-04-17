import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class StatRoller extends Component {
    state = {
        str: strength,
        dex: dexterity,
        con: constitution,
        int: intelligence,
        wis: wisdom,
        cha: charisma
    };
    rollStr = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        this.setState({
            str: result
        });
    };
    rollDex = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        this.setState({
            dex: result
        });
    };
    rollCon = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        this.setState({
            con: result
        });
    };
    rollInt = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        this.setState({
            int: result
        });
    };
    rollWis = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        this.setState({
            wis: result
        });
    };
    rollCha = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        this.setState({
            cha: result
        });
    };
    componentDidMount = () => {
        this.rollStr();
        this.rollDex();
        this.rollCon();
        this.rollInt();
        this.rollWis();
        this.rollCha();
      }
    render() {
        return (
            <div className="stats">
                <div className="stats2">
                    <div>
                        <p> Strength: {this.state.str} </p>
                        <p> Dex: {this.state.dex} </p>
                        <p> Con: {this.state.con} </p>
                        <p> Int: {this.state.int} </p>
                        <p> Wisdom: {this.state.wis} </p>
                        <p> Charisma: {this.state.cha} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(StatRoller);