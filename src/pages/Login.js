import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!isEmailValid(loginData.email)) {
      return setError("Please enter a valid email address.");
    }

    if (!isPasswordValid(loginData.password)) {
      return setError("Password must be at least 6 characters, include uppercase, lowercase, and a special character.");
    }

    const storedData = JSON.parse(localStorage.getItem('signupData'));
    if (storedData?.email === loginData.email && storedData.password === loginData.password) {
      sessionStorage.setItem('user', JSON.stringify(storedData));
      alert("Login successful!");
      navigate('/');  
    } else {
      setError("Invalid email or password");
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
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Email" name="email"
              value={loginData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth label="Password" name="password" type="password"
              value={loginData.password}
              onChange={handleChange}
              margin="normal"
            />

            
            <Box textAlign="right" sx={{ mt: 1 }}>
              <Link
                component="button"
                variant="body2"
                underline="hover"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot password?
              </Link>
            </Box>

            {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

            <Button variant="contained" color="success" fullWidth type="submit" sx={{ mt: 2 }}>
              Login
            </Button>
          </Box>

          
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/signup')}
              underline="hover"
            >
              Sign up here
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
