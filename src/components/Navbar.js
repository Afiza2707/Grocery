import { AppBar, Toolbar, Typography, IconButton, Box, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import StorefrontIcon from '@mui/icons-material/Storefront';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#006d3e' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Farm2Home
        </Typography>
        <Box>
          <Tooltip title="Home">
            <IconButton component={Link} to="/" sx={{ color: 'white' }}>
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Products">
            <IconButton component={Link} to="/products" sx={{ color: 'white' }}>
              <StorefrontIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
            <IconButton component={Link} to="/cart" sx={{ color: 'white' }}>
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="About">
            <IconButton component={Link} to="/about" sx={{ color: 'white' }}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Login">
            <IconButton component={Link} to="/login" sx={{ color: 'white' }}>
              <LoginIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
