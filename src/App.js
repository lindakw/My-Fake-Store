import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/Product/ProductDetails';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Error from './Pages/Error/Error';
import CartContext from './Context/CartContext';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
    <div className="App">
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>
            <Route path="/cart">
              <Cart  />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Error />
            </Route>
          </Switch>  
      </Router>
    </div>
    </CartContext.Provider>
  );
}

export default App;
