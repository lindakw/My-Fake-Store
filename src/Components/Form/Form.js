import { useHistory } from "react-router";
import { React, useContext } from "react";
import CartContext from '../../Context/CartContext';
import './Form.css'

const Form = () => {
    const [ cart, setCart ] = useContext(CartContext);
    const history = useHistory();
    return (
        <div className="form-container">
            <div className="shipping-info">
                <h3>Shipping Details:</h3>
                <p>Name: <input className="inputs-box" type="text" size="30" placeholder="Name" ></input></p>
                <p>Street Address: <input className="inputs-box" type="text" size="40" placeholder="Street Address" ></input></p>
                <label>City: <input className="inputs-box" type="text" placeholder="City" ></input></label>
                <label>State: <input className="inputs-box" type="text" size="5" placeholder="State" ></input></label>
                <label>Zip: <input className="inputs-box" type="text" size="15" placeholder="Zip Code" ></input></label>  
            </div>

            <div className="payment-info">
                <h3>Payment Details</h3>
                <label> Credit Card Number: <input className="inputs-box" type="text" size="40" placeholder="Credit Card #" ></input></label>
                <br />
                <label> Security Code: <input className="inputs-box" type="text" maxlength="3" size="5" placeholder="..." ></input></label>
                <label> Exp Date: <input className="inputs-box" type="text" placeholder="05/20222" ></input></label>
           <div>
            <button
                className="checkoutButton"
                onClick={() => {
                setCart([]);
                alert("Thank you for your order!")
                history.push("/");
                }}
            >
                <h1>Purchase</h1>
            </button>
            </div>
            </div>
            
        </div>
    )
}

export default Form
