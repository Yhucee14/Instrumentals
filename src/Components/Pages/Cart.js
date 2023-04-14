import React from 'react'
import '../Pages/Cart.css'
import { Box, Card, CardContent, Typography, CardMedia, Button } from "@mui/material";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  

  return (
    <div className='cart-items'>
      <div className='cart-items-header'><h1>Cart Items</h1></div>
      <div>
        {cartItems.length >= 1 && (
          <button onClick={handleCartClearance} className='clearbtn'>Clear Cart</button>
        )}
      </div>

      {cartItems.length === 0 && <div className='cart-items'> <p className="Noitems">No items are added</p></div>}

      <div>
        {cartItems.map((item) => {

const unitPrice = item.quantity * item.price;

          return (
            <div key={item.id} className='cart-items-list'>
              <Card sx={{ display: 'flex', width: "65%",  marginLeft: "18%"}}> 
                <Box sx={{ padding: '10px', }} >
                  <CardMedia sx={{ width: '150px', }}
                    component='img'
                    height='150'
                    src={item.image}
                    alt='splash' /> 
                </Box>

                <CardContent sx={{ width: "600px", marginTop: "-20px"}}>
                  <Typography sx={{ display: 'flex', }}><h3>{item.name } </h3> <h6> { item.type}</h6></Typography>
                  <Typography>{item.about}</Typography>

                  <Typography><b>Quantity : {item.quantity}</b>  <button variant='outlined'  onClick={() => handleAddProduct(item)}>Add more</button></Typography>
                </CardContent>

                <Box  sx={{ display: 'block',  paddingTop: '10px', paddingBottom: '10px', paddingRight: '10px', }}>
                <Button variant='outlined' size='small' onClick={() => handleRemoveProduct(item)}> X </Button>

                

                <Typography sx={{marginTop: "92px"}}><b>${unitPrice}</b></Typography>

                
                </Box>

              </Card>

             


              {/* <img className='cart-items-image'
         src={item.image}
         alt={item.name} />

    <div> {item.name} </div>
    <div>
      <button onClick={() => handleAddProduct(item)}> + </button>
      <button onClick={() => handleRemoveProduct(item)}> - </button>
    </div>
    <div>
      {item.quantity} * ${item.price} </div> */}

            </div>
          )

        })}
      </div>

      <div>
        
        <div className='total'><b>Total price : ${totalPrice}</b></div>

        <Button variant='contained' sx={{ width: "50%", marginLeft: "24%", bgcolor: "#3E0660", marginTop: "10px", }} > Pay </Button>

      </div>

    </div>
  )
}

export default Cart;