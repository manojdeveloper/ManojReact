export let ProductCard = ({data, addToCart, manoj})=>{
    console.log("product card");
    return(
        <div className="productCard">
            <h3>{data.title}</h3>
            <h4>{data.price}</h4>
            <p>{data.desc}</p>
            <button type="button" onClick={()=> addToCart(data.id)}>Add to cart</button>
        </div>
    );
}