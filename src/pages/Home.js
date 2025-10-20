import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Vegetables", image: "/assets/images/vegetables.jpg" },
  { name: "Fruits", image: "/assets/images/fruits.jpg" },
  { name: "Cereals & Pulses", image: "/assets/images/cereals.jpg" },
  { name: "Dairy Products", image: "/assets/images/dairy_products.jpg" },
  { name: "Spices", image: "/assets/images/spices.jpg" },
  { name: "Dry Fruits", image: "/assets/images/dryfruits.jpg" }
];


const formatPath = (name) =>
  `/${name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;

function Home() {
  return (
    <>
      
      <Box sx={{ backgroundColor: '#cce5cc', py: 6, textAlign: 'center' }}>
        <img
          src="/assets/images/farm2home.png"
          alt="Farm2Home Logo"
          style={{ width: '80px', height: '80px', marginBottom: '20px' }}
        />
        <Typography variant="h4" sx={{ color: '#006d3e', fontWeight: 'bold' }}>
          Fresh Groceries Delivered to Your Doorstep
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#003d1f' }}>
          Get fresh fruits, vegetables, and groceries at the best prices.
        </Typography>
      </Box>

      
      <Box sx={{ backgroundColor: '#eaf7e5', py: 6 }}>
        <Container>
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', color: '#006d3e', mb: 4, fontWeight: 'bold' }}
          >
            Category
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link
                  to={formatPath(category.name)}
                  style={{ textDecoration: 'none', width: '100%', maxWidth: 300 }}
                >
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: 2,
                      boxShadow: 3,
                      textAlign: 'center',
                      overflow: 'hidden',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.03)',
                      }
                    }}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                      }}
                    />
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" sx={{ color: '#006d3e', fontWeight: 'bold' }}>
                        {category.name}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      
      <Box sx={{ backgroundColor: '#f0fff0', py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ color: '#006d3e', fontWeight: 'bold', mb: 2 }}>
            About Farm2Home
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: '#444' }}>
            Farm2Home is committed to delivering fresh, organic groceries straight from local farms to your doorstep.
            We ensure quality and freshness while supporting sustainable agriculture.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/about"
            sx={{
              backgroundColor: '#006d3e',
              '&:hover': { backgroundColor: '#004d2a' }
            }}
          >
            Learn More
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Home;
