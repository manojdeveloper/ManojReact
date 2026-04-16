import { ProviderOne } from "./contextApi/ProviderOne"
import { ProviderTwo } from "./contextApi/ProviderTwo"
import { ChildOne } from "./contextApi/ChildOne"
import { ProductListing } from "./shopingCart/ProductListing"
import { CartProvider } from "./shopingCart/CartContext"

export let UseContextHook = () => {

    return (
        // <ProviderOne>
        //     <ProviderTwo>
        //         <ChildOne propdata="this prop data">
        //             <p>manoj kumar ji 1</p>
        //             <p>manoj kumar ji 2</p>
        //         </ChildOne>
        //     </ProviderTwo>
        // </ProviderOne>

        <CartProvider>
            <ProductListing />
        </CartProvider>

    )
}