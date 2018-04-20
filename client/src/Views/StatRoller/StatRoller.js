import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from '../Home';
import './StatRoller.scss';

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
        hp: "",
        acrobatics: "",
        arcana: "",
        athletics: "",
        deception: "",
        history: "",
        insight: "",
        intimidation: "",
        investigation: "",
        medicine: "",
        nature: "",
        perception: "",
        performance: "",
        persuasion: "",
        religion: "",
        sleight: "",
        stealth: "",
        survival: "",
        animal: "",

        resistance: "",
        immunities: "",
        advantage: "",
        disadvantage: "",
        size: "",
        speed: "",
        racial: "",
        weapon: "",
        armor: "",
        tools: "",
        vehicles: ""
    };
    
    rollStr = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            str: result,
            strmod: ultMod,
            strsave: ultMod,
            athletics: ultMod
        });
        return ultMod
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
            initiative: ultMod,
            acrobatics: ultMod,
            sleight: ultMod,
            stealth: ultMod
        });
        return ultMod
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
        return ultMod
    };
    rollInt = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            int: result,
            intmod: ultMod,
            intsave: ultMod,
            arcana: ultMod,
            history: ultMod,
            investigation: ultMod,
            nature: ultMod,
            religion: ultMod
        });
        return ultMod
    };
    rollWis = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            wis: result,
            wismod: ultMod,
            wissave: ultMod,
            animal: ultMod,
            insight: ultMod,
            medicine: ultMod,
            perception: ultMod,
            survival: ultMod
        });
        return ultMod
    };
    rollCha = event => {
        let result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            cha: result,
            chamod: ultMod,
            chasave: ultMod,
            deception: ultMod,
            intimidation: ultMod,
            performance: ultMod,
            persuasion: ultMod
        });
        return ultMod
    };
    componentDidMount = () => {
        // consolidate
        this.rollAlign();
        this.rollThatClass();
        this.rollThatRace();
    };
    buttonRoll = () => {
        this.rollAlign();
        this.rollThatClass();
        this.rollThatRace();
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
        const warlSubs = ['Fey Warlock (Blade Pact)', 'Fey Warlock (Chain Pact)', 'Fey Warlock (Tome Pact)', 'Old One Warlock (Blade Pact)', 'Old One Warlock (Chain Pact)', 'Old One Warlock (Tome Pact)', 'Infernal Warlock (Blade Pact)', 'Infernal Warlock (Chain Pact)', 'Inernal Warlock (Tome Pact)']
        const wizSubs = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']

        let baseRoll = baseArr[Math.floor(Math.random() * baseArr.length)];
        let rolledClass;
        let preStr = this.rollStr();
        let preDex = this.rollDex();
        let preCon = this.rollCon();
        let preInt = this.rollInt();
        let preWis = this.rollWis();
        let preCha = this.rollCha();
        if (baseRoll === 'Barbarian') {
            let finalStr = preStr + this.state.prf
            let finalCon = preCon + this.state.prf            
            rolledClass = barbSubs[Math.floor(Math.random() * barbSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                strsave: finalStr,
                consave: finalCon
            })
        }
        else if (baseRoll === 'Bard') {
            let finalDex = preDex + this.state.prf
            let finalCha = preCha + this.state.prf            
            rolledClass = bardSubs[Math.floor(Math.random() * bardSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                dexsave: finalDex,
                chasave: finalCha
            })
        }
        else if (baseRoll === 'Cleric') {
            let finalWis = preWis + this.state.prf;
            let finalCha = preCha + this.state.prf            
            rolledClass = clerSubs[Math.floor(Math.random() * clerSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha
            })
        }
        else if (baseRoll === 'Druid') {
            let finalWis = preWis + this.state.prf
            let finalInt = preInt + this.state.prf            
            rolledClass = druidSubs[Math.floor(Math.random() * druidSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                wissave: finalWis,
                intsave: finalInt

            })
        }
        else if (baseRoll === 'Fighter') {
            let finalStr = preStr + this.state.prf
            let finalCon = preCon + this.state.prf            
            rolledClass = fighSubs[Math.floor(Math.random() * fighSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                strsave: finalStr,
                consave: finalCon

            })
        }
        else if (baseRoll === 'Monk') {
            let finalDex = preDex + this.state.prf
            let finalStr = preStr + this.state.prf            
            rolledClass = monkSubs[Math.floor(Math.random() * monkSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                strsave: finalDex,
                dexsave: finalStr

            })
        }
        else if (baseRoll === 'Paladin') {
            let finalWis = preWis + this.state.prf
            let finalCha = preCha + this.state.prf            
            rolledClass = palaSubs[Math.floor(Math.random() * palaSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha

            })
        }
        else if (baseRoll === 'Ranger') {
            let finalDex = preDex + this.state.prf
            let finalStr = preStr + this.state.prf            
            rolledClass = rangSubs[Math.floor(Math.random() * rangSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                strsave: finalDex,
                dexsave: finalStr

            })
        }
        else if (baseRoll === 'Rogue') {
            let finalDex = preDex + this.state.prf
            let finalInt = preInt + this.state.prf            
            rolledClass = rogSubs[Math.floor(Math.random() * rogSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                dexsave: finalDex,
                intsave: finalInt

            })
        }
        else if (baseRoll === 'Sorcerer') {
            let finalCon = preCon + this.state.prf
            let finalCha = preCha + this.state.prf            
            rolledClass = sorcSubs[Math.floor(Math.random() * sorcSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                chasave: finalCha,
                consave: finalCon

            })
        }
        else if (baseRoll === 'Warlock') {
            let finalWis = preWis + this.state.prf
            let finalCha = preCha + this.state.prf            
            rolledClass = warlSubs[Math.floor(Math.random() * warlSubs.length)];
            return this.setState({
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha
            })
        }
        else if (baseRoll === 'Wizard') {
            let finalWis = preWis + this.state.prf
            let finalInt = preInt + this.state.prf            
            rolledClass = wizSubs[Math.floor(Math.random() * wizSubs.length)] + " " + baseRoll;
            return this.setState({
                class: rolledClass,
                intsave: finalInt,
                wissave: finalWis

            })
        }
    }

    rollThatRace = () => {
        const baseRace = ['Dwarf', 'Elf', 'Half-Elf', 'Gnome', 'Halfling', 'Tiefling', 'Half-Orc', 'Dragonborn', 'Human'];
        const baseDwarf = ['Hill Dwarf', 'Mountain Dwarf'];
        const baseElf = ['High Elf', 'Wood Elf', 'Drow Elf']
        const baseGnome = ['Forest Gnome', 'Rock Gnome']
        const baseHalfling = ['Lightfoot Halfling', 'Stout Halfling']
        const baseDragonborn = ['Black Dragonborn', 'Blue Dragonborn', 'Brass Dragonborn', 'Bronze Dragonbron', 'Copper Dragonborn', 'Gold Dragonborn', 'Green Dragonborn', 'Red Dragonborn', 'Silver Dragonborn', 'White Dragonborn']

        let randRace = baseRace[Math.floor(Math.random() * baseRace.length)];
        let rolledRace;
        if (randRace === 'Dwarf') {
            rolledRace = baseDwarf[Math.floor(Math.random() * baseDwarf.length)];
            return this.setState({
                race: rolledRace
            })
        }
        else if (randRace === 'Elf') {
            rolledRace = baseElf[Math.floor(Math.random() * baseElf.length)];
            return this.setState({
                race: rolledRace
            })
        }
        else if (randRace === 'Gnome') {
            rolledRace = baseGnome[Math.floor(Math.random() * baseGnome.length)];
            return this.setState({
                race: rolledRace
            })
        }
        else if (randRace === 'Halfling') {
            rolledRace = baseHalfling[Math.floor(Math.random() * baseHalfling.length)];
            return this.setState({
                race: rolledRace
            })
        }
        else if (randRace === 'Dragonborn') {
            rolledRace = baseDragonborn[Math.floor(Math.random() * baseDragonborn.length)];
            return this.setState({
                race: rolledRace
            })
        }
        else if (randRace === 'Human') {
            return this.setState({
                race: randRace
            })
        }
        else if (randRace === 'Half-Elf') {
            return this.setState({
                race: randRace
            })
        }
        else if (randRace === 'Half-Orc') {
            return this.setState({
                race: randRace
            })
        }
        else if (randRace === 'Tiefling') {
            return this.setState({
                race: randRace
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
                <span className="reroll">Reroll!
                    <img id="d20Roller" onClick={() => this.buttonRoll()}
                        src="/public/images/d20-roller.png" alt="d20 Roller"></img></span>
                <div className="stats">
                    <ul id="classTitle" className="list-group">
                        <li className="list-group-item">
                            Level: {this.state.level} {this.state.align}  {this.state.race} {this.state.class}
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
                    speed={this.state.speed}
                    languages={this.state.language}
                    hp={this.state.hp}
                    level={this.state.level}
                    athletics={this.state.athletics}
                    acrobatics={this.state.acrobatics}
                    sleight={this.state.sleight}
                    stealth={this.state.stealth}
                    arcana={this.state.arcana}
                    history={this.state.history}
                    investigation={this.state.investigation}
                    nature={this.state.nature}
                    religion={this.state.religion}
                    deception={this.state.deception}
                    intimidation={this.state.intimidation}
                    performance={this.state.performance}
                    persuasion={this.state.persuasion}
                    animal={this.state.animal}
                    insight={this.state.insight}
                    medicine={this.state.medicine}
                    perception={this.state.perception}
                    survival={this.state.survival}
                />
            </div>
        )
    }
}

export default withRouter(StatRoller);