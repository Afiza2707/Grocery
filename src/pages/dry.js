import React, { useState, useEffect } from 'react';
import { Grid, Typography, Container, Box, Button, Snackbar, Alert } from '@mui/material';

const dryFruits = [
  { id: 44, name: 'Almonds', price: '₹800/kg', image: '/assets/images/dryfruits/almonds.jpg' },
  { id: 45, name: 'Cashews', price: '₹900/kg', image: '/assets/images/dryfruits/cashews.jpg' },
  { id: 46, name: 'Walnuts', price: '₹1200/kg', image: '/assets/images/dryfruits/walnuts.jpg' },
  { id: 47, name: 'Pistachios', price: '₹1000/kg', image: '/assets/images/dryfruits/pista.jpg' },
  { id: 48, name: 'Raisins', price: '₹400/kg', image: '/assets/images/dryfruits/raisins.jpg' },
  { id: 49, name: 'Dates', price: '₹350/kg', image: '/assets/images/dryfruits/dates.jpg' },
  { id: 50, name: 'Figs', price: '₹950/kg', image: '/assets/images/dryfruits/figs.jpg' },
  { id: 51, name: 'Apricots', price: '₹750/kg', image: '/assets/images/dryfruits/apricots.jpg' },
];

function Dry() {
  const [cart, setCart] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);  
  const [snackbarMessage, setSnackbarMessage] = useState('');

  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

 
  const handleAddToCart = (dryFruit) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === dryFruit.id);

    if (existingItemIndex > -1) {
      
      updatedCart[existingItemIndex].quantity += 1;
    } else {
     
      updatedCart.push({ ...dryFruit, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    
    setSnackbarMessage(`${dryFruit.name} added to cart!`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); 
  };

  return (
    <Box sx={{ backgroundColor: '#fff7e6', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', color: '#a85b00', fontWeight: 'bold', mb: 4 }}
        >
          Premium Dry Fruits
        </Typography>

        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {dryFruits.map((dryFruit) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={dryFruit.id}
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
                  src={dryFruit.image}
                  alt={dryFruit.name}
                  style={{
                    width: '300px',
                    height: '200px',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ color: '#a85b00', fontWeight: 'bold' }}>
                    {dryFruit.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {dryFruit.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="warning"
                    onClick={() => handleAddToCart(dryFruit)}
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
        open={openSnackbar}
        autoHideDuration={3000}  
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Dry;
