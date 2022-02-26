import { Link } from 'react-router-dom';
import { useRef } from 'react';

function lisaTegelane() {
    const nimi1Ref = useRef();
    const nimi2Ref = useRef();
    const vanusRef = useRef();
    const elukohtRef = useRef();

    function sisestaUusTegelane() {
        console.log("uus.tegelane")
        console.log(nimetusRef.current)
        console.log(hindRef.current)
        console.log(aktiivneRef.current)
        console.log(nimetusRef.current.value)
        const tegelane = {
            nimi1: nimi1Ref.current.value,
            nimi2: nimi2Ref.current.value,
            vanus: vanusRef.current.value,
            elukoht: elukohtRef.current.value
        }
        console.log(tegelane);
    }
    return(
        <div>
            <Link to="/admin">
                <button>Tagasi</button>
            </Link>
            <br />
            <label>Esinimi</label><br />
            <input ref={nimi1Ref} type="text"></input><br />
    
            <label>Perenimi</label> <br />
            <input ref={nimi2Ref} type="text"></input> <br />
    
            <label>Vanus</label>
            <input ref={vanusRef} type="number" /> <br />
    
            <button onClick={sisestaUusTegelane}>Sisesta</button>
            
        </div>)
}

export default lisaTegelane;