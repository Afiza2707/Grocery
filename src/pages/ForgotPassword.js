import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!isEmailValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const storedData = JSON.parse(localStorage.getItem('signupData'));
    if (storedData && storedData.email === email) {
      setMessage("A password reset link has been sent to your email (mock).");
    } else {
      setError("Email not found. Please sign up.");
    }
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
     
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/assets/images/login_background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, py: 10 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3, backgroundColor: '#fff' }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Forgot Password
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
            {message && <Typography color="success.main" sx={{ mt: 1 }}>{message}</Typography>}
            <Button variant="contained" color="success" fullWidth type="submit" sx={{ mt: 2 }}>
              Send Verification
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default ForgotPassword;
