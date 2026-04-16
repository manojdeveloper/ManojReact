import { useContext } from "react";
import { Cart } from "./Cart";
import { ProductCard } from "./ProductCard";
import "./ProductListing.scss";
import { CartContext } from "./CartContext";
import { Test } from "./Test";

export let ProductListing = ()=>{

    let mycart = useContext(CartContext);

    let addToCart = (prodId)=>{
        let item = products.find((item)=>{
            return item.id === prodId;
        });

        mycart.addCartItem(item);
    }

    let products = [
        {id: 1, title: 'product 1', desc: 'description 1', price: 100, qty:1,},
        {id: 2, title: 'product 2', desc: 'description 2', price: 200, qty:1,},
        {id: 3, title: 'product 3', desc: 'description 3', price: 300, qty:1,},
    ];

    console.log("product listing");

    return(
        <div className="productListing">
            <div className="listingSection">
                <h2>Product Listing</h2>
                <div className="productCointainer">
                    {products.map((item)=>{
                        return <ProductCard key={item.id} data={item} addToCart={addToCart} />
                    })}
                </div>
            </div>

            {mycart.cartData.length ? <Cart /> : ''}
            <Test />
        </div>
    );
}