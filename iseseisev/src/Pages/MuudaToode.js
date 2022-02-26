import { useParams, Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function MuudaToode() {
        const nimetusRef = useRef();
        const aktiivneRef = useRef();
        const hindRef = useRef();
        const piltRef = useRef();
        const [tooted,uuendaTooted] = useState([]);

    // const tooteNimetus2 = window.location.href.split("muuda/")[1];
    // path="asdasda/:tooteNimi"
    // vitamin-well
    const { tooteNimi } = useParams();

   

    useEffect(() => {
        fetch("https://react-2022-koolitus-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
    .then(tagastus => tagastus.json())
    .then(andmed => {
        const uusMassiiv = [];
            for (const voti in andmed) {
                uusMassiiv.push(andmed[voti]);
            }
            uuendaTooted(uusMassiiv);
        });
    },[]);
    // console.log(tooteNimetus2);
    // console.log(useParams);

    //[{nim: "coca", ....},{nim: "fanta, ...."},{nim: Vitamin-well}].find()
    // .find({nim: "coca c", ....} => coca-c === vitamin-well) //false
    // .find({nim: "Fanta", ....} => fanta === vitamin-well) //false
    // .find({nim: "Vitamin well", ....} => vitamin-well === vitamin-well) //true
    const toode = tooted.find(element => 
        element.nimetus.toLowerCase().replace(" ","-") === tooteNimi);
    console.log(toode);
    const toodeId = tooted.indexOf(toode); //saamaks k'tte ID, et selle abil muuta

    
    

    function saaTooted() {
        return [
        {nimetus: 'Coca Cola', hind: 1.5, kategooria: 'coca', pilt: "https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg"},
        {nimetus: 'Fanta', hind: 1, kategooria: 'coca', pilt: ""},
        {nimetus: 'Vitamin well', hind: 2, kategooria: 'water', pilt: "https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"}];
}

function muudaToode() {
    console.log("uus.toode")
    console.log(nimetusRef.current)
    console.log(hindRef.current)
    console.log(aktiivneRef.current)
    console.log(nimetusRef.current.value)
    const toode = {
        nimetus: nimetusRef.current.value,
        hind: hindRef.current.value,
        pilt: piltRef.current.value,
        aktiivne: aktiivneRef.current.checked
    }
    console.log(toode);
    tooted[toodeId] = toode;
    fetch("https://react-2022-koolitus-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
    {
        method: "PUT",
        body: JSON.stringify(tooted)
    })
}
    return(
        <div>
            <div>
            <Link to="/admin/tooted">
            <button>Tagasi</button>
            </Link>
        <br />
        { toode && // toode !==undefined
        <div>
        <label>Toote nimetus</label><br />
        <input ref={nimetusRef} defaultValue={toode.nimetus} type="text"></input><br />

        <label>toote hind</label> <br />
        <input ref={hindRef} defaultValue={toode.hind} type="number"></input> <br />

        <label htmlFor="aktiivne">toode aktiivne</label>
        <input ref={aktiivneRef} defaultValue={toode.aktiivne} id="aktiivne" type="checkbox" /> <br />

        <label>Toote pilt</label><br />
        <input ref={piltRef} defaultValue={toode.pilt} type="text" /><br />

        <button onClick={muudaToode}>Sisesta</button>
            {/* {<div>nimetus: {toode.nimetus}</div>
            <div>Hind: {toode.hind}</div>
            <div>Kategooria: {toode.kategooria}</div>
            <img src={toode.pilt} alt=""/>} */}
            </div>}
            </div>
        </div>
    )
    
}

export default MuudaToode;