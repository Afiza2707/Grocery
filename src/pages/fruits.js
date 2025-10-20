import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Button, Snackbar, Alert } from '@mui/material';

const fruits = [
  { id: 10, name: 'Apple', price: '₹120/kg', image: '/assets/images/fruits/apple.jpg' },
  { id: 11, name: 'Banana', price: '₹40/dozen', image: '/assets/images/fruits/banana.jpg' },
  { id: 12, name: 'Mango', price: '₹150/kg', image: '/assets/images/fruits/mango.jpg' },
  { id: 13, name: 'Orange', price: '₹80/kg', image: '/assets/images/fruits/orange.jpg' },
  { id: 14, name: 'Grapes', price: '₹90/kg', image: '/assets/images/fruits/grapes.jpg' },
  { id: 15, name: 'Papaya', price: '₹60/kg', image: '/assets/images/fruits/papaya.jpg' },
  { id: 16, name: 'Watermelon', price: '₹25/kg', image: '/assets/images/fruits/watermelon.jpg' },
  { id: 17, name: 'Pineapple', price: '₹75/pc', image: '/assets/images/fruits/pineapple.jpg' },
  { id: 18, name: 'Guava', price: '₹60/kg', image: '/assets/images/fruits/guava.jpg' },
];

function Fruits() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAddToCart = (fruit) => {
    const existingItem = cart.find(item => item.id === fruit.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === fruit.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const newItem = { ...fruit, quantity: 1 };
      updatedCart = [...cart, newItem];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    
    setSnackbarMessage(`${fruit.name} added to cart!`);
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
          Fresh Fruits
        </Typography>

        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {fruits.map((fruit) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={fruit.id}
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
                  src={fruit.image}
                  alt={fruit.name}
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
                    {fruit.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {fruit.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    onClick={() => handleAddToCart(fruit)}
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

export default Fruits;
