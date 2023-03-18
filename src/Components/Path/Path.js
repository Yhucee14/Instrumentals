import React from "react";
import Products from "../Products/Products"
import {Route, Routes} from "react-router-dom"
import Cart from "../Pages/Cart"

const Path = ({productItems, cartItems, handleAddProduct}) => {


    return (
      <div>
       <Routes>
        <Route path="/" exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}/> 

        <Route path="/cart" exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />} /> 
          
            
       </Routes>
      </div>
       
    );
  };
  
  export default Path;
  