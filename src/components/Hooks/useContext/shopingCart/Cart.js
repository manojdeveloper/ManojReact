import { useContext } from "react";
import { CartContext } from "./CartContext";

export let Cart = () => {
    let mycart = useContext(CartContext);

    let removeItem = (itemId) => {
        mycart.removeCartItem(itemId)
    }

    console.log("cart");

    return (
        <div className="cartSection">
            <h2>Cart</h2>
            {mycart.cartData.map((item) => {
                return (
                    <div key={item.id} className="cartItem">
                        <div className="itemInfo">
                            <h3>{item.title}</h3>
                            <h4>{item.price}</h4>
                            <h5>Qty : {item.qty}</h5>
                        </div>
                        <button type="button" onClick={() => removeItem(item.id)}>x</button>
                    </div>
                )
            })}


            <div className="cartTotal">
                Total Price : {mycart.cartData.reduce((acc, curr) => acc + curr.price * curr.qty, 0)}
            </div>

            <button type="button" onClick={mycart.emptyCart} className="clearCart">Clear Cart</button>

        </div>
    )
}