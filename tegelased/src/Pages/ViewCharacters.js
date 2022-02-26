import { useState } from "react";
import { Link } from "react-router-dom";

function ViewCharacters() {
    const [characters, refreshCharacters] = useState(getCharacter());

    function getCharacter() {
        return [
            {characterName1: "Mickey", characterName2: "Mouse", land: "Disneyland", age: 4},
            {characterName1: "Minnie", characterName2: "Mouse", land: "Disneyland", age: 6},
            {characterName1: "Winnie", characterName2: "Pooh", land: "Hundred Acre Wood", age: 8},
            {characterName1: "Roo", characterName2: "Kangaroo", land: "Hundred Acre Wood", age: 10},
            {characterName1: "Scooby", characterName2: "Doo", land: "Crystal Cove", age: 12}
        ];
    }
    
    function removeCharacter(characterDelete) {
        let characterList = characters.slice();
        let index = characterList.indexOf(characterDelete);
        characterList.splice(index, 1);
        refreshCharacters(characterList);
    }
    
    
    return(<div>
            {characters.map(character => 
                <div key={character.characterName1} className = "character">
                    <div>{character.characterName2}</div>
                    <div>{character.land}</div>
                    <div>{character.age}</div>
                    <br />
                    <button onClick={() => removeCharacter(character)}>Delete</button>
                    <Link to={"/Character/ChangeCharacter/" + character.characterName1.toLocaleLowerCase().replace(" ","-")}>
                    <button>Muuda</button><br /><br />
                    </Link>
                </div>)}
        </div>)
}

export default ViewCharacters;