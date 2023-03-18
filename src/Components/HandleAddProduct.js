import React, {useState} from 'react'




const  HandleAddProduct = (product) => {
  const [cartItems, setCartItems] = useState([]);
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

      export default HandleAddProduct;