import React, {useState} from 'react'
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
import Wavecover from '../Components/Pages/Wavecover';
import data from "../Components/Data/Data"
import {BrowserRouter as Router} from "react-router-dom"
import Path from "../Components/Path/Path"; 
// import HandleAddProduct from './HandleAddProduct'; 

const Home = () => {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);

 const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    
        if(productExist){
          setCartItems(cartItems.map((item) => item.id === product.id ? 
          {...productExist, quantity: productExist.quantity + 1}: item)
          );
        }
          else{
            setCartItems([...cartItems, {...product, quantity: 1}]);
          }
    
      } 

      const handleRemoveProduct = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);

if (productExist.quantity === 1){
  setCartItems(cartItems.filter((item) => item.id !== product.id));
} else{
  setCartItems(
    cartItems.map((item) => item.id === product.id
    ? {...productExist, quantity: productExist.quantity - 1}
    : item
    )
  );
}
      }

  const handleCartClearance = () => {
    setCartItems([]);
  }
    
    
    return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Body />
        <Path productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance = {handleCartClearance} />
        </Router>
        </div>
        );
    };

    export default Home;
