import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Button, Snackbar, Alert } from '@mui/material';

const vegetables = [
  { id: 1, name: 'Onion', price: '₹30/kg', image: '/assets/images/vegetables/onion.jpg' },
  { id: 2, name: 'Tomato', price: '₹20/kg', image: '/assets/images/vegetables/tomato.jpg' },
  { id: 3, name: 'Potato', price: '₹25/kg', image: '/assets/images/vegetables/potato.jpg' },
  { id: 4, name: 'Carrot', price: '₹40/kg', image: '/assets/images/vegetables/carrot.jpg' },
  { id: 5, name: 'Beetroot', price: '₹35/kg', image: '/assets/images/vegetables/beetroot.jpg' },
  { id: 6, name: 'Green Chilli', price: '₹60/kg', image: '/assets/images/vegetables/green chilli.jpg' },
  { id: 7, name: 'Cabbage', price: '₹20/kg', image: '/assets/images/vegetables/cabbage.jpg' },
  { id: 8, name: 'Cauliflower', price: '₹30/pc', image: '/assets/images/vegetables/cauliflower.jpg' },
  { id: 9, name: 'Spinach', price: '₹15/bunch', image: '/assets/images/vegetables/spinach.jpg' },
];

function Vegetables() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAddToCart = (vegetable) => {
    const existingItem = cart.find(item => item.id === vegetable.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === vegetable.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const newItem = { ...vegetable, quantity: 1 };
      updatedCart = [...cart, newItem];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    
    setSnackbarMessage(`${vegetable.name} added to cart!`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#eaf7e5', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', color: '#006d3e', fontWeight: 'bold', mb: 4 }}
        >
          Fresh Vegetables
        </Typography>

        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {vegetables.map((vegetable) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={vegetable.id}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: 'center',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease-in-out',
                  maxWidth: 300,
                  width: '100%',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <img
                  src={vegetable.image}
                  alt={vegetable.name}
                  style={{
                    width: '300px',
                    height: '200px',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ color: '#006d3e', fontWeight: 'bold' }}>
                    {vegetable.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {vegetable.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    onClick={() => handleAddToCart(vegetable)}
                    sx={{ fontWeight: 'bold' }}
                  >
                    ADD TO CART
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

     
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Vegetables;
