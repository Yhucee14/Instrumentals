import React from 'react'

const Cart = ({cartItems, handleAddProduct}) => {

  return (
    <div className='cart-items'>
        <div className='cart-items-header'><h1>Cart Items</h1></div>

{cartItems.length === 0 && <div className='cart-items'>No items are added</div>} 

<div>
 {cartItems.map((item) => {

   return (
     <div key={item.id} className='cart-items-list'>
         <img className='cart-items-image'
         src={item.image}
         alt={item.name} />

    <div> {item.name} </div>
    <div>
      <button onClick={() => handleAddProduct(item)}> + </button>
      <button onClick={() => handleRemoveProduct(item)}> - </button>
    </div>

     </div>
   )
     
 })}
</div>
        
    </div>
  )
}

export default Cart;