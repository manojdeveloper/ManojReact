import { createContext, useState } from "react";

export let CartContext = createContext();

export let CartProvider = (prop) => {
    let [cartData, SetcartData] = useState([]);

    let addCartItem = (itemdata) => {
        SetcartData((prevdata) => {
            if (prevdata.find(item => item.id === itemdata.id)) {
                let newdata = prevdata.map((item)=>{
                    if(item.id === itemdata.id){
                        return {...item, qty: item.qty + 1}
                    }
                    return item;
                });

                return [...newdata];

            } else {
                return [...prevdata, itemdata];
                //return prevdata.push(itemdata);
            }
        });
    }


    let removeCartItem = (itemId) => {
        SetcartData((prevdata) => {
            let removeitem = prevdata.filter((item) => item.id !== itemId);
            return [...removeitem]
        })

    }

    let emptyCart = ()=>{
        SetcartData([]);
    }

    console.log("provider");

    return <CartContext.Provider value={{ cartData, addCartItem, removeCartItem, emptyCart }}>{prop.children}</CartContext.Provider>
}