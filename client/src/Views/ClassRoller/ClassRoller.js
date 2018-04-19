import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from '../Home'

class ClassRoller extends Component {
    state = {
        class: ""
    }
    rollThatClass = () => {
        const classArr = ['Berserker Barbarian', 'Totem Warrior Barbarian', 'College of Lore Bard', 'College of Valor Bard', 'Knowledge Cleric', 'Life Cleric', 'Light Cleric', 'Nature Cleric', 'Tempest Cleric', 'Trickery Cleric', 'War Cleric', 'Moon Druid', 'Arctic Druid', 'Coast Druid', 'Desert Druid', 'Forest Druid', 'Grassland Druid', 'Mountain Druid', 'Swamp Druid', 'Underdark Druid', 'Champion Fighter', 'Battle Master Fighter', 'Eldritch Knight Fighter', 'Open Palm Monk', 'Shadow Monk', '4 Elements Monk', 'Devotion Oath Paladin', 'Ancient Oath Paladin', 'Vengeance Oath Paladin', 'Hunter Ranger', 'Beast Master Ranger', 'Thief Rogue', 'Assassin Rogue', 'Arcane Trickster Rogue', 'Wild Sorcerer', 'Black Dragon Sorcerer', 'Blue Dragon Sorcerer', 'Brass Dragon Sorcerer', 'Bronze Dragon Sorcerer', 'Copper Dragon Sorcerer', 'Gold Dragon Sorcerer', 'Green Dragon Sorcerer', 'Red Dragon Sorcerer', 'Silver Dragon Sorcerer', 'White Dragon Sorcerer', 'Fey Blade-Pact Warlock', 'Fey Chain-Pact Warlock', 'Fey Tome-Pact', 'Old One Blade-Pact Warlock', 'Old One Chain-Pact Warlock', 'Old Tome-Pact Warlock', 'Infernal Blade-Pact Warlock', 'Infernal Chain-Pact Warlock', 'Infernal Tome-Pact Warlock', 'Abjuration Wizard', 'Conjuration Wizard', 'Divination Wizard', 'Enchantment Wizard', 'Evocation Wizard', 'Illusion Wizard', 'Necromancy Wizard', 'Transmutation Wizard'];
        let rolledClass = classArr[Math.floor(Math.random() * classArr.length)];
        this.setState({
            class: rolledClass
        })
    }
    render() {
        return (
            <div class="blah">
                <Home
                    rolledClass={this.state.class}
                />
            </div>
        )
    }
}