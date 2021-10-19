import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


function App() {
  return (
    <Router>
        <div className="App">
          
        <Switch>
          <Route path="/">
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart  />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        </div>
    </Router>
   
  );
}

export default App;
