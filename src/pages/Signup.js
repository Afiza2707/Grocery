import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.match(/^[A-Za-z ]{3,}$/)) newErrors.name = "Enter a valid name";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Enter a valid email";
    if (!formData.phone.match(/^[6-9]\d{9}$/)) newErrors.phone = "Enter a valid phone number";
    if (!formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/)) {
      newErrors.password = "Password must be at least 6 characters, include uppercase, lowercase, and special character";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('signupData', JSON.stringify(formData));
      alert("Signed up successfully!");
      navigate('/');
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
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Name" name="name"
              value={formData.name} onChange={handleChange}
              error={!!errors.name} helperText={errors.name}
              margin="normal"
            />
            <TextField
              fullWidth label="Email" name="email"
              value={formData.email} onChange={handleChange}
              error={!!errors.email} helperText={errors.email}
              margin="normal"
            />
            <TextField
              fullWidth label="Phone Number" name="phone"
              value={formData.phone} onChange={handleChange}
              error={!!errors.phone} helperText={errors.phone}
              margin="normal"
            />
            <TextField
              fullWidth label="Password" name="password" type="password"
              value={formData.password} onChange={handleChange}
              error={!!errors.password} helperText={errors.password}
              margin="normal"
            />
            <Button variant="contained" color="success" fullWidth type="submit" sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </Box>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link
              component="button"
              variant="body2"
              underline="hover"
              onClick={() => navigate('/login')}
            >
              Login here
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup;
