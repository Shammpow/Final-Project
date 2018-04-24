// @flow
import { random } from 'lodash'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from '../Home';
import './StatRoller.scss';
import racesAPI from '../../Data/races-api.js'

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
        feats: "",
        traits: "",
        spells: "",
        cantrips: "",
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
        racial: "",
        weapon: "",
        armor: "",
        tools: "",
        vehicles: "",
        background: ""
    };

    rollStr = event => {
        let result = random(1, 6) + random(1, 6) + random(1, 6);
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            str: result,
            strmod: ultMod,
            strsave: ultMod,
            athletics: ultMod
        });
        return { result, ultMod }
    };
    rollDex = event => {
        let result = random(1, 6) + random(1, 6) + random(1, 6);
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
        return { result, ultMod }
    };
    rollCon = () => {
        let result = random(1, 6) + random(1, 6) + random(1, 6);
        let postMod = result - 10;
        let blahMod = postMod / 2;
        let ultMod = Math.floor(blahMod);
        this.setState({
            con: result,
            conmod: ultMod,
            consave: ultMod
        });
        return { result, ultMod }
    };
    rollInt = event => {
        let result = random(1, 6) + random(1, 6) + random(1, 6);
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
        return { result, ultMod }
    };
    rollWis = event => {
        let result = random(1, 6) + random(1, 6) + random(1, 6);
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
        return { result, ultMod }
    };
    rollCha = event => {
        let result = random(1, 6) + random(1, 6) + random(1, 6);
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
        return { result, ultMod }
    };
    componentDidMount = () => {
        // consolidate
        this.rollAlign();
        // racesAPI.getAll().then(stuff => {
        //     let choice = stuff[Math.floor(Math.random() * stuff.length)]
        //     this.setState({race: choice.race, language: choice.language, speed: choice.speed})
        // })
        const classID = this.rollThatRace();
        this.rollThatBackground();

        racesAPI.getClassInfo(classID.baseRoll).then(stuff => {
            this.setState({
                feats: stuff.features, traits: stuff.additionalTraits, cantrips: stuff.cantrips, spells: stuff.spellSlots
            })
        })
    };
    buttonRoll = () => {
        this.rollAlign();
        // racesAPI.getAll().then(stuff => {
        //     let choice = stuff[Math.floor(Math.random() * stuff.length)]
        //     this.setState({race: choice.race, language: choice.language, speed: choice.speed})
        // })
        const classID = this.rollThatRace();
        this.rollThatBackground();
        racesAPI.getClassInfo(classID.baseRoll).then(stuff => {
            this.setState({
                feats: stuff.features, traits: stuff.additionalTraits, cantrips: stuff.cantrips, spells: stuff.spellSlots
            })
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
        const sorcSubs = ['Wild', 'Dragon']
        const sorcDrags = ['Black Dragon', 'Blue Dragon', 'Brass Dragon', 'Bronze Dragon', 'Copper Dragon', 'Gold Dragon', 'Green Dragon', 'Red Dragon', 'Silver Dragon', 'White Dragon']
        const warlSubs = ['Fey Warlock (Blade Pact)', 'Fey Warlock (Chain Pact)', 'Fey Warlock (Tome Pact)', 'Old One Warlock (Blade Pact)', 'Old One Warlock (Chain Pact)', 'Old One Warlock (Tome Pact)', 'Infernal Warlock (Blade Pact)', 'Infernal Warlock (Chain Pact)', 'Infernal Warlock (Tome Pact)']
        const wizSubs = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']

        let baseRoll = baseArr[Math.floor(Math.random() * baseArr.length)];
        let rolledClass;
        let preStr = this.rollStr();
        //let preStrRes = preStr.result;
        let preDex = this.rollDex();
        //let preDexRes = preDex.result;
        let preCon = this.rollCon();
        // let preConRes = preCon.result;
        let preInt = this.rollInt();
        // let preIntRes = preInt.result;
        let preWis = this.rollWis();
        // let preWisRes = preWis.result;
        let preCha = this.rollCha();
        // let preChaRes = preCha.result;
        if (baseRoll === 'Barbarian') {
            let finalStr = preStr.ultMod + this.state.prf
            let finalCon = preCon.ultMod + this.state.prf
            rolledClass = barbSubs[Math.floor(Math.random() * barbSubs.length)] + " " + baseRoll;
            let classHP = 12 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalStr,
                consave: finalCon
            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalStr, finalCon }
        }
        else if (baseRoll === 'Bard') {
            let finalDex = preDex.ultMod + this.state.prf
            let finalCha = preCha.ultMod + this.state.prf
            rolledClass = bardSubs[Math.floor(Math.random() * bardSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                dexsave: finalDex,
                chasave: finalCha
            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalDex, finalCha }
        }
        else if (baseRoll === 'Cleric') {
            let finalWis = preWis.ultMod + this.state.prf;
            let finalCha = preCha.ultMod + this.state.prf
            rolledClass = clerSubs[Math.floor(Math.random() * clerSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha
            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalWis, finalCha }
        }
        else if (baseRoll === 'Druid') {
            let finalWis = preWis.ultMod + this.state.prf
            let finalInt = preInt.ultMod + this.state.prf
            rolledClass = druidSubs[Math.floor(Math.random() * druidSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                wissave: finalWis,
                intsave: finalInt

            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalWis, finalInt }
        }
        else if (baseRoll === 'Fighter') {
            let finalStr = preStr.ultMod + this.state.prf
            let finalCon = preCon.ultMod + this.state.prf
            rolledClass = fighSubs[Math.floor(Math.random() * fighSubs.length)] + " " + baseRoll;
            let classHP = 10 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalStr,
                consave: finalCon

            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalStr, finalCon }
        }
        else if (baseRoll === 'Monk') {
            let finalDex = preDex.ultMod + this.state.prf
            let finalStr = preStr.ultMod + this.state.prf
            rolledClass = monkSubs[Math.floor(Math.random() * monkSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalDex,
                dexsave: finalStr

            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalDex, finalStr }
        }
        else if (baseRoll === 'Paladin') {
            let finalWis = preWis.ultMod + this.state.prf
            let finalCha = preCha.ultMod + this.state.prf
            rolledClass = palaSubs[Math.floor(Math.random() * palaSubs.length)] + " " + baseRoll;
            let classHP = 10 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha

            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalWis, finalCha }
        }
        else if (baseRoll === 'Ranger') {
            let finalDex = preDex.ultMod + this.state.prf
            let finalStr = preStr.ultMod + this.state.prf
            rolledClass = rangSubs[Math.floor(Math.random() * rangSubs.length)] + " " + baseRoll;
            let classHP = 10 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalStr,
                dexsave: finalDex

            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalStr, finalDex }
        }
        else if (baseRoll === 'Rogue') {
            let finalDex = preDex.ultMod + this.state.prf
            let finalInt = preInt.ultMod + this.state.prf
            rolledClass = rogSubs[Math.floor(Math.random() * rogSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                dexsave: finalDex,
                intsave: finalInt

            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalDex, finalInt }
        }
        else if (baseRoll === 'Sorcerer') {
            let finalCon = preCon.ultMod + this.state.prf
            let finalCha = preCha.ultMod + this.state.prf
            rolledClass = sorcSubs[Math.floor(Math.random() * sorcSubs.length)] + " " + baseRoll;
            if (rolledClass === "Wild Sorcerer") {
                let classHP = 6 + preCon.ultMod
                this.setState({
                    class: rolledClass,
                    hp: classHP,
                    chasave: finalCha,
                    consave: finalCon
                })
                return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalCha, finalCon }
            }
            else {
                let rollSorcDrag = sorcDrags[Math.floor(Math.random() * sorcDrags.length)] + " " + baseRoll;
                let classHP = 6 + preCon.ultMod + this.state.level
                this.setState({
                    class: rollSorcDrag,
                    hp: classHP,
                    chasave: finalCha,
                    consave: finalCon
                })
                return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalCha, finalCon }
            }
        }
        else if (baseRoll === 'Warlock') {
            let finalWis = preWis.ultMod + this.state.prf
            let finalCha = preCha.ultMod + this.state.prf
            rolledClass = warlSubs[Math.floor(Math.random() * warlSubs.length)];
            let classHP = 8 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha
            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalWis, finalCha }
        }
        else if (baseRoll === 'Wizard') {
            let finalWis = preWis.ultMod + this.state.prf
            let finalInt = preInt.ultMod + this.state.prf
            rolledClass = wizSubs[Math.floor(Math.random() * wizSubs.length)] + " " + baseRoll;
            let classHP = 6 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                intsave: finalInt,
                wissave: finalWis

            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalInt, finalWis }
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
        let rolledHP = this.rollThatClass();
        // let saveMod;
        // let saveMod2;
        console.log("Rolled class: " + rolledHP.baseRoll);
        // if (rolledHP.baseRoll === "Barbarian"){
        //     saveMod = rolledHP.finalStr;
        //     saveMod2 = rolledHP.finalCon;
        // }
        // else if (rolledHP.baseRoll === "Bard") {
        //     saveMod = rolledHP.finalDex;
        //     saveMod2 = rolledHP.finalCha;
        // }
        // else if (rolledHP.baseRoll === "Cleric"){
        //     saveMod = rolledHP.finalWis;
        //     saveMod2 = rolledHP.finalCha;
        // }
        // else if (rolledHP.baseRoll === "Druid"){
        //     saveMod = rolledHP.finalWis;
        //     saveMod2 = rolledHP.finalInt;
        // }
        // else if (rolledHP.baseRoll === "Fighter"){
        //     saveMod = rolledHP.finalStr;
        //     saveMod2 = rolledHP.finalCon;
        // }
        // else if (rolledHP.baseRoll === "Monk"){
        //     saveMod = rolledHP.finalDex;
        //     saveMod2 = rolledHP.finalStr;
        // }
        // else if (rolledHP.baseRoll === "Paladin"){
        //     saveMod = rolledHP.finalWis;
        //     saveMod2 = rolledHP.finalCha;
        // }
        // else if (rolledHP.baseRoll === "Ranger"){
        //     saveMod = rolledHP.finalDex;
        //     saveMod2 = rolledHP.finalStr;
        // }
        // else if (rolledHP.baseRoll === "Rogue"){
        //     saveMod = rolledHP.finalDex;
        //     saveMod2 = rolledHP.finalInt
        // }
        // else if (rolledHP.baseRoll === "Sorcerer"){
        //     saveMod = rolledHP.finalCon;
        //     saveMod2 = rolledHP.finalCha;
        // }
        // else if (rolledHP.baseRoll === "Warlock"){
        //     saveMod = rolledHP.finalWis;
        //     saveMod2 = rolledHP.finalCha;
        // }
        // else if (rolledHP.baseRoll === "Wizard") {
        //     saveMod = rolledHP.finalWis;
        //     saveMod2 = rolledHP.finalInt;
        // }
        if (randRace === 'Dwarf') {
            rolledRace = baseDwarf[Math.floor(Math.random() * baseDwarf.length)]
            if (rolledRace === 'Hill Dwarf') {
                this.setState({
                    race: rolledRace,
                    hp: rolledHP.classHP + 1,
                    speed: 25
                })
                this.rollRaceMods(rolledRace, rolledHP.preCon.result, rolledHP.preWis.result);
                return rolledHP;
            }
            else {
                this.setState({
                    race: rolledRace,
                    speed: 25
                })
                this.rollRaceMods(rolledRace, rolledHP.preStr.result, rolledHP.preCon.result);
                return rolledHP;
            }

        }

        else if (randRace === 'Elf') {
            rolledRace = baseElf[Math.floor(Math.random() * baseElf.length)];
            if (rolledRace === 'Wood Elf') {
                this.setState({
                    race: rolledRace,
                    speed: 35
                })
                this.rollRaceMods(rolledRace, rolledHP.preDex.result, rolledHP.preWis.result);
                return rolledHP;
            }
            else if (rolledRace === "High Elf") {
                this.setState({
                    race: rolledRace,
                    speed: 30
                })
                this.rollRaceMods(rolledRace, rolledHP.preDex.result, rolledHP.preInt.result);
                return rolledHP;
            }
            else {
                this.setState({
                    race: rolledRace,
                    speed: 30
                })
                this.rollRaceMods(rolledRace, rolledHP.preDex.result, rolledHP.preCha.result);
                return rolledHP;
            }

        }
        else if (randRace === 'Gnome') {
            rolledRace = baseGnome[Math.floor(Math.random() * baseGnome.length)];
            if (rolledRace === "Forest Gnome") {
                this.setState({
                    race: rolledRace,
                    speed: 25

                })
                this.rollRaceMods(rolledRace, rolledHP.preInt.result, rolledHP.preDex.result);
                return rolledHP;
            }
            else { //rock gnome
                this.setState({
                    race: rolledRace,
                    speed: 25

                })
                this.rollRaceMods(rolledRace, rolledHP.preInt.result, rolledHP.preCon.result);
                return rolledHP;
            }
        }
        else if (randRace === 'Halfling') {
            rolledRace = baseHalfling[Math.floor(Math.random() * baseHalfling.length)];
            if (rolledRace === "Lightfoot Halfling") {
                this.setState({
                    race: rolledRace,
                    speed: 25

                })
                this.rollRaceMods(rolledRace, rolledHP.preDex.result, rolledHP.preCha.result);
                return rolledHP;
            }
            else {
                this.setState({
                    race: rolledRace,
                    speed: 25

                })
                this.rollRaceMods(rolledRace, rolledHP.preDex.result, rolledHP.preCon.result);
                return rolledHP;
            }

        }
        else if (randRace === 'Dragonborn') {
            rolledRace = baseDragonborn[Math.floor(Math.random() * baseDragonborn.length)];
            this.setState({
                race: rolledRace,
                speed: 30

            })
            this.rollRaceMods(randRace, rolledHP.preStr.result, rolledHP.preCha.result);
            return rolledHP;
        }
        else if (randRace === 'Human') {
            this.setState({
                race: randRace,
                speed: 30
            })
            this.rollRaceMods(randRace, rolledHP.preStr.result, rolledHP.preDex.result, rolledHP.preCon.result, rolledHP.preInt.result, rolledHP.preWis.result, rolledHP.preCha.result);
            return rolledHP;
        }
        else if (randRace === 'Half-Elf') {
            this.setState({
                race: randRace,
                speed: 25
            })
            this.rollRaceMods(randRace, rolledHP.preStr.result, rolledHP.preDex.result, rolledHP.preCon.result, rolledHP.preInt.result, rolledHP.preWis.result, rolledHP.preCha.result);
            return rolledHP;
        }
        else if (randRace === 'Half-Orc') {
            this.setState({
                race: randRace,
                speed: 30
            })
            this.rollRaceMods(randRace, rolledHP.preStr.result, rolledHP.preCon.result);
            return rolledHP;
        }
        else if (randRace === 'Tiefling') {
            this.setState({
                race: randRace,
                speed: 30
            })
            this.rollRaceMods(randRace, rolledHP.preCha.result, rolledHP.preInt.result);
            return rolledHP;
        }

    }
    rollThatBackground() {
        const mainArr = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"];
        let randoBG = mainArr[Math.floor(Math.random() * mainArr.length)];
        this.setState({
            background: randoBG
        })
        return randoBG;
    }
    // rollHP(rolledClass) {
    //     let hitpoints = 0;

    //     return hitpoints;
    // }
    rollRaceMods(race, val1, val2, val3, val4, val5, val6) {
        console.log("Race: " + race);
        if (race === "Hill Dwarf") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                con: val1 + 2,
                wis: val2 + 1,
                conmod: skewedMod,
                wismod: skewedMod2,
                consave: skewedMod + this.state.prf,
                wissave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Mountain Dwarf") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 8;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                str: val1 + 2,
                con: val2 + 2,
                strmod: skewedMod,
                conmod: skewedMod2,
                strsave: skewedMod + this.state.prf,
                consave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Wood Elf") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                dex: val1 + 2,
                wis: val2 + 1,
                dexmod: skewedMod,
                wismod: skewedMod2,
                dexsave: skewedMod + this.state.prf,
                wissave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "High Elf") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                dex: val1 + 2,
                int: val2 + 1,
                dexmod: skewedMod,
                intmod: skewedMod2,
                dexsave: skewedMod + this.state.prf,
                intsave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Drow Elf") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                dex: val1 + 2,
                cha: val2 + 1,
                dexmod: skewedMod,
                chamod: skewedMod2,
                dexsave: skewedMod + this.state.prf,
                chasave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Forest Gnome") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                int: val1 + 2,
                dex: val2 + 1,
                intmod: skewedMod,
                dexmod: skewedMod2,
                intsave: skewedMod + this.state.prf,
                dexsave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Rock Gnome") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                int: val1 + 2,
                con: val2 + 1,
                intmod: skewedMod,
                conmod: skewedMod2,
                intsave: skewedMod + this.state.prf,
                consave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Lightfoot Halfling") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                dex: val1 + 2,
                cha: val2 + 1,
                dexmod: skewedMod,
                chamod: skewedMod2,
                dexsave: skewedMod + this.state.prf,
                chasave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Stout Halfling") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                dex: val1 + 2,
                con: val2 + 1,
                dexmod: skewedMod,
                conmod: skewedMod2,
                dexsave: skewedMod + this.state.prf,
                consave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Human") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2 + ", Val 3: " + val3 + ", Val 4: " + val4 + ", Val 5: " + val5 + ", Val 6: " + val6);
            let preMod = val1 - 9;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);

            let preMod3 = val3 - 9;
            let thisMod3 = preMod3 / 2;
            let skewedMod3 = Math.floor(thisMod3);

            let preMod4 = val4 - 9;
            let thisMod4 = preMod4 / 2;
            let skewedMod4 = Math.floor(thisMod4);

            let preMod5 = val5 - 9;
            let thisMod5 = preMod5 / 2;
            let skewedMod5 = Math.floor(thisMod5);

            let preMod6 = val6 - 9;
            let thisMod6 = preMod6 / 2;
            let skewedMod6 = Math.floor(thisMod6);
            this.setState({
                str: val1 + 1,
                dex: val2 + 1,
                con: val3 + 1,
                int: val4 + 1,
                wis: val5 + 1,
                cha: val6 + 1,
                strmod: skewedMod,
                dexmod: skewedMod2,
                conmod: skewedMod3,
                intmod: skewedMod4,
                wismod: skewedMod5,
                chamod: skewedMod6,
                strsave: skewedMod + this.state.prf,
                dexsave: skewedMod2 + this.state.prf,
                consave: skewedMod3 + this.state.prf,
                intsave: skewedMod4 + this.state.prf,
                wissave: skewedMod5 + this.state.prf,
                chasave: skewedMod6 + this.state.prf,
            })
        }
        else if (race === "Dragonborn") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                str: val1 + 2,
                cha: val2 + 1,
                strmod: skewedMod,
                chamod: skewedMod2,
                strsave: skewedMod + this.state.prf,
                chasave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Half-Elf") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            const halfelfXD = ["str", "dex", "con", "int", "wis"];
            let rand1 = halfelfXD[Math.floor(Math.random() * halfelfXD.length)];
            let rand2 = halfelfXD[Math.floor(Math.random() * halfelfXD.length)];
            if (rand1 === rand2) {
                rand2 = halfelfXD[Math.floor(Math.random() * halfelfXD.length)];
            }
            if (rand1 === "str") {
                if (rand2 === "dex") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val1 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val2 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        str: val1,
                        strmod: skewedMod2,
                        strsave: skewedMod2 + this.state.prf,
                        dex: val2,
                        dexmod: skewedMod3,
                        dexsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "con") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val1 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val3 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        str: val1,
                        strmod: skewedMod2,
                        strsave: skewedMod2 + this.state.prf,
                        con: val3,
                        conmod: skewedMod3,
                        consave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "int") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val1 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val4 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        str: val1,
                        strmod: skewedMod2,
                        strsave: skewedMod2 + this.state.prf,
                        int: val4,
                        intmod: skewedMod3,
                        intsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand1 === "wis") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val1 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val5 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        str: val1,
                        strmod: skewedMod2,
                        strsave: skewedMod2 + this.state.prf,
                        wis: val5,
                        wismod: skewedMod3,
                        wissave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
            }
            else if (rand1 === "dex") {
                if (rand2 === "str") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val1 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val2 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        str: val1,
                        strmod: skewedMod2,
                        strsave: skewedMod2 + this.state.prf,
                        dex: val2,
                        dexmod: skewedMod3,
                        dexsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "con") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val3 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val2 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        con: val3,
                        conmod: skewedMod2,
                        consave: skewedMod2 + this.state.prf,
                        dex: val2,
                        dexmod: skewedMod3,
                        dexsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "int") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val4 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val2 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        int: val4,
                        intmod: skewedMod2,
                        intsave: skewedMod2 + this.state.prf,
                        dex: val2,
                        dexmod: skewedMod3,
                        dexsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "wis") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val5 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val2 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        wis: val5,
                        wismod: skewedMod2,
                        wissave: skewedMod2 + this.state.prf,
                        dex: val2,
                        dexmod: skewedMod3,
                        dexsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
            }
            else if (rand1 === "con") {
                if (rand2 === "str") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val1 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val3 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        str: val1,
                        strmod: skewedMod2,
                        strsave: skewedMod2 + this.state.prf,
                        con: val3,
                        conmod: skewedMod3,
                        consave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "dex") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val2 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val3 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        dex: val2,
                        dexmod: skewedMod2,
                        dexsave: skewedMod2 + this.state.prf,
                        con: val3,
                        conmod: skewedMod3,
                        consave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                if (rand2 === "int") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val4 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val3 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        int: val4,
                        intmod: skewedMod2,
                        intsave: skewedMod2 + this.state.prf,
                        con: val3,
                        conmod: skewedMod3,
                        consave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                if (rand2 === "wis") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val5 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val3 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        wis: val5,
                        wismod: skewedMod2,
                        wissave: skewedMod2 + this.state.prf,
                        con: val3,
                        conmod: skewedMod3,
                        consave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
            }
            else if (rand1 === "int") {
                if (rand2 === "str") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val1 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val4 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        str: val1,
                        strmod: skewedMod2,
                        strsave: skewedMod2 + this.state.prf,
                        int: val4,
                        intmod: skewedMod3,
                        intsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "dex") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val2 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val4 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        dex: val2,
                        dexmod: skewedMod2,
                        dexsave: skewedMod2 + this.state.prf,
                        int: val4,
                        intmod: skewedMod3,
                        intsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "con") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val3 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val4 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        con: val3,
                        conmod: skewedMod2,
                        consave: skewedMod2 + this.state.prf,
                        int: val4,
                        intmod: skewedMod3,
                        intsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "wis") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val5 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val4 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        wis: val5,
                        wismod: skewedMod2,
                        wissave: skewedMod2 + this.state.prf,
                        int: val4,
                        intmod: skewedMod3,
                        intsave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
            }
            else if (rand1 === "wis") {
                if (rand2 === "str") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val1 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val5 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        str: val1,
                        strmod: skewedMod2,
                        strsave: skewedMod2 + this.state.prf,
                        wis: val5,
                        wismod: skewedMod3,
                        wissave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "dex") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val2 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val5 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        dex: val2,
                        dexmod: skewedMod2,
                        dexsave: skewedMod2 + this.state.prf,
                        wis: val5,
                        wismod: skewedMod3,
                        wissave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "con") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val3 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val5 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        con: val3,
                        conmod: skewedMod2,
                        consave: skewedMod2 + this.state.prf,
                        wis: val5,
                        wismod: skewedMod3,
                        wissave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
                else if (rand2 === "int") {
                    let preMod = val6 - 8;
                    let thisMod = preMod / 2;
                    let skewedMod = Math.floor(thisMod);

                    let preMod2 = val4 - 9;
                    let thisMod2 = preMod2 / 2;
                    let skewedMod2 = Math.floor(thisMod2);

                    let preMod3 = val5 - 9;
                    let thisMod3 = preMod3 / 2;
                    let skewedMod3 = Math.floor(thisMod3);
                    console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
                    this.setState({
                        int: val4,
                        intmod: skewedMod2,
                        intsave: skewedMod2 + this.state.prf,
                        wis: val5,
                        wismod: skewedMod3,
                        wissave: skewedMod3 + this.state.prf,
                        cha: val6 + 1,
                        chamod: skewedMod,
                        chasave: skewedMod + this.state.prf
                    })
                }
            }
        }
        else if (race === "Half-Orc") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                str: val1 + 2,
                con: val2 + 1,
                strmod: skewedMod,
                conmod: skewedMod2,
                strsave: skewedMod + this.state.prf,
                consave: skewedMod2 + this.state.prf
            })
        }
        else if (race === "Tiefling") {
            console.log("Val 1: " + val1 + ", Val 2: " + val2)
            let preMod = val1 - 8;
            let thisMod = preMod / 2;
            let skewedMod = Math.floor(thisMod);

            let preMod2 = val2 - 9;
            let thisMod2 = preMod2 / 2;
            let skewedMod2 = Math.floor(thisMod2);
            console.log("skewedMod1: " + skewedMod + ", skewedMod2: " + skewedMod2)
            this.setState({
                cha: val1 + 2,
                int: val2 + 1,
                chamod: skewedMod,
                intmod: skewedMod2,
                chasave: skewedMod + this.state.prf,
                intsave: skewedMod2 + this.state.prf
            })
        }
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
                    languages={this.state.languages}
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
                    feats={this.state.feats}
                    traits={this.state.traits}
                    spells={this.state.spells}
                    cantrips={this.state.cantrips}
                    background={this.state.background}
                />
            </div>
        )
    }
}

export default withRouter(StatRoller);