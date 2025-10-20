import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Radio, RadioGroup, FormControlLabel, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleShippingDetailChange = (event) => {
    const { name, value } = event.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleOrderPlacement = () => {
    if (paymentMethod === 'card') {
      if (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv) {
        alert('Please fill out the card details.');
        return;
      }
    }
    if (!shippingDetails.name || !shippingDetails.address || !shippingDetails.city || !shippingDetails.postalCode) {
      alert('Please fill out the shipping details.');
      return;
    }
    setOrderPlaced(true);
    localStorage.removeItem('cart'); 
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
      }}
    >
      <Box 
        sx={{
          backgroundColor: '#ffffff',
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          width: { xs: '100%', sm: '80%', md: '60%' },
          maxWidth: 700,
        }}
      >
        {!orderPlaced ? (
          <>
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#006d3e', fontWeight: 'bold', mb: 4 }}>
              Checkout
            </Typography>

            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Product Summary
              </Typography>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <Typography variant="body1" key={item.id}>
                    {item.name} x {item.quantity} - {item.price}
                  </Typography>
                ))
              ) : (
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  Your cart is empty.
                </Typography>
              )}
            </Box>

            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Shipping Details
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={shippingDetails.name}
                onChange={handleShippingDetailChange}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                name="address"
                value={shippingDetails.address}
                onChange={handleShippingDetailChange}
                sx={{ mb: 2 }}
              />
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                name="city"
                value={shippingDetails.city}
                onChange={handleShippingDetailChange}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Postal Code"
                variant="outlined"
                fullWidth
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={handleShippingDetailChange}
                sx={{ mb: 2 }}
              />
            </Box>

            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Select Payment Method
              </Typography>
              <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange} row>
                <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
                <FormControlLabel value="card" control={<Radio />} label="Pay by Card" />
              </RadioGroup>
            </Box>

            
            {paymentMethod === 'card' && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Enter Card Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Card Number"
                      variant="outlined"
                      fullWidth
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleCardDetailChange}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Expiry Date (MM/YY)"
                      variant="outlined"
                      fullWidth
                      name="expiryDate"
                      value={cardDetails.expiryDate}
                      onChange={handleCardDetailChange}
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="CVV"
                      variant="outlined"
                      fullWidth
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardDetailChange}
                      type="password"
                    />
                  </Grid>
                </Grid>
              </Box>
            )}

           
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Order Summary
              </Typography>
              <Typography variant="body1">
                Total Amount: ₹{totalPrice}
              </Typography>
              <Typography variant="body1">
                Payment Method: {paymentMethod === 'cash' ? 'Cash on Delivery' : 'By Card'}
              </Typography>
            </Box>

            
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" color="primary" onClick={handleOrderPlacement}>
                Place Order
              </Button>
            </Box>
          </>
        ) : (
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: 'green', fontWeight: 'bold', mb: 2 }}>
              Your order has been placed successfully!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Thank you for shopping with us. You will receive a confirmation email shortly with the order details.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/')}
              sx={{ fontWeight: 'bold' }}
            >
              Go to Home
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Checkout;
