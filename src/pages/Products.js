import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const productList = [
  { id: 1, name: 'Apples', price: '₹120/kg', image: '/assets/images/fruits/apple.jpg' },
  { id: 2, name: 'Bananas', price: '₹40/dozen', image: '/assets/images/fruits/banana.jpg' },
  { id: 3, name: 'Carrots', price: '₹80/kg', image: '/assets/images/vegetables/carrot.jpg' },
  { id: 4, name: 'Tomatoes', price: '₹60/kg', image: '/assets/images/vegetables/tomato.jpg' },
  { id: 5, name: 'Milk', price: '₹50/litre', image: '/assets/images/diary/milk.jpg' },
  { id: 6, name: 'Ghee', price: '₹70/dozen', image: '/assets/images/diary/ghee.jpg' },
  { id: 7, name: 'Potatoes', price: '₹30/kg', image: '/assets/images/vegetables/potato.jpg' },
  { id: 8, name: 'Grapes', price: '₹100/kg', image: '/assets/images/fruits/grapes.jpg' },
  { id: 9, name: 'Onions', price: '₹40/kg', image: '/assets/images/vegetables/onion.jpg' },
  { id: 10, name: 'Almonds', price: '₹35', image: '/assets/images/dryfruits/almonds.jpg' },
  { id: 11, name: 'Paneer', price: '₹90/200g', image: '/assets/images/diary/paneer.jpg' },
  { id: 12, name: 'Beetroot', price: '₹70/kg', image: '/assets/images/vegetables/beetroot.jpg' },
  { id: 13, name: 'Basmati Rice', price: '₹110/kg', image: '/assets/images/cereals/basmati.jpg' },
  { id: 14, name: 'Toor Dal', price: '₹120/kg', image: '/assets/images/cereals/toor.jpg' },
  { id: 15, name: 'Spinach Bunch', price: '₹25/bunch', image: '/assets/images/vegetables/spinach.jpg' },
  { id: 16, name: 'Green Chilli', price: '₹45/kg', image: '/assets/images/vegetables/green chilli.jpg' },
  { id: 17, name: 'Cauliflower', price: '₹50/piece', image: '/assets/images/vegetables/cauliflower.jpg' },
  { id: 18, name: 'Oranges', price: '₹90/kg', image: '/assets/images/fruits/orange.jpg' },
  { id: 19, name: 'Watermelon', price: '₹150/box', image: '/assets/images/fruits/watermelon.jpg' },
  { id: 20, name: 'Apricots', price: '₹60/kg', image: '/assets/images/dryfruits/apricots.jpg' },
  { id: 21, name: 'Cashews', price: '₹900/kg', image: '/assets/images/dryfruits/cashews.jpg' },
];

function Products() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();

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

   
    navigate('/cart');
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', color: '#3e3f42', fontWeight: 'bold', mb: 4 }}
        >
          Our Products
        </Typography>

        <Grid container spacing={4} justifyContent="center" columns={12}>
          {productList.map((product) => (
            <Grid
              key={product.id}
              xs={12} sm={6} md={3}
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
                  <Typography variant="h6" sx={{ color: '#006d3e', fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {product.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
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
      </Container>
    </Box>
  );
}

export default Products;
