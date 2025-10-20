import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Button, Snackbar, Alert } from '@mui/material';

const spices = [
  { id: 35, name: 'Turmeric Powder', price: '₹200/kg', image: '/assets/images/spices/turmeric.jpg' },
  { id: 36, name: 'Red Chilli Powder', price: '₹250/kg', image: '/assets/images/spices/red chilli.jpg' },
  { id: 37, name: 'Coriander Powder', price: '₹180/kg', image: '/assets/images/spices/coriander.jpg' },
  { id: 38, name: 'Cumin Seeds', price: '₹320/kg', image: '/assets/images/spices/cumin.jpg' },
  { id: 39, name: 'Black Pepper', price: '₹500/kg', image: '/assets/images/spices/black pepper.jpg' },
  { id: 40, name: 'Mustard Seeds', price: '₹100/kg', image: '/assets/images/spices/mustard.jpg' },
  { id: 41, name: 'Cloves', price: '₹700/kg', image: '/assets/images/spices/cloves.jpg' },
  { id: 42, name: 'Cardamom', price: '₹1500/kg', image: '/assets/images/spices/cardamom.jpg' },
  { id: 43, name: 'Cinnamon', price: '₹400/kg', image: '/assets/images/spices/cinnamon.jpg' },
];

function Spices() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAddToCart = (spice) => {
    const existingItem = cart.find(item => item.id === spice.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === spice.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const newItem = { ...spice, quantity: 1 };
      updatedCart = [...cart, newItem];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    
    setSnackbarMessage(`${spice.name} added to cart!`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ backgroundColor: '#fff8e1', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', color: '#8b4513', fontWeight: 'bold', mb: 4 }}
        >
          Authentic Indian Spices
        </Typography>

        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {spices.map((spice) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={spice.id}
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
                  src={spice.image}
                  alt={spice.name}
                  style={{
                    width: '300px',
                    height: '200px',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ color: '#8b4513', fontWeight: 'bold' }}>
                    {spice.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {spice.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="warning"
                    onClick={() => handleAddToCart(spice)}
                    sx={{ fontWeight: 'bold' }}
                  >
                    ADD TO CART
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Spices;
