import React,{useState, useEffect}  from 'react';
import Item from '../../Components/Item/Item';
import './Products.css';

const Products = () => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) => setProductsData(data));
    }, []);

    return (
        <div className="products-container">
            {productsData.map((prod, index) => (
                <Item key={index} prod={prod} />  
            ))}
        </div>
    )
}

export default Products
