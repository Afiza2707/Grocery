import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Button, Snackbar, Alert } from '@mui/material';

const cereals = [
  { id: 19, name: 'Basmati Rice', price: '₹120/kg', image: '/assets/images/cereals/basmati.jpg' },
  { id: 20, name: 'Toor Dal', price: '₹110/kg', image: '/assets/images/cereals/toor.jpg' },
  { id: 21, name: 'Wheat', price: '₹40/kg', image: '/assets/images/cereals/wheat.jpg' },
  { id: 22, name: 'Moong Dal', price: '₹130/kg', image: '/assets/images/cereals/moong.jpg' },
  { id: 23, name: 'Brown Rice', price: '₹95/kg', image: '/assets/images/cereals/brown-rice.jpg' },
  { id: 24, name: 'Chana Dal', price: '₹85/kg', image: '/assets/images/cereals/chana.jpg' },
  { id: 25, name: 'Quinoa', price: '₹240/kg', image: '/assets/images/cereals/quinoa.jpg' },
  { id: 26, name: 'Urad Dal', price: '₹120/kg', image: '/assets/images/cereals/urad.jpg' },
  { id: 27, name: 'Black Channa', price: '₹80/kg', image: '/assets/images/cereals/black-channa.jpg' },
];

function Cereals() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const newItem = { ...product, quantity: 1 };
      updatedCart = [...cart, newItem];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    setSnackbarMessage(`${product.name} added to cart!`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f2e9', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ textAlign: 'center', color: '#8b4513', fontWeight: 'bold', mb: 4 }}>
          Cereals & Pulses
        </Typography>
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {cereals.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                  src={product.image}
                  alt={product.name}
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
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {product.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="warning"
                    onClick={() => handleAddToCart(product)}
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

export default Cereals;
