import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
    return total + price * item.quantity;
  }, 0);

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', color: '#006d3e', fontWeight: 'bold', mb: 4 }}>
        Your Cart
      </Typography>

      {cart.length > 0 ? (
        <Grid container spacing={4} justifyContent="center">
          {cart.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: 'center',
                  p: 2,
                  width: '100%',
                  maxWidth: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '200px',
                    height: '150px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                  }}
                />
                <Typography variant="h6" sx={{ color: '#006d3e', fontWeight: 'bold', mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Price: {item.price}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton onClick={() => handleQuantityChange(item.id, -1)} color="primary">
                    <Remove />
                  </IconButton>
                  <Typography variant="body2" sx={{ mx: 2 }}>
                    {item.quantity}
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange(item.id, 1)} color="primary">
                    <Add />
                  </IconButton>
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleRemoveFromCart(item.id)}
                  sx={{ fontWeight: 'bold', width: '100%' }}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center' }}>
          Your cart is empty.
        </Typography>
      )}

      {cart.length > 0 && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Total Price: ₹{totalPrice.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, fontWeight: 'bold' }}
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Cart;
