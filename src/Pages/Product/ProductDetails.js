import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import CartContext from '../../Context/CartContext';
import './ProductDetails.css'

const ProductDetails = () => {
    const [cart, setCart] = useContext(CartContext);
    // const history = useHistory();
    
    const addToCart = () => {
        const item = {
            id: prodDetails.id, 
            title: prodDetails.title, 
            price: prodDetails.price, 
            image: prodDetails.image, 
            count: quantity
        }
        setCart(current => [...current, item]);
        alert("Product has been added to cart!")
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
            <h3 className="category">Category: {prodDetails.category}</h3>
            <h1>{prodDetails.title}</h1>
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
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default ProductDetails
