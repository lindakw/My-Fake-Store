import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import CartContext from '../../Context/CartContext';
import './ProductDetails.css'
import Button from '../../Fragments/Button';

const ProductDetails = () => {
    const [cart, setCart] = useContext(CartContext);
    
    const addToCart = (id) => {
        const item = {
            id: prodDetails.id, 
            title: prodDetails.title, 
            price: prodDetails.price, 
            image: prodDetails.image, 
            count: quantity
        }
        const check_index = cart.findIndex(x => x.id === item.id);
        if (check_index !== -1) {
            cart[check_index].count++;
            alert("Qty updated!");
        } else {
            setCart(current => [...current, item]);
            alert("Product has been added to cart!")
        }
        
    }
    
    const [quantity, setQuantity] = useState(1);
    const addOne = () => setQuantity(quantity + 1);
    let minusOne = () => setQuantity(quantity - 1);

    if(quantity <= 0) {
        minusOne = () => setQuantity(1);
    }
    

    const {id} = useParams();
    const [prodDetails, setProdDetails] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then((json) => setProdDetails(json));
    })
    return (
        <div className="prod-container">
            <div>
            <h3 className="prod-title">Category: {prodDetails.category}</h3>
            <h1 className="prod-title">{prodDetails.title}</h1>
            </div>
            
            <div className="prod-info">
                <img className="prod-img" alt="product" src={prodDetails.image}></img>
                <p>{prodDetails.description}</p>
                <p className="prod-price">Price: ${prodDetails.price}</p>
            </div>
            <div className="quantity">
                <IoAddCircleOutline className="qty-btn" onClick={addOne} />
                <p>{quantity}</p>
                <IoRemoveCircleOutline className="qty-btn" onClick={minusOne} />
            </div>
            <Button className="item-btn" onClick={addToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductDetails
