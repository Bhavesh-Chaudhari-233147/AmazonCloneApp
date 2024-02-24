import React from "react"
import "../../Styles/CheckoutProduct.css"
import { useStateValue } from "../StateProvider/StateProvider"

export default function CheckoutProduct({ id, title,image, price, rating })
{
    const[{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_TO_BASKET",
            id:id,
        });
    };

    return(
        <div className="CheckoutProduct">
                <img src={image}
                    alt="image" className="checkoutProduct__image"
                />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">
                        {title}
                    </p>
                    <div className="checkoutProduct__price">
                        <small>Rs. </small>
                        <strong>{price}</strong>
                    </div>
                    <div className="checkoutProduct__rating">
                        {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                        ))}
                    </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
        </div>
    )
}