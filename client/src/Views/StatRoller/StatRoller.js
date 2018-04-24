// @flow
import { random, sample } from 'lodash'
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
        weapons: "",
        armor: "",
        tools: "",
        vehicles: "",

        extCantrip: "",
        extSpell1: "",
        extSpell2: "",
        extmod: "",

        profSkills: "",

        breath: "",
        breathDC: "",
        breathST: "",

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
        this.rollAlign()
        const classID = this.rollThatRace();
        this.rollThatBackground();

        racesAPI.getClassInfo(classID.baseRoll).then(stuff => {
            console.log(classID.baseRoll)
            console.log(stuff)
            this.setState({
                feats: stuff.features, traits: stuff.additionalTraits, cantrips: stuff.cantrips, spells: stuff.spellSlots
            })
        })
    };
    buttonRoll = () => {
        this.grandReset();
        this.rollAlign();
        const classID = this.rollThatRace();
        this.rollThatBackground();
        racesAPI.getClassInfo(classID.baseRoll).then(stuff => {
            console.log(stuff)
            console.log(classID.baseRoll)
            this.setState({
                feats: stuff.features, traits: stuff.additionalTraits, cantrips: stuff.cantrips, spells: stuff.spellSlots
            })
        })

    };
    grandReset = () => {
        this.setState({
            resistance: "",
            advantage: "",
            languages: "",
            weapons: "",
            armor: "",
            tools: "",
            vehicles: "",
            racial: "",
            disadvantage: "",
            immuneities: "",
            extmod: "",
            extCantrip: "",
            extSpell: "", 
            extSpell2: "",
            immunities: "",
            profSkills: "",
            breath: "",
            breathDC: "",
            breathST: ""
        })
    }
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
        let align = sample(Arr1) + " " + sample(Arr2);
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

        let baseRoll = sample(baseArr)
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
            rolledClass = sample(barbSubs) + " " + baseRoll;
            let classHP = 12 + preCon.ultMod
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalStr,
                consave: finalCon,
            })
            return { classHP, baseRoll, preStr, preDex, preCon, preInt, preWis, preCha, finalStr, finalCon }
        }
        else if (baseRoll === 'Bard') {
            let finalDex = preDex.ultMod + this.state.prf
            let finalCha = preCha.ultMod + this.state.prf
            rolledClass = sample(bardSubs) + " " + baseRoll;
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
            rolledClass = sample(clerSubs) + " " + baseRoll;
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
            rolledClass = sample(druidSubs) + " " + baseRoll;
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
            rolledClass = sample(fighSubs) + " " + baseRoll;
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
            rolledClass = sample(monkSubs) + " " + baseRoll;
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
            rolledClass = sample(palaSubs) + " " + baseRoll;
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
            rolledClass = sample(rangSubs) + " " + baseRoll;
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
            rolledClass = sample(rogSubs) + " " + baseRoll;
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
            rolledClass = sample(sorcSubs) + " " + baseRoll;
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
                let rollSorcDrag = sample(sorcDrags) + " " + baseRoll;
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
            rolledClass = sample(warlSubs);
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
            rolledClass = sample(wizSubs) + " " + baseRoll;
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
        const baseRace = ['Dwarf', 'Elf', 'HalfElf', 'Gnome', 'Halfling', 'Tiefling', 'HalfOrc', 'Dragonborn', 'Human'];
        const baseDwarf = ['Hill Dwarf', 'Mountain Dwarf'];
        const baseElf = ['High Elf', 'Wood Elf', 'Drow Elf']
        const baseGnome = ['Forest Gnome', 'Rock Gnome']
        const baseHalfling = ['Lightfoot Halfling', 'Stout Halfling']
        const baseDragonborn = ['Black Dragonborn', 'Blue Dragonborn', 'Brass Dragonborn', 'Bronze Dragonborn', 'Copper Dragonborn', 'Gold Dragonborn', 'Green Dragonborn', 'Red Dragonborn', 'Silver Dragonborn', 'White Dragonborn']

        let choiceL;
        let choiceH;
        let rand1;
        let rand2;
        let pickL;
        let pickS;

        let randRace = sample(baseRace);
        let rolledRace;
        let rolledHP = this.rollThatClass();
        if (randRace === 'Dwarf') {
            rolledRace = sample(baseDwarf)
            if (rolledRace === 'Hill Dwarf') {
                const pick = ["Mason's Tools", "Brewer's Tools", "Smith's Tools"];
                let select = sample(pick);
                this.setState({
                    race: rolledRace,
                    hp: rolledHP.classHP + 1,
                    resistance: "Poison",
                    advantage: "Saving Throws vs Poison",
                    languages: "Common, Dwarven",
                    speed: 25,
                    size: "Medium",
                    weapons: "Battleaxe, Handaxe, Light Hammer, Warhammer",
                    racial: "Darkvision (60ft), Stonecunning",
                    tools: select
                })
                this.rollRaceMods(rolledRace, rolledHP.preCon.result, rolledHP.preWis.result);
                
            }
            if (rolledRace === 'Mountain Dwarf') {
                const pick = ["Mason's Tools", "Brewer's Tools", "Smith's Tools"];
                let select = sample(pick);
                this.setState({
                    race: rolledRace,
                    resistance: "Poison",
                    advantage: "Saving Throws vs Poison",
                    languages: "Common, Dwarven",
                    speed: 25,
                    size: "Medium",
                    weapons: "Battleaxe, Handaxe, Light Hammer, Warhammer",
                    racial: "Darkvision (60ft), Stonecunning",
                    tools: select,
                    armor: "Light Armor, Medium Armor"
                })
                this.rollRaceMods(rolledRace, rolledHP.preStr.result, rolledHP.preCon.result);
                
            }
        }

        else if (randRace === 'Elf') {
            rolledRace = sample(baseElf);
            if (rolledRace === 'High Elf') {
                const pickL = ["Dwarvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
                let choiceL = sample(pickL);
                const pickE = ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "True Strike"];
                let choiceE = sample(pickE)
                this.setState({
                    race: rolledRace,
                    advantage: "Saving Throws vs Charm",
                    immunities: "Sleep",
                    languages: "Common, Elvish, " + choiceL,
                    speed: 30,
                    size: "Medium",
                    racial: "Darkvision (60ft), Trance",
                    profSkills: "Perception",
                    weapons: "Longsword, Shortsword, Longbow, Shortbow",
                    extmod: "INT",
                    extCantrip: choiceE,
                })
            }
            if (rolledRace === 'Wood Elf') {
                this.setState({
                    race: rolledRace,
                    advantage: "Saving Throws vs Charm",
                    immunities: "Sleep",
                    languages: "Common, Elvish",
                    speed: 35,
                    size: "Medium",
                    racial: "Darkvision (60ft), Trance, Mark of the Wild",
                    profSkills: "Perception",
                    weapons: "Longsword, Shortsword, Longbow, Shortbow",
                })
                this.rollRaceMods(rolledRace, rolledHP.preDex.result, rolledHP.preWis.result);
                
            }
            else if (rolledRace === "High Elf") {
                this.setState({
                    race: rolledRace,
                    speed: 30
                })
                this.rollRaceMods(rolledRace, rolledHP.preDex.result, rolledHP.preInt.result);
                
            }
            if (rolledRace === 'Drow Elf') {
                let spell1;
                let spell2;
                if (this.state.level > 2) {
                    spell1 = "Faerie Fire: 1/Long Rest";
                }
                if (this.state.level > 4) {
                    spell1 = "Faerie Fire: 1/Long Rest";
                    spell2 = "Darkness: 1/Long Rest";
                }
                this.setState({
                    race: rolledRace,
                    advantage: "Saving Throws vs Charm",
                    immunities: "Sleep",
                    languages: "Common, Elvish",
                    speed: 30,
                    size: "Medium",
                    racial: "Darkvision (120ft), Trance",
                    profSkills: "Perception",
                    weapons: "Rapiers, Shortswords, Hand Crossbows",
                    disadvantage: "While within Sunlight, you have Disadvantage on Attacks Rolls and Perception Checks which rely on Sight",
                    extmod: "CHA",
                    extCantrip: "Dancing Lights",
                    extSpell1: spell1,
                    extSpell2: spell2,
                })
                this.rollRaceMods(rolledRace, rolledHP.preDex.result, rolledHP.preCha.result);
                
            }
        }
        else if (randRace === 'Gnome') {
            rolledRace = sample(baseGnome);
            if (rolledRace === 'Forest Gnome') {
                this.setState({
                    race: rolledRace,
                    advantage: "Intelligence, Wisdom, and Charisma Saving Throws vs Magic",
                    languages: "Common, Gnomish",
                    speed: 25,
                    size: "Small",
                    racial: "Darkvision (60ft), Speak with Small Beasts",
                    extCantrip: "Minor Illusion",
                    extmod: "INT"
                })
            }
            if (rolledRace === 'Rock Gnome') {
                this.setState({
                    race: rolledRace,
                    advantage: "Intelligence, Wisdom, and Charisma Saving Throws vs Magic",
                    languages: "Common, Gnomish",
                    speed: 25,
                    size: "Small",
                    tools: "Tinker's Tools",
                    racial: "Darkvision (60ft), Artificer’s Lore, Tinker",
                })
            }
        }
        else if (randRace === 'Halfling') {
            rolledRace = sample(baseHalfling);
            if (rolledRace === 'Lightfoot Halfling') {
                this.setState({
                    race: rolledRace,
                    advantage: "Saving Throws vs Fear",
                    languages: "Common, Halfling",
                    speed: 25,
                    size: "Small",
                    racial: "Lucky, Halfling Nimbleness, Naturally Stealthy"
                })
            }
            if (rolledRace === 'Stout Halfling') {
                this.setState({
                    race: rolledRace,
                    advantage: "Saving Throws vs Fear, Saving Throws vs Poison",
                    resistance: "Poison",
                    languages: "Common, Halfling",
                    speed: 25,
                    size: "Small",
                    racial: "Lucky, Halfling Nimbleness"
                })
            }
        }
        else if (randRace === 'Dragonborn') {
            rolledRace = sample(baseDragonborn);
            if (rolledRace === 'Black Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Acid",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "5x30ft Line of Acid",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "DEX Save for 1/2"
                })
            }
            if (rolledRace === 'Blue Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Lightning",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "5x30ft Line of Lightning",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "DEX Save for 1/2"
                })
            }
            if (rolledRace === 'Brass Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Fire",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "5x30ft Line of Fire",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "DEX Save for 1/2"
                })
            }
            if (rolledRace === 'Bronze Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Lightning",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "5x30ft Line of Lightning",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "DEX Save for 1/2"
                })
            }
            if (rolledRace === 'Copper Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Acid",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "5x30ft Line of Acid",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "DEX Save for 1/2"
                })
            }
            if (rolledRace === 'Gold Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Fire",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "15ft Cone of Fire",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "DEX Save for 1/2"
                })
            }
            if (rolledRace === 'Green Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Poison",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "15ft Cone of Poison",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "CON Save for 1/2"
                })
            }
            if (rolledRace === 'Red Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Fire",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "15ft Cone of Fire",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "DEX Save for 1/2"
                })
            }
            if (rolledRace === 'Silver Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Cold",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "15ft Cone of Cold",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "CON Save for 1/2"
                })
            }
            if (rolledRace === 'White Dragonborn') {
                this.setState({
                    race: rolledRace,
                    resistance: "Cold",
                    languages: "Common, Draconic",
                    speed: 30,
                    size: "Medium",
                    breath: "15ft Cone of Cold",
                    breathDC : 8 + rolledHP.preCon + this.state.prf,
                    breathST: "CON Save for 1/2"
                })
            }
        }
        else if (randRace === 'Human') {
            const pickH = ["Dwarvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc", "Elvish "];
            choiceH = sample(pickH);
            this.setState({
                race: randRace,
                size: "Medium",
                speed: 30,
                languages: "Common, " + choiceH,
            })
            this.rollRaceMods(randRace, rolledHP.preStr.result, rolledHP.preDex.result, rolledHP.preCon.result, rolledHP.preInt.result, rolledHP.preWis.result, rolledHP.preCha.result);
            
        }
        else if (randRace === 'HalfElf') {
            pickL = ["Dwarvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            choiceL = sample(pickL);
            pickS = ["Acrobatics", "Animal", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"];
            rand1 = sample(pickS);
            rand2 = sample(pickS);
            if (rand1 === rand2) {
                rand2 = sample(pickS);
            }
            this.setState({
                race: "Half-Elf",
                advantage: "Saving Throws vs Charm",
                immunities: "Sleep",
                racial: "Darkvision (60ft)",
                speed: 30,
                size: "Medium",
                languages: "Common, Elvish, " + choiceL,
                profSkills: rand1 + ", " + rand2
            })
            this.rollRaceMods(randRace, rolledHP.preStr.result, rolledHP.preDex.result, rolledHP.preCon.result, rolledHP.preInt.result, rolledHP.preWis.result, rolledHP.preCha.result);
            
        }
        else if (randRace === 'HalfOrc') {
            this.setState({
                race: "Half-Orc",
                languages: "Common, Orc",
                speed: 30,
                size: "Medium",
                racial: "Darkvision (60ft), Savage Attacks, Relentless Endurance",
                profSkills: "Intimidation "
            })
            this.rollRaceMods(randRace, rolledHP.preStr.result, rolledHP.preCon.result);
            
        }
        else if (randRace === 'Tiefling') {
            let spell1;
            let spell2;
            if (this.state.level > 2) {
                spell1 = "Hellish Rebuke (as if from a 2nd Level Slot) 1 / Long Rest";
            }
            if (this.state.level > 4) {
                spell1 = "Hellish Rebuke (2nd Level Spell): 1/Long Rest";
                spell2 = "Darkness: 1/Long Rest";
            }
            this.setState({
                race: randRace,
                resistance: "Fire",
                languages: "Common, Infernal",
                speed: 30,
                size: "Medium",
                racial: "Darkvision (60ft)",
                extCantrip: "Thaumaturgy",
                extSpell1: spell1,
                extSpell2: spell2,
                extmod: "CHA"
            })
            this.rollRaceMods(randRace, rolledHP.preCha.result, rolledHP.preInt.result);
            
        }
        return rolledHP;
    }
    rollThatBackground() {
        const mainArr = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"];
        let randoBG = sample(mainArr);
        this.setState({
            background: randoBG
        })
        return randoBG;
    }
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
            const halfelf = ["str", "dex", "con", "int", "wis"];
            let rand1 = sample(halfelf);
            let rand2 = sample(halfelf);
            if (rand1 === rand2) { 
                rand2 = sample(halfelf);
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
                    resistance={this.state.resistance}
                    advantage={this.state.advantage}
                    size={this.state.size}
                    weapons={this.state.weapons}
                    armor={this.state.armor}
                    tools={this.state.tools}
                    vehicles={this.state.vehicles}
                    racial={this.state.racial}
                    extCantrip={this.state.extCantrip}
                    extSpell1={this.state.extSpell1}
                    extSpell2={this.state.extSpell2}
                    extmod={this.state.extmod}
                    profSkills={this.state.profSkills}
                    immunities={this.state.immunities}
                    disadvantage={this.state.disadvantage}
                    breath={this.state.breath}
                    breathDC={this.state.breathDC}
                    breathST={this.state.breathST}
                    feats={this.state.feats}
                    traits={this.state.traits}
                    cantrips={this.state.cantrips}
                    spells={this.state.spells}
                    background={this.state.background}
                />
            </div>
        )
    }
}

export default withRouter(StatRoller);