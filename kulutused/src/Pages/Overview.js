

function Overview(){

    function getProducts(){
    return[
        {name: "piim", price: 1, category: "food"}, 
        {name: "jogurt", price: 3, category: "food"},
        {name: "leib", price: 3, category: "food"}, 
        {name: "mobiiltelefon", price: 400, category: "technology"}]
    }

    return(    
    <div>
        { getProducts().map(expense =>
        <div><br/><br/>
        <div>{expense.name}</div>
        <div>{expense.price}</div>
        <div>{expense.category}</div>
        </div>)}
    </div>);
}
export default Overview