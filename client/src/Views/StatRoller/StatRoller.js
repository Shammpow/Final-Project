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
        level: 1,
        prf: 2,
        baseAC: "",
        align: ""
    };
    rollStr = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            str: result,
            strmod: ultMod
        });
    };
    rollDex = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
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
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            con: result,
            conmod: ultMod
        });
    };
    rollInt = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            int: result,
            intmod: ultMod
        });
    };
    rollWis = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            wis: result,
            wismod: ultMod
        });
    };
    rollCha = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            cha: result,
            chamod: ultMod
        });
    };
    componentDidMount = () => {
        // consolidate
        this.rollStr();
        this.rollDex();
        this.rollCon();
        this.rollInt();
        this.rollWis();
        this.rollCha();
        this.rollAlign();
    };
    buttonRoll = () => {
        this.rollStr();
        this.rollDex();
        this.rollCon();
        this.rollInt();
        this.rollWis();
        this.rollCha();
        this.rollAlign();
    };
    determinePRF(level) {
        let prf;
        if (level < 5) {
            prf = 2;
            return prf;
        }
        else if (level < 9) {
            prf = 3;
            return prf;
        }
        else if (level < 13) {
            prf = 4;
            return prf;
        }
        else if (level < 17) {
            prf = 5;
            return prf;
        }
        else if (level < 21) {
            prf = 6;
            return prf;
        }
    }
    levelSelect = props => {
        let newprf = this.determinePRF(props.target.value);
        this.setState({
            level: props.target.value,            
            prf: newprf
        })
    }
    rollAlign = () => {
        const Arr1 = ['Lawful', 'Neutral', 'Chaotic']
        const Arr2 = ['Good', 'Neutral', 'Evil']
        let align = Arr1[Math.floor(Math.random() * Arr1.length)] + " " + Arr2[Math.floor(Math.random() * Arr2.length)];
        if (align == "Neutral Neutral"){
            align = "True Neutral";
        }
        this.setState({
            align: align
        })
    }
    render() {
        return (
            <div className="container">
                <div className="stats">
                    <span onClick={() => this.buttonRoll()} className="reroll">
                        �</span>
                    <span>
                        <select className="levelchange" defaultValue={this.state.level} value={this.state.level} onChange={this.levelSelect}>
                            <option value="1" prf="2">1</option>
                            <option value="2" prf="2">2</option>
                            <option value="3" prf="2">3</option>
                            <option value="4" prf="2">4</option>
                            <option value="5" prf="3">5</option>
                            <option value="6" prf="3">6</option>
                            <option value="7" prf="3">7</option>
                            <option value="8" prf="3">8</option>
                            <option value="9" prf="4">9</option>
                            <option value="10" prf="4">10</option>
                            <option value="11" prf="4">11</option>
                            <option value="12" prf="4">12</option>
                            <option value="13" prf="5">13</option>
                            <option value="14" prf="5">14</option>
                            <option value="15" prf="5">15</option>
                            <option value="16" prf="5">16</option>
                            <option value="17" prf="6">17</option>
                            <option value="18" prf="6">18</option>
                            <option value="19" prf="6">19</option>
                            <option value="20" prf="6">20</option>
                        </select>
                    </span>
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
                            <p> Alignment: {this.state.align} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(StatRoller);