import React from 'react';
import './home-view.scss';
const Home = props =>
  <div className='home'>

    <div className="main-container container">
      <div className="stat-container container row">
        <div className="stats col-sm-3">
          <ul className="individualStats list-group">
            <li className="str list-group-item">
              Strength: {props.str}
              <br></br>
              Mods: {props.strmod} Save: {props.strsave}
            </li>
            <li className="dex list-group-item">
              Dexterity: {props.dex}
              <br></br>
              Mods: {props.dexmod} Save: {props.dexsave}
            </li>
            <li className="con list-group-item">
              Constitution: {props.con}
              <br></br>
              Mods: {props.conmod} Save: {props.consave}
            </li>
            <li className="int list-group-item">
              Intelligence: {props.int}
              <br></br>
              Mods: {props.intmod} Save: {props.intsave}
            </li>
            <li className="wis list-group-item">
              Wisdom: {props.wis}
              <br></br>
              Mods: {props.wismod} Save: {props.wissave}
            </li>
            <li className="cha list-group-item">
              Charisma: {props.cha}
              <br></br>
              Mods: {props.chamod} Save: {props.chasave}
            </li>
          </ul>

        </div>
        <div className="col-sm">
          <div className="container">
            <ul className="personStuff list-group">
              <li className="hp list-group-item">
                Hit Points: {props.hp}
              </li>
              <li className="hp list-group-item">
                Hit Dice: {props.level}
              </li>
              <li className="ac list-group-item">
                Armor Class: {props.baseAC}
              </li>
            </ul>

            <br />

            <ul className="personStuff list-group">
              <li className="speed list-group-item">
                Speed: {props.speed}
              </li>
              <li className="initiative list-group-item">
                Initiative: {props.initiative}
              </li>
            </ul>

            <br />

            <ul className="personStuff list-group">
              <li className="resist list-group-item">
                Resistances: <br />
                {props.level}
              </li>
              <li className="immune list-group-item">
                Immunities: <br />
                {props.level}
              </li>
              <li className="adv list-group-item">
                Advantages: <br />
                {props.level}
              </li>
              <li className="disadv list-group-item">
                Disadvantages: <br />
                {props.level}
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm">
          <ul className="personStuff list-group">

            <li className="proficiency list-group-item">
              Proficiency: {props.prf}
            </li>
          </ul>

          <br />

          <ul className="personStuff list-group">
            <li className="acrobatics list-group-item">
              Acrobatics: {props.level}
            </li>
            <li className="arcana list-group-item">
              Arcana: {props.level}
            </li>
            <li className="athletics list-group-item">
              Athletics: {props.level}
            </li>
            <li className="deception list-group-item">
              Deception: {props.level}
            </li>
            <li className="history list-group-item">
              History: {props.level}
            </li>
            <li className="insight list-group-item">
              Insight: {props.level}
            </li>
            <li className="intimidation list-group-item">
              Intimidation: {props.level}
            </li>
            <li className="investigation list-group-item">
              Investigation: {props.level}
            </li>
            <li className="medicine list-group-item">
              Medicine: {props.level}
            </li>
            <li className="nature list-group-item">
              Nature: {props.level}
            </li>
            <li className="perception list-group-item">
              Perception: {props.level}
            </li>
            <li className="performance list-group-item">
              Performance: {props.level}
            </li>
            <li className="persuasion list-group-item">
              Persuasion: {props.level}
            </li>
            <li className="religion list-group-item">
              Religion: {props.level}
            </li>
            <li className="sleight list-group-item">
              Sleight of Hand: {props.level}
            </li>
            <li className="stealth list-group-item">
              Stealth: {props.level}
            </li>
            <li className="survival list-group-item">
              Survival: {props.level}
            </li>
          </ul>

          <ul className="wallOfText backgroundStuff list-group">
            <li className="background list-group-item">
              Background: {props.todo}.
              Example Wall of Text to show expansion of the listed items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="languages list-group-item">
              Languages: {props.languages}
            </li>
          </ul>

        </div>
      </div>
    </div>
    <footer></footer>
  </div>
export default Home;