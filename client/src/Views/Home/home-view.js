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
              <li className="ac list-group-item">
                Armor Class: {props.baseAC}
              </li>
              <li className="speed list-group-item">
                Speed: {props.todo}
              </li>
              <li className="rolledClass">
                Class: {props.rolledClass}</li>
            </ul>

            <ul className="wallOfText skills/resistances list-group">
              <li className="skills list-group-item">
                Skills: {props.todo}.
                Example Wall of Text to show expansion of the listed items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
              <li className="resistances list-group-item">
                Resistances: {props.todo}.
                Example Wall of Text to show expansion of the listed items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            </ul>

          </div>
        </div>
        <div className="col-sm">
          <ul className="personStuff list-group">

            <li className="initiative list-group-item">
              Initiative: {props.initiative}
            </li>
            <li className="proficiency list-group-item">
              Proficiency: {props.prf}
            </li>
            <li className="hitDice list-group-item">
              Hit Dice: {props.todo}
            </li>
          </ul>

          <ul className="wallOfText backgroundStuff list-group">
            <li className="background list-group-item">
              Background: {props.todo}.
              Example Wall of Text to show expansion of the listed items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>

            <li className="tools list-group-item">
              Alignment: {props.todo}.
              Example Wall of Text to show expansion of the listed items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>

        </div>
      </div>
    </div>
    <footer></footer>
  </div>
export default Home;