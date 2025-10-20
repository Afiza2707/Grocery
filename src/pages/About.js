import { Container, Typography, Box, Grid, Divider } from '@mui/material';

function About() {
  return (
    <Box sx={{ backgroundColor: '#f0f9f0', py: 8, minHeight: '100vh' }}>
      <Container>
        
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            color: '#006d3e',
            fontWeight: 'bold',
            mb: 2,
            letterSpacing: 2,
          }}
        >
          About Farm2Home
        </Typography>

        
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: '#4caf50',
            fontStyle: 'italic',
            mb: 6,
          }}
        >
          "Fresh and Fine. Right on time!!"
        </Typography>

        
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column', md: 'row' }}
        >
          
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src="/assets/images/farm2home.png"
              alt="Farm2Home Logo"
              sx={{
                width: '100%',
                maxWidth: '450px',
                display: 'block',
                mx: 'auto',
                borderRadius: 3,
                boxShadow: 4,
                p: 1,
                backgroundColor: 'white',
              }}
            />
          </Grid>

          
          <Grid item xs={12} md={7}>
            <Box sx={{ px: { md: 4 } }}>
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 'bold', mb: 2 }}>
                Freshness Delivered to Your Doorstep
              </Typography>
              <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', mb: 3 }}>
                Farm2Home is a modern grocery delivery platform connecting farms directly with consumers.
                Our mission is simple — bring fresh, organic, and affordable produce to your home while empowering local farmers.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold', mb: 2 }}>
                Why Choose Us?
              </Typography>
              <Typography variant="body1" sx={{ color: '#444', fontSize: '1rem', mb: 2 }}>
                ✅ Sourced directly from trusted farmers<br />
                ✅ Freshness guaranteed with every order<br />
                ✅ Promote sustainable farming practices<br />
                ✅ Safe, hygienic, and fast delivery
              </Typography>
            </Box>
          </Grid>
        </Grid>

       
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ color: '#006d3e', fontWeight: 'bold', mb: 3 }}>
            Our Vision
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', maxWidth: 800, mx: 'auto', fontSize: '1.1rem' }}>
            We envision a world where healthy eating is accessible to everyone.
            By shortening the distance between farms and homes, we support fair trade, sustainability, and a greener tomorrow.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
