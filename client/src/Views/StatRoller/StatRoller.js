import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from '../Home'

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
        baseAC: "",
        initiative: "",
        placeholder: "TODO"
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
            baseAC: baseAC,
            initiative: ultMod
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
            <Home 
            str={this.state.str}
            dex={this.state.dex}
            con={this.state.con}
            int={this.state.int}
            wis={this.state.wis}
            cha={this.state.cha}
            todo={this.state.placeholder}
            strmod={this.state.strmod}
            dexmod={this.state.dexmod}
            conmod={this.state.conmod}
            intmod={this.state.intmod}
            wismod={this.state.wismod}
            chamod={this.state.chamod}
            baseAC={this.state.baseAC}
            initiative={this.state.initiative}
            />
        )
    }
}

export default withRouter(StatRoller);