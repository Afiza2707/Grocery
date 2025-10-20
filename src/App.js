import React from 'react';
import { Box } from '@mui/material';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <AppRoutes />
    </Box>
  );
}

export default App;
