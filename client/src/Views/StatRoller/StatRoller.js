import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class StatRoller extends Component {
    state = {
        str: "",
        strmod: "",
        dex: "",
        dexmod: "",
        con: "",
        conmod: "",
        int: "",
        intmod: "",
        wis: "",
        wismod: "",
        cha: "",
        chamod: "",
        level: 13,
        prf: "",
        baseAC: ""
    };
    rollStr = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        let postMod = result - 10;
        let blahMod = postMod / 2;        
        let ultMod = Math.floor(blahMod);
        this.setState({
            str: result,
            strmod: ultMod
        });
    };
    rollDex = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        const baseAC = ultMod + 10;
        this.setState({
            dex: result,
            dexmod: ultMod,
            baseAC: baseAC
        });
    };
    rollCon = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            con: result,
            conmod: ultMod
        });
    };
    rollInt = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            int: result,
            intmod: ultMod
        });
    };
    rollWis = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            wis: result,
            wismod: ultMod
        });
    };
    rollCha = event => {
        let firstRoll = Math.floor(Math.random() * 6) + 1;
        let secondRoll = Math.floor(Math.random() * 6) + 1;
        let thirdRoll = Math.floor(Math.random() * 6) + 1;
        let result = firstRoll + secondRoll + thirdRoll;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            cha: result,
            chamod: ultMod
        });
    };
    rollPro = event => {
        let proficiency = 2;
        if (this.state.level > 4) {
            proficiency++
        }
        if (this.state.level > 8) {
            proficiency++
        }
        if (this.state.level > 12) {
            proficiency++
        }
        if (this.state.level > 16) {
            proficiency++
        }
        this.setState({
            prf: proficiency
        })
    };
    componentDidMount = () => {
        this.rollStr();
        this.rollDex();
        this.rollCon();
        this.rollInt();
        this.rollWis();
        this.rollCha();
        this.rollPro();
      }
    render() {
        return (
            <div className="stats">
                <div className="stats2">
                    <div>
                        <p> Strength: {this.state.str} Mod: {this.state.strmod} </p>
                        <p> Dex: {this.state.dex} Mod: {this.state.dexmod} </p>
                        <p> Con: {this.state.con} Mod: {this.state.conmod} </p>
                        <p> Int: {this.state.int} Mod: {this.state.intmod} </p>
                        <p> Wisdom: {this.state.wis} Mod: {this.state.wismod} </p>
                        <p> Charisma: {this.state.cha} Mod: {this.state.chamod} </p>
                        <p> Level: {this.state.level} Proficiency: {this.state.prf} </p>
                        <p> Base AC: {this.state.baseAC} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(StatRoller);