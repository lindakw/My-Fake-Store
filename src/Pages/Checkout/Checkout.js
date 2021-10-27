import React from 'react'
import CartContext from '../../Context/CartContext'
import { useContext } from "react";
import Form from '../../Components/Form/Form';
import './Checkout.css'


const Checkout = () => {
    const [ cart ] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, current) => acc + (current.price * current.count), 0);
    const qtyCount = cart.map((count) => count.count);
    const qtyTotals = qtyCount.reduce((ac, curr) => ac + curr, 0);

    return (
        <div className="cart-container">
            <h1 className="checkout-title">Please review your cart:</h1>
                <div className="product_cart_container">
                    {cart.map((item, index) => (
                        <div className="cart_item">
                            <h3>
                            {index + 1}. {item.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QTY: {item.count}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price: ${item.price * item.count}
                            </h3>
                            <br />
                        </div>
                    ))}
                </div>
            <h2>Total Items Sold: {qtyTotals}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total: ${totalPrice.toFixed(2)}</h2>
            <Form />
        </div>

    )
}

export default Checkout
