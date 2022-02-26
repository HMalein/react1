import {  useState  } from "react";

function Ostukorv() {
    const [ostukorviEsemed, uuendaOstukorvi] = useState(saaOstukorviEsemed());

    function saaOstukorviEsemed() {
        // return [           
        // {nimetus:"Rolex", hind: 5999, aktiivne: true}, 
        // {nimetus:"Tag Heuer", hind:4000, aktiivne: false}, 
        // {nimetus:"Hugo Boss", hind:3000, aktiivne: true}
        // ];
        if (sessionStorage.getItem("ostukorv")) {
            return JSON.parse(sessionStorage.getItem("ostukorv"));
        } else {
            return [];
        }
    }

    function lisaOstukorvi(toode) {
        const tooted = ostukorviEsemed.slice();
        tooted.push(toode);
        sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
        uuendaOstukorvi(tooted);
    }

    function kustutaOstukorvist(toode) {
        let tooted = ostukorviEsemed.slice();
        let indeks = tooted.indexOf(toode); 
        if (indeks !== -1) {
            tooted.splice(indeks, 1);
            sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
            uuendaOstukorvi(tooted);
        }
    }
    
    function tyhjendaOstukorv() {
        const tooted = [];
        sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
        uuendaOstukorvi(tooted);
    }

    function ostukorviSumma() {
        let summa = 0;
                                        // summa = summa + element.hind
        ostukorviEsemed.forEach(element => summa += Number(element.hind));
        return summa;
    }

    function maksa() {
        const andmed = {
                "api_username": "92ddcfab96e34a5f",
                "account_name": "EUR3D1",
                "amount": ostukorviSumma(),
                "order_reference": "686326",
                "nonce": "92ddcfab96e34a5f" + new Date(),
                "timestamp": new Date(),
                "customer_url": "https://www.delfi.ee"
                };

        fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
            {
                method: "POST",
                body: JSON.stringify(andmed),
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
                }
            }
        ).then(res => res.json())
        .then(data => window.location.href = data.payment_link);
    }



    return (
    <div>
        { ostukorviEsemed.length !== 0 && <button onClick={tyhjendaOstukorv}>Tühjenda ostukorv</button>}
        {ostukorviEsemed.map(element => 
        <div>
            <div>{element.nimetus}</div>
            <div>{element.hind}</div>
            <div>{element.aktiivne}</div>
            <button onClick={() => lisaOstukorvi(element)}>+</button>
            <button onClick={() => kustutaOstukorvist(element)}>X</button>
        </div>)
        }
        <br/>
        { ostukorviEsemed.length !== 0 && <div>Kokku: {ostukorviSumma()}$</div>}
        { ostukorviEsemed.length !== 0 && <button onClick={maksa}>Maksma</button>}
        { ostukorviEsemed.length === 0 && <div>Ostukorv on tühi</div>}
    </div>);
}

export default Ostukorv;