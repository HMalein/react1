import {  useState  } from "react";


function Courses() {
    const [valitudTegelased, uuendaTegelasi] = useState(saaTegelased());


function saaTegelased() {
    return [
        {nimi1: "Mickey", nimi2: "Mouse", maailm: "Disneyland", vanus: 4 },
        {nimi1: "Minnie", nimi2: "Mouse", maailm: "Disneyland", vanus: 6 },
        {nimi1: "Winnie", nimi2: "Pooh", maailm: "Hundred Acre Wood", vanus: 8 },
        {nimi1: "Roo", nimi2: "Kangaroo", maailm: "Hundred Acre Wood", vanus: 10 },
        {nimi1: "Scooby", nimi2: "Doo", maailm: "Crystal Cove", vanus: 12 }
        ];
    }

    function lisaTegelane(tegelane) {
        const tegelased = valitudTegelased.slice();
        tegelased.push(tegelane);
        uuendaTegelasi(tegelased);
    }

    function eemaldaTegelane(tegelane) {
        let tegelased = valitudTegelased.slice();
        let indeks = tegelased.indexOf(tegelane); 
        if (indeks !== -1) {
            tegelased.splice(indeks, 1);
            uuendaTegelasi(tegelased);
    }
    }
    function eemaldaValitud() {
        const tegelased = [];
        uuendaTegelasi(tegelased);
    }

    function vanusKokku() {
        let kokku = 0;
                                        // summa = summa + element.maksumus
        valitudTegelased.forEach(element => kokku += element.vanus);
        return kokku;
    }

    function keskmineVanus() {
        let keskmine = 0;

        valitudTegelased.forEach(element => keskmine += element.vanus / valitudTegelased.length)
        return keskmine;
    }

    return (
        <div> 
            { valitudTegelased.length !== 0 && <button onClick={eemaldaValitud}>Eemalda valitud</button>}
            {valitudTegelased.map(element =>
            <div>
                <div>{element.nimi1}</div>
                <div>{element.nimi2}</div>
                <div>{element.maailm}</div>
                <div>{element.vanus}</div>
                <button onClick={() => lisaTegelane(element)}>Lisa</button>
                <button onClick={() => eemaldaTegelane(element)}>Eemalda</button>
            </div>)
            }
            <br/>
            {valitudTegelased.length !== 0 && <div>Vanus kokku: {vanusKokku()} aastat</div>}
            {valitudTegelased.length !== 0 && <div>Keskmine vanus: {keskmineVanus()} aastat</div>}
            {valitudTegelased.length !== 0 && <div>Valitud kokku: {valitudTegelased.length} tegelast</div>}
            {valitudTegelased.length === 0 && <div>Ühtegi tegelast pole valitud.</div>}
        </div>);

};

export default Courses;