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
        breathST: ""

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
    rollCon = () => {
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
        this.grandReset();
        this.rollAlign();
        this.rollThatClass();
        this.rollThatRace();
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
            let classHP = 12 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalStr,
                consave: finalCon
            })
            return classHP
        }
        else if (baseRoll === 'Bard') {
            let finalDex = preDex + this.state.prf
            let finalCha = preCha + this.state.prf
            rolledClass = bardSubs[Math.floor(Math.random() * bardSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                dexsave: finalDex,
                chasave: finalCha
            })
            return classHP
        }
        else if (baseRoll === 'Cleric') {
            let finalWis = preWis + this.state.prf;
            let finalCha = preCha + this.state.prf
            rolledClass = clerSubs[Math.floor(Math.random() * clerSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha
            })
            return classHP
        }
        else if (baseRoll === 'Druid') {
            let finalWis = preWis + this.state.prf
            let finalInt = preInt + this.state.prf
            rolledClass = druidSubs[Math.floor(Math.random() * druidSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                wissave: finalWis,
                intsave: finalInt

            })
            return classHP
        }
        else if (baseRoll === 'Fighter') {
            let finalStr = preStr + this.state.prf
            let finalCon = preCon + this.state.prf
            rolledClass = fighSubs[Math.floor(Math.random() * fighSubs.length)] + " " + baseRoll;
            let classHP = 10 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalStr,
                consave: finalCon
            })
            return classHP
        }
        else if (baseRoll === 'Monk') {
            let finalDex = preDex + this.state.prf
            let finalStr = preStr + this.state.prf
            rolledClass = monkSubs[Math.floor(Math.random() * monkSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalDex,
                dexsave: finalStr

            })
            return classHP
        }
        else if (baseRoll === 'Paladin') {
            let finalWis = preWis + this.state.prf
            let finalCha = preCha + this.state.prf
            rolledClass = palaSubs[Math.floor(Math.random() * palaSubs.length)] + " " + baseRoll;
            let classHP = 10 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha

            })
            return classHP
        }
        else if (baseRoll === 'Ranger') {
            let finalDex = preDex + this.state.prf
            let finalStr = preStr + this.state.prf
            rolledClass = rangSubs[Math.floor(Math.random() * rangSubs.length)] + " " + baseRoll;
            let classHP = 10 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                strsave: finalDex,
                dexsave: finalStr

            })
            return classHP
        }
        else if (baseRoll === 'Rogue') {
            let finalDex = preDex + this.state.prf
            let finalInt = preInt + this.state.prf
            rolledClass = rogSubs[Math.floor(Math.random() * rogSubs.length)] + " " + baseRoll;
            let classHP = 8 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                dexsave: finalDex,
                intsave: finalInt

            })
            return classHP
        }
        else if (baseRoll === 'Sorcerer') {
            let finalCon = preCon + this.state.prf
            let finalCha = preCha + this.state.prf
            rolledClass = sorcSubs[Math.floor(Math.random() * sorcSubs.length)] + " " + baseRoll;
            if (rolledClass === "Wild Sorcerer") {
                let classHP = 6 + preCon
                this.setState({
                    class: rolledClass,
                    hp: classHP,
                    chasave: finalCha,
                    consave: finalCon
                })
                return classHP
            }
            else {
                let rollSorcDrag = sorcDrags[Math.floor(Math.random() * sorcDrags.length)] + " " + baseRoll;
                let classHP = 6 + preCon + this.state.level
                this.setState({
                    class: rollSorcDrag,
                    hp: classHP,
                    chasave: finalCha,
                    consave: finalCon
                })
                return classHP
            }
        }
        else if (baseRoll === 'Warlock') {
            let finalWis = preWis + this.state.prf
            let finalCha = preCha + this.state.prf
            rolledClass = warlSubs[Math.floor(Math.random() * warlSubs.length)];
            let classHP = 8 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                wissave: finalWis,
                chasave: finalCha
            })
            return classHP
        }
        else if (baseRoll === 'Wizard') {
            let finalWis = preWis + this.state.prf
            let finalInt = preInt + this.state.prf
            rolledClass = wizSubs[Math.floor(Math.random() * wizSubs.length)] + " " + baseRoll;
            let classHP = 6 + preCon
            this.setState({
                hp: classHP,
                class: rolledClass,
                intsave: finalInt,
                wissave: finalWis

            })
            return classHP
        }
    }

    rollThatRace = () => {
        const baseRace = ['Dwarf', 'Elf', 'HalfElf', 'Gnome', 'Halfling', 'Tiefling', 'HalfOrc', 'Dragonborn', 'Human'];
        const baseDwarf = ['Hill Dwarf', 'Mountain Dwarf'];
        const baseElf = ['High Elf', 'Wood Elf', 'Drow Elf']
        const baseGnome = ['Forest Gnome', 'Rock Gnome']
        const baseHalfling = ['Lightfoot Halfling', 'Stout Halfling']
        const baseDragonborn = ['Black Dragonborn', 'Blue Dragonborn', 'Brass Dragonborn', 'Bronze Dragonbron', 'Copper Dragonborn', 'Gold Dragonborn', 'Green Dragonborn', 'Red Dragonborn', 'Silver Dragonborn', 'White Dragonborn']

        let choiceL;
        let choiceH;
        let rand1;
        let rand2;
        let pickL;
        let pickS;
        let pickH;

        let randRace = baseRace[Math.floor(Math.random() * baseRace.length)];
        let rolledRace;
        let rolledHP = this.rollThatClass();

        if (randRace === 'Dwarf') {
            rolledRace = baseDwarf[Math.floor(Math.random() * baseDwarf.length)]
            if (rolledRace === 'Hill Dwarf') {
                const pick = ["Mason's Tools", "Brewer's Tools", "Smith's Tools"];
                let select = pick[Math.floor(Math.random() * pick.length)];
                return this.setState({
                    race: rolledRace,
                    hp: rolledHP + 1,
                    resistance: "Poison",
                    advantage: "Saving Throws vs Poison",
                    languages: "Common, Dwarven",
                    speed: 25,
                    size: "Medium",
                    weapons: "Battleaxe, Handaxe, Light Hammer, Warhammer",
                    racial: "Darkvision (60ft), Stonecunning",
                    tools: select
                })
            }
            if (rolledRace === 'Mountain Dwarf') {
                const pick = ["Mason's Tools", "Brewer's Tools", "Smith's Tools"];
                let select = pick[Math.floor(Math.random() * pick.length)];
                return this.setState({
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
            }
        }
        else if (randRace === 'Elf') {
            rolledRace = baseElf[Math.floor(Math.random() * baseElf.length)];
            if (rolledRace === 'High Elf') {
                const pickL = ["Dwarvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
                let choiceL = pickL[Math.floor(Math.random() * pickL.length)];
                const pickE = ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "True Strike"];
                let choiceE = pickE[Math.floor(Math.random() * pickE.length)]
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
            }
            return this.setState({
                race: rolledRace
            })
        }
        else if (randRace === 'Gnome') {
            rolledRace = baseGnome[Math.floor(Math.random() * baseGnome.length)];
            if (rolledRace === 'Forest Gnome') {
                return this.setState({
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
                return this.setState({
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
            rolledRace = baseHalfling[Math.floor(Math.random() * baseHalfling.length)];
            if (rolledRace === 'Lightfoot Halfling') {
                return this.setState({
                    race: rolledRace,
                    advantage: "Saving Throws vs Fear",
                    languages: "Common, Halfling",
                    speed: 25,
                    size: "Small",
                    racial: "Lucky, Halfling Nimbleness, Naturally Stealthy"
                })
            }
            if (rolledRace === 'Stout Halfling') {
                return this.setState({
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
            rolledRace = baseDragonborn[Math.floor(Math.random() * baseDragonborn.length)];
            if (rolledRace === 'Black Dragonborn') {
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
            choiceH = pickH[Math.floor(Math.random() * pickH.length)];
            return this.setState({
                race: randRace,
                size: "Medium",
                speed: 30,
                languages: "Common, " + choiceH,
            })
        }
        else if (randRace === 'HalfElf') {
            pickL = ["Dwarvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            choiceL = pickL[Math.floor(Math.random() * pickL.length)];
            pickS = ["Acrobatics", "Animal", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"];
            rand1 = pickS[Math.floor(Math.random() * pickS.length)];
            rand2 = pickS[Math.floor(Math.random() * pickS.length)];
            if (rand1 === rand2) {
                rand2 = pickS[Math.floor(Math.random() * pickS.length)];
            }
            return this.setState({
                race: "Half-Elf",
                advantage: "Saving Throws vs Charm",
                immunities: "Sleep",
                racial: "Darkvision (60ft)",
                speed: 30,
                size: "Medium",
                languages: "Common, Elvish, " + choiceL,
                profSkills: rand1 + ", " + rand2
            })
        }
        else if (randRace === 'HalfOrc') {
            return this.setState({
                race: "Half-Orc",
                languages: "Common, Orc",
                speed: 30,
                size: "Medium",
                racial: "Darkvision (60ft), Savage Attacks, Relentless Endurance",
                profSkills: "Intimidation "
            })
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
            return this.setState({
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
        }
    }
    rollHP(rolledClass) {
        let hitpoints = 0;

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
                />
            </div>
        )
    }
}

export default withRouter(StatRoller);