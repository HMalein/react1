import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ViewProduct() {
    const [products, refreshProduct] = useState([]);

    // console.log(window.location.href.split("toode/"));
    // console.log(window.location.href.split("toode/")[1]);
    const productName = window.location.href.split("toode/")[1];
    
    const product = products.find(element =>
        element.name.toLowerCase().replace(" ","-") === productName);
    console.log(product);

    useEffect(() => {
        fetch("https://webshopio-02-default-rtdb.europe-west1.firebasedatabase.app/products.json")
    .then(response => response.json())
    .then(data => {
        const newMassive = [];
            for (const key in data) {
                newMassive.push(data[key]);
            }
            refreshProduct(newMassive);
        });
    },[]);

    function deleteProduct(kustutamiselToode) {
        let productMassive = products.slice();
        const index = productMassive.indexOf(kustutamiselToode);
        productMassive.splice(index,1);
        refreshProduct(productMassive);
        fetch("https://webshopio-02-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        {
            method: "PUT",
            body: JSON.stringify(productMassive)
        })
     }
    
    return (<div>
        <Link to="/admin">
        <button>Tagasi</button>
        </Link>
        <div>
            {products.map(product =>
                <div key={product.name} className='toode'>
                <div>nimetus: {product.name}</div>
                <div>Hind: {product.price}</div>
                <img src={product.imgSrc} alt=""/> <br/>
                <button onClick={() => deleteProduct(product)}>Kustuta</button> 
                    <Link to={"/admin/muuda/" + product.name.toLocaleLowerCase().replace(" ","-")}>
                    <button>Muuda</button>
                    </Link>
            </div>)}
            </div>
        { !product && <div>Sellist toodet ei eksisteeri</div>  }
    </div>)
}

export default ViewProduct