import { useEffect, useState } from "react";

function SingleProduct() {

    const [products, refreshProduct] = useState([]);

    // console.log(window.location.href.split("toode/"));
    // console.log(window.location.href.split("toode/")[1]);
    const productName = window.location.href.split("toode/")[1];
    
    const product = products.find(element =>
        element.name.toLowerCase().replace(" ","-") === productName.toLowerCase().replace(" ","-"));
    console.log(product);
    console.log(productName);
    console.log(products);

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
    
    return (<div>{ product && // toode !==undefined
        <div>
        <div>nimetus: {product.name}</div>
        <div>Hind: {product.price}</div>
        <img src={product.imgSrc} alt=""/>
        </div>}
        { !product && <div>Sellist toodet ei eksisteeri</div>  }
        </div>
        )
}

export default SingleProduct;