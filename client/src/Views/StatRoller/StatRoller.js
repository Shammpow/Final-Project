import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from '../Home';
import './StatRoller.scss';
import racesAPI from '../../Data/races-api'

class StatRoller extends Component {
    state = {
        str: "",
        strmod: "",
        strsave: "",
        dex: "",
        dexmod: "",
        dexsave: "",
        con: "",
        conmod: "",
        consave: "",
        int: "",
        intmod: "",
        intsave: "",
        wis: "",
        wismod: "",
        wissave: "",
        cha: "",
        chamod: "",
        chasave: "",
        level: 1,
        prf: 2,
        baseAC: "",
        align: "",
        initiative: "",
        class: "",
        placeholder: "TODO",
        race: "",
        speed: "",
        languages: "",
        hp: ""
    };
    rollStr = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            str: result,
            strmod: ultMod,
            strsave: ultMod
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
            dexsave: ultMod,
            baseAC: baseAC,
            initiative: ultMod
        });
    };
    rollCon = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            con: result,
            conmod: ultMod,
            consave: ultMod
        });
    };
    rollInt = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            int: result,
            intmod: ultMod,
            intsave: ultMod
        });
    };
    rollWis = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            wis: result,
            wismod: ultMod,
            wissave: ultMod
        });
    };
    rollCha = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            cha: result,
            chamod: ultMod,
            chasave: ultMod
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
        this.rollThatClass();
        racesAPI.getAll().then(stuff => {
            let choice = stuff[Math.floor(Math.random() * stuff.length)]
            this.setState({race: choice.race, language: choice.language, speed: choice.speed})
        })
    };
    buttonRoll = () => {
        this.rollStr();
        this.rollDex();
        this.rollCon();
        this.rollInt();
        this.rollWis();
        this.rollCha();
        this.rollAlign();
        this.rollThatClass();
        racesAPI.getAll().then(stuff => {
            let choice = stuff[Math.floor(Math.random() * stuff.length)]
            this.setState({race: choice.race, language: choice.language, speed: choice.speed})
        })

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
        let newHP = this.rollHP(props.target.value);
        this.setState({
            level: props.target.value,
            prf: newprf,
            hp: newHP
        })
    }
    rollAlign = () => {
        const Arr1 = ['Lawful', 'Neutral', 'Chaotic']
        const Arr2 = ['Good', 'Neutral', 'Evil']
        let align = Arr1[Math.floor(Math.random() * Arr1.length)] + " " + Arr2[Math.floor(Math.random() * Arr2.length)];
        if (align === "Neutral Neutral") {
            align = "True Neutral";
        }
        this.setState({
            align: align
        })
    }
    rollThatClass = () => {
        const baseArr = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
        const barbSubs = ['Berserker', 'Totem Warrior'];
        const bardSubs = ['College of Lore', 'College of Valor']
        const clerSubs = ['Knowledge', 'Life', 'Light', 'Nature', 'Tempest', 'Trickery', 'War']
        const druidSubs = ['Moon', 'Arctic', 'Coast', 'Desert', 'Forest', 'Grassland', 'Mountain', 'Swamp', 'Underdark']
        const fighSubs = ['Champion', 'Battle Master', 'Eldritch Knight']
        const monkSubs = ['Open Palm', 'Shadow', '4 Elements']
        const palaSubs = ['Devotion Oath', 'Ancient Oath', 'Vengeance Oath']
        const rangSubs = ['Hunter', 'Beast Master']
        const rogSubs = ['Thief', 'Assassin', 'Arcane Trickster']
        const sorcSubs = ['Wild', 'Black Dragon', 'Blue Dragon', 'Brass Dragon', 'Bronze Dragon', 'Copper Dragon', 'Gold Dragon', 'Green Dragon', 'Red Dragon', 'Silver Dragon', 'White Dragon']
        const warlSubs = ['Fey Blade-Pact', 'Fey Chain-Pact', 'Fey Tome-Pact', 'Old One Blade-Pact', 'Old One Chain-Pact', 'Old Tome-Pact', 'Infernal Blade-Pact', 'Infernal Chain-Pact', 'Infernal Tome-Pact']
        const wizSubs = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']

        let baseRoll = baseArr[Math.floor(Math.random() * baseArr.length)];
        let rolledClass;
        if (baseRoll === 'Barbarian') {
            rolledClass = barbSubs[Math.floor(Math.random() * barbSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Bard') {
            rolledClass = bardSubs[Math.floor(Math.random() * bardSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Cleric') {
            rolledClass = clerSubs[Math.floor(Math.random() * clerSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Druid') {
            rolledClass = druidSubs[Math.floor(Math.random() * druidSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Fighter') {
            rolledClass = fighSubs[Math.floor(Math.random() * fighSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Monk') {
            rolledClass = monkSubs[Math.floor(Math.random() * monkSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Paladin') {
            rolledClass = palaSubs[Math.floor(Math.random() * palaSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Ranger') {
            rolledClass = rangSubs[Math.floor(Math.random() * rangSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Rogue') {
            rolledClass = rogSubs[Math.floor(Math.random() * rogSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Sorcerer') {
            rolledClass = sorcSubs[Math.floor(Math.random() * sorcSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Warlock') {
            rolledClass = warlSubs[Math.floor(Math.random() * warlSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
        else if (baseRoll === 'Wizard') {
            rolledClass = wizSubs[Math.floor(Math.random() * wizSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass
            })
        }
    }
    rollHP(level) {
        let hitpoints = 0;
        for (let i = 0; i < level - 1; i++) {
            hitpoints = hitpoints + Math.floor(Math.random() * 12) + 1;
            console.log("Roll " + i + ": " + hitpoints)
        }
        return hitpoints;
    }
    render() {
        return (
            <div className="container roller">
                <h1>Character Sheet</h1>
                <span  className="reroll">Roll for Stats!
                    <img id="d20Roller" onClick={() => this.buttonRoll()} 
                    src="/public/images/d20-roller.png" alt="d20 Roller"></img></span>
                <div className="stats">

                    <span>Level Selector
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
                        <ul id="classTitle" className="list-group">
                            <li className="list-group-item">
                            {this.state.align} Level: {this.state.level} {this.state.race} {this.state.class}
                            </li>
                        </ul>
                </div>

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
                    strsave={this.state.strsave}
                    dexsave={this.state.dexsave}
                    consave={this.state.consave}
                    intsave={this.state.intsave}
                    wissave={this.state.wissave}
                    chasave={this.state.chasave}
                    baseAC={this.state.baseAC}
                    initiative={this.state.initiative}
                    prf={this.state.prf}
                    align={this.state.align}
                    rolledClass={this.state.class}
                    hp={this.state.hp}
                    speed={this.state.speed}
                    languages={this.state.language}
                />
            </div>
        )
    }
}

export default withRouter(StatRoller);