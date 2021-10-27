import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './Cart.css'
import { useHistory } from 'react-router';
import Button from '../../Fragments/Button';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, current) => acc + (current.price * current.count), 0);
    const qtyCount = cart.map((count) => count.count);
    const qtyTotals = qtyCount.reduce((ac, curr) => ac + curr, 0);
    
 
    const remove = (id) => {
        const newCart = cart.filter((item) => item.id !== id);

        setCart(newCart);
    }

    const history = useHistory();
    return (
        <div className="cart-container">
            {cart.map((item) => (
                <div className="item-container">
                <img className="item-cartsm-img" src={item.image}></img>
                    <p className="item-info">{item.title}</p>
                    <p className="item-info">QTY:{item.count}</p>
                    <p className="item-info">${item.price}</p> 
                    <Button className="remove-btn item-btn" onClick={() => remove(item.id)}>Remove</Button>
                </div>
            ))}
            
            <br />
            <div className="cartTotals">
                <h3 className="totals-info">Total items: {qtyTotals}</h3>       
                <h3 className="totals-info">Total price: ${totalPrice.toFixed(2)}</h3>
                <Button className="checkout-btn item-btn" onClick={() => history.push("../Checkout/Checkout")}>Checkout</Button>
            </div>
            
                  
        </div>
    )
}

export default Cart
