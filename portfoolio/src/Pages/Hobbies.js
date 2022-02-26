import { useState } from "react";

function Hobbies() {
        const [carType, changeType] = useState("sedan");
    
    function saaAutod() {
        
        return [
                { type: "sedan", make: "BMW", model: "i8", year: 2015 },
                { type: "sedan", make: "Audi", model: "a4", year: 2005 },
                { type: "touring", make: "Audi", model: "a6", year: 2011 },
                { type: "sedan", make: "Škoda", model: "Octavia", year: 2018 },
                { type: "hatchback", make: "Volkswagen", model: "Golf", year: 1997 },
                { type: "hatchback", make: "BMW", model: "316", year: 1998 },
                { type: "sedan", make: "Tesla", model: "S", year: 2019 },
                { type: "touring", make: "Volvo", model: "XC70", year: 2015 },
                { type: "sedan", make: "Lexus", model: "GS300", year: 2007 },
                { type: "hatchback", make: "Toyota", model: "Corolla", year: 2008 },
                { type: "touring", make: "Mercedes-Benz", model: "C220", year: 2009 },    
                    ];
    };

      return (
        <div>
            <button onClick={() => changeType("sedan")}>sedan</button>
            <button onClick={() => changeType("touring")}>touring</button>
            <button onClick={() => changeType("hatchback")}>hatchback</button>
            <br/>
            
            <select>{
            saaAutod().map(element =>
                {
                    if (element.type === carType)
                    {
                        return <option key={element.model}>{element.make} {element.model} {element.year}</option>
                    }
                        else {
                            return null;
                            }
                }
            )};
                </select>
        </div>);
}

export default Hobbies;