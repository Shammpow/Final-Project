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

          <br />

          <ul className="individualStats list-group">
            <li className="passI list-group-item">
              Passive Insight: {10 + props.insight}
            </li>
            <li className="passP list-group-item">
              Passive Perception: {10 + props.perception}
            </li>
          </ul>

          <br />

          <ul className="individualStats list-group">
            <li className="languages list-group-item">
              Languages: {props.languages}
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
                Base AC: {props.baseAC}
              </li>
            </ul>

            <br />

            <ul className="personStuff list-group">
              <li className="size list-group-item">
                Size: {props.size}
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
                {props.resistance}
              </li>
              <li className="immune list-group-item">
                Immunities: <br />
                {props.immunities}
              </li>
              <li className="adv list-group-item">
                Advantages: <br />
                {props.advantage}
              </li>
              <li className="disadv list-group-item">
                Disadvantages: <br />
                {props.disadvantage}
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
            <li className="weapons list-group-item">
              Weapons: {props.weapons}
            </li>
            <li className="armor list-group-item">
              Armor: {props.armor}
            </li>
            <li className="tools list-group-item">
              Tools: {props.tools}
            </li>
            <li className="vehicles list-group-item">
              Vehicles: {props.vehicles}
            </li>
          </ul>

          <br />

          <ul className="personStuff list-group">
            <li className="racial list-group-item">
              Racial Features: {props.racial}
            </li>
          </ul>

          <br />

          <ul className="personStuff list-group">
            <li className="racial list-group-item">
              <div><strong>Racial Cantrips:</strong></div>
              <div> {props.extCantrip} <br /><br /></div>
              <div><strong>Racial Spells:</strong></div>
              <div> {props.extSpell1} <br /></div>
              <div> {props.extSpell2} <br /><br /></div>
              <div><strong>Racial Spell Modifier:</strong></div>
              <div> {props.extmod} </div>
            </li>
          </ul>

          <br />

          <ul className="personStuff list-group">
            <li className="breath list-group-item">
              <div><strong>Breath Weapon</strong></div>
              <div> {props.breath} <br /> {props.breathDC} {props.breathST}</div>
            </li>
          </ul>
          

          <br />

          <ul className="personStuff list-group">
            <li className="skills list-group-item">
              Skill Proficiency: {props.profSkills}
            </li>
          </ul>

          <br />

          <ul className="personStuff list-group">
            <li className="acrobatics list-group-item">
              Acrobatics: {props.acrobatics}
            </li>
            <li className="animal list-group-item">
              Animal Handling: {props.animal}
            </li>

            <li className="arcana list-group-item">
              Arcana: {props.arcana}
            </li>
            <li className="athletics list-group-item">
              Athletics: {props.athletics}
            </li>
            <li className="deception list-group-item">
              Deception: {props.deception}
            </li>
            <li className="history list-group-item">
              History: {props.history}
            </li>
            <li className="insight list-group-item">
              Insight: {props.insight}
            </li>
            <li className="intimidation list-group-item">
              Intimidation: {props.intimidation}
            </li>
            <li className="investigation list-group-item">
              Investigation: {props.investigation}
            </li>
            <li className="medicine list-group-item">
              Medicine: {props.medicine}
            </li>
            <li className="nature list-group-item">
              Nature: {props.nature}
            </li>
            <li className="perception list-group-item">
              Perception: {props.perception}
            </li>
            <li className="performance list-group-item">
              Performance: {props.performance}
            </li>
            <li className="persuasion list-group-item">
              Persuasion: {props.persuasion}
            </li>
            <li className="religion list-group-item">
              Religion: {props.religion}
            </li>
            <li className="sleight list-group-item">
              Sleight of Hand: {props.sleight}
            </li>
            <li className="stealth list-group-item">
              Stealth: {props.stealth}
            </li>
            <li className="survival list-group-item">
              Survival: {props.survival}
            </li>
          </ul>

          <ul className="wallOfText backgroundStuff list-group">
            <li className="background list-group-item">
              Background: {props.todo}.
              Example Wall of Text to show expansion of the listed items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>

        </div>
      </div>
    </div>
    <footer></footer>
  </div>
export default Home;