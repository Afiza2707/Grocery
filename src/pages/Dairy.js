import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Button, Snackbar, Alert } from '@mui/material';

const dairyProducts = [
  { id: 28, name: 'Milk', price: '₹50/litre', image: '/assets/images/diary/milk.jpg' },
  { id: 29, name: 'Curd', price: '₹40/500g', image: '/assets/images/diary/curd.jpg' },
  { id: 30, name: 'Butter', price: '₹90/100g', image: '/assets/images/diary/butter.jpg' },
  { id: 31, name: 'Paneer', price: '₹120/200g', image: '/assets/images/diary/paneer.jpg' },
  { id: 32, name: 'Cheese', price: '₹150/200g', image: '/assets/images/diary/cheese.jpg' },
  { id: 33, name: 'Ghee', price: '₹600/litre', image: '/assets/images/diary/ghee.jpg' },
  { id: 34, name: 'Yogurt', price: '₹30/200ml', image: '/assets/images/diary/yogurt.jpg' },
];

function Dairy() {
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
    <Box sx={{ backgroundColor: '#f3f4f6', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ textAlign: 'center', color: '#3e3f42', fontWeight: 'bold', mb: 4 }}>
          Dairy Products
        </Typography>
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {dairyProducts.map((product) => (
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
                  <Typography variant="h6" sx={{ color: '#3e3f42', fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {product.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
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

export default Dairy;
