import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


function Home() {

    const [products, setProducts] = useState([]);
    const { t } =useTranslation();

    useEffect(() => {
        fetch("https://webshopio-02-default-rtdb.europe-west1.firebasedatabase.app/products.json")
    .then(response => response.json()) //terve response koos k]ikide andmetega
    .then(body => { //teine then() on body k'ttesaamiseks
            const newArray = [];
            for (const key in body) {
                newArray.push(body[key]);
            }
            setProducts(newArray);
        }
    );
    },[])

    function onAddToCart(product) {
        let cartProducts;
        if (sessionStorage.getItem("cart")) {
            cartProducts = JSON.parse(sessionStorage.getItem("cart"));
            const index = cartProducts.findIndex(element => element.cartProduct.name === product.name);
            if(index !== -1) {
                //suurenda quantityt
                cartProducts[index].quantity++;
            } else {
                //push
                const packageMachineIndex = cartProducts.findIndex(element => element.cartProduct.id === "11110000");
                console.log(packageMachineIndex);
                if (packageMachineIndex === -1) {
                    cartProducts.push({cartProduct: product, quantity: 1});
                } else {
                    cartProducts.splice(cartProducts.length-1,0,{cartProduct: product, quantity: 1});
                }
            }
        } else {
            cartProducts = [{cartProduct: product, quantity: 1}];
        }       //scope
        sessionStorage.setItem("cart",JSON.stringify(cartProducts));
    }

    function sortAZ() {
        products.sort((a, b) => a.name.localeCompare(b.name));
        setProducts(products.slice());
    }
    
    function sortZA() {
        products.sort((a, b) => b.name.localeCompare(a.name));
        setProducts(products.slice());
    }

    function sortPriceAsc() {
        products.sort((a, b) => a.price - b.price);
        setProducts(products.slice());
    }

    function sortPriceDesc() {
        products.sort((a, b) => b.price - a.price);
        setProducts(products.slice());
    }

    return (
    <div>
        <button onClick={sortAZ}>Sorteeri A-Z</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>
        <button onClick={sortPriceAsc}>Hinna järgi kasvavalt</button>
        <button onClick={sortPriceDesc}>Hinna järgi kahanevalt</button>
        <div>{products.map(element => 
        <div>
            <Link to={"/toode/" + element.name.toLocaleLowerCase().replace(" ","-")}>
            <div>{element.name}</div>
            <img src={element.imgSrc} alt="" />
            <div>{element.price}$</div>
            </Link>
            <button onClick={() => onAddToCart(element)}>{t("add-to-cart-button")}</button>
        </div>)}
        </div>
    </div>)
}

export default Home;