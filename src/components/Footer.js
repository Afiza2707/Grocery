import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 2,
        mt: 'auto',
        textAlign: 'center',
        boxShadow: '0 -1px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Farm2Home. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
