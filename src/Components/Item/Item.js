import React from 'react'
import '../../Pages/Products/Products.css'
import { useHistory } from 'react-router';
import Button from '../../Fragments/Button';

const Item = (props) => {
    const history = useHistory();
    return (
        <div className="product-card">
            <div className="img-container">
                <img className="item-img" src={props.prod.image} alt="product" />
            </div>
            <div className="product-info">
                <p className="item-txt">{props.prod.title}</p>
                <p className="item-txt">${props.prod.price.toFixed(2)}</p>
                <Button className="item-btn" onClick={() => history.push(`/product/${props.prod.id}`)}>View Details</Button>
            </div>           
        </div>
    )
}

export default Item
