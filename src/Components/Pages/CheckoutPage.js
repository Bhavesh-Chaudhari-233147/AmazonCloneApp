import React from "react";
import "../../Styles/CheckoutPage.css"
import CheckoutProduct from "../Product/CheckoutProduct"
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../StateProvider/StateProvider";


export default function CheckoutPage()
{
    const[{basket},dispatch] = useStateValue();

    return(
        <div className="checkout">
           <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt="" className="checkout__ad"/>
                <div>
                    <h2>Your Shopping Basket</h2>
                </div>
                {basket.map(item => (
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                ))}
           </div>

           <div className="">
                <Subtotal />
           </div>
        </div>
    )
}