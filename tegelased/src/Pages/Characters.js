import { useState } from "react";
import { Link } from "react-router-dom";

function Characters() {
    const [characterList, refreshCharacters] = useState (getCharacters());

    function getCharacters() {
        return [
            {characterName1: "Mickey", characterName2: "Mouse", land: "Disneyland", age: 4},
            {characterName1: "Minnie", characterName2: "Mouse", land: "Disneyland", age: 6},
            {characterName1: "Winnie", characterName2: "Pooh", land: "Hundred Acre Wood", age: 8},
            {characterName1: "Roo", characterName2: "Kangaroo", land: "Hundred Acre Wood", age: 10},
            {characterName1: "Scooby", characterName2: "Doo", land: "Crystal Cove", age: 12}
        ];
    }

    function addCharacter(character) {
        const characters = characterList.slice();
        characters.push(character);
        refreshCharacters(characters);
    }

    function removeCharacter(character) {
        let characters = characterList.slice();
        let index = characters.indexOf(character);
        if (index !== -1) {
            characters.splice(index, 1);
            refreshCharacters(characters);}
    }

    function removeSelected() {
        const characters = [];
        refreshCharacters(characters);
    }

    function totalAge() {
        let total = 0;
        characterList.forEach(element => total += element.age);
        return total;
    }

    function avarageAge() {
        let avarage = 0;
        characterList.forEach(element => avarage += element.age / characterList.length)
        return avarage;
    }
    
    return(
    <div><br/>
        { characterList.length !== 0 && <button onClick={removeSelected}>Clear list</button>}
        <Link to="/AddCharacter">
    <button>Add character</button>
        </Link>
    {characterList.map (element=>
        <div>
            <link to = {"/ViewCharacters/" + characterList.characterName1.toLocaleLowerCase().replace(" ","-")}>
            <button>
            <div>{element.characterName1}</div>
            <div>{element.characterName2}</div>
            <div>{element.land}</div>
            <div>{element.age}</div>
            </button>
            </link>
            <button onClick={ ()=> addCharacter(element) }>Add character</button>
            <button onClick={ ()=> removeCharacter(element) }>Remove character</button>
        </div>)
    }
    <br/>
    {characterList.length !== 0 && <div>Total age: {totalAge()} years</div>}
    {characterList.length !== 0 && <div>Avarage age: {avarageAge()} years</div>}
    {characterList.length !== 0 && <div>Total selected: {characterList.length} </div>}
    {characterList.length === 0 && <div>No characters selected</div>}
    </div>);
}

export default Characters;