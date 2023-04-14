import './App.css';
import Home from './Components/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Wavecover from './Components/Pages/Wavecover';
import data from "./Components/Data/Data"
import { BrowserRouter as Router } from "react-router-dom"
import Path from "./Components/Path/Path";
import Products from "./Components/Products/Products";
import React, { useState } from "react";


const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...productExist, quantity: productExist.quantity + 1 } : item)
      );
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id
          ? { ...productExist, quantity: productExist.quantity - 1 }
          : item
        )
      );
    }
  }

  const handleCartClearance = () => {
    setCartItems([]);
  }

  return (
    <div id='container'> 
      <Router>
       
        <Header cartItems={cartItems} />
        <Path productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance} />
          
       <Footer />
      </Router>
    </div>

  );
};

export default App;
