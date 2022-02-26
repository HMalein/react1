import { Link } from 'react-router-dom';
import { useRef } from 'react';

function LisaToode() {
    const nimetusRef = useRef();
    const aktiivneRef = useRef();
    const hindRef = useRef();

    function sisestaUusToode() {
        console.log("uus.toode")
        console.log(nimetusRef.current)
        console.log(hindRef.current)
        console.log(aktiivneRef.current)
        console.log(nimetusRef.current.value)
        const toode = {
            nimetus: nimetusRef.current.value,
            hind: hindRef.current.value,
            aktiivne: aktiivneRef.current.checked
        }
        console.log(toode);
        fetch("https://react-2022-koolitus-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
            {
                method: "POST",
                body: JSON.stringify(toode)
            }
        );
    }

    return(
    <div>
        <Link to="/admin">
            <button>Tagasi</button>
        </Link>
        <br />
        <label>Toote nimetus</label><br />
        <input ref={nimetusRef} type="text"></input><br />

        <label>toote hind</label> <br />
        <input ref={hindRef} type="number"></input> <br />

        <label htmlFor="aktiivne">toode aktiivne</label>
        <input ref={aktiivneRef} id="aktiivne" type="checkbox" /> <br />

        <button onClick={sisestaUusToode}>Sisesta</button>
        
    </div>)
}

    export default LisaToode