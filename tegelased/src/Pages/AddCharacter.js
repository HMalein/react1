import { useRef } from "react";

function AddCharacter() {
    const characterName1Ref = useRef();
    const characterName2Ref = useRef();
    const landRef = useRef();
    const ageRef = useRef();

    function addNewCharacter() {
        const character = {
            name1: characterName1Ref.current.value,
            name2: characterName2Ref.current.value,
            land: landRef.current.value,
            age: ageRef.current.value
        }
        console.log(character);
    }

    return(<div><br/>
        <label>First name </label>
        <input ref={characterName1Ref} type={"text"}/> <br/>
        <label>Last name </label>
        <input ref={characterName2Ref} type={"text"}/> <br/>
        <label>From </label>
        <input ref={landRef} type={"text"}/> <br/>
        <label>Age </label>
        <input ref={ageRef} type={"number"}/> <br/><br/>

        <button onClick={addNewCharacter}>Add</button>
    </div>)
    
}

export default AddCharacter;