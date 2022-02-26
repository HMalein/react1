import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Kodu() {
    const [tooted, uuendaTooted] = useState([]);
    
    useEffect(() => {
        fetch("https://react-2022-koolitus-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
    .then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            const newArray = [];
            for (const key in data) {
                newArray.push(data[key]);
            }
            console.log(newArray);
            uuendaTooted(newArray);
        }
    );
    },[])
    

    function saaTooted() { //hard-coded
        return [
        {nimetus: 'Coca Cola', hind: 1.5, kategooria: 'coca', pilt: "https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg"},
        {nimetus: 'Fanta', hind: 1, kategooria: 'coca', pilt: ""},
        {nimetus: 'Vitamin well', hind: 2, kategooria: 'water', pilt: "https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"}];
    }

    function lisaOstukorvi(lisatavToode) {
        // "[{},{},{}]".push() ---> ostukorv.push is not a function
        // [{},{},{}].push({....}) ---> [{},{},{},{...}]
        // JSON.parse("[]") ---> unexpected token o in JSON at position 1
        // JSON.parse("[{}]") ---> [{}]
        if(sessionStorage.getItem("ostukorv")) {
            const ostukorv = JSON.parse(sessionStorage.getItem("ostukorv"));
        ostukorv.push(lisatavToode);

        sessionStorage.setItem("ostukorv", JSON.stringify(ostukorv));
        } else{
            sessionStorage.setItem("ostukorv", JSON.stringify([lisatavToode]));
        }
    }

    return(
        <div>
            {tooted.map(toode => 
                <div key={toode.nimetus} className="toode">
                    <Link to={"/toode/" + toode.nimetus.toLocaleLowerCase().replace(" ","-")}>
                        <div>{toode.nimetus}</div>
                        <div>{toode.hind}</div>
                        <div>{toode.kategooria}</div>
                        <img src={toode.pilt} alt="" /><br />
                    </Link>
                    <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button><br /><br />
                </div>)}
        </div>
    );
}

export default Kodu;