import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoBagOutline } from 'react-icons/io5';
import './Nav.css'
import CartContext from '../../Context/CartContext';

const Nav = () => {
    const [cart] = useContext(CartContext)
    const qtyCount = cart.map((count) => count.count);
    const qtyTotals = qtyCount.reduce((ac, curr) => ac + curr, 0);
    return (
        <div>
           <nav className="nav-bar">
            <ul>
                <li className="li-link">
                <Link to ="/" style={{textDecoration: 'none'}}><h1 className="store-name">BORAHAE BOUTIQUE</h1></Link>
                </li>
                <li className="li-link">
                <Link to ="/checkout" className="Nav_link" style={{textDecoration: 'none'}}>Checkout</Link>
                </li>
                <li className="li-link li-bag">
                <Link to ="/cart" className="Nav_link"><IoBagOutline></IoBagOutline></Link>
                {qtyTotals}
                </li>
                
            </ul>
            
           </nav> 
        </div>
    )
}

export default Nav;
