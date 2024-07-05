import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Container className="menu-container" style={{ marginTop: '2rem' }}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="flex-in" 
        sx={{ gap: '1rem', marginRight: '2rem' }}  // Alinea a la derecha y agrega margen
      >
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#8d44ec', 
            border: '4px solid #7d3ecf', 
            '&:hover': { 
              backgroundColor: '#7d3ecf', 
              border: '4px solid #6130a1'  // Cambia el borde al pasar el ratón
            } 
          }} 
          component={Link} 
          to="/circuits"
        >
          Circuits
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#56b6ee', 
            border: '4px solid #4ea9dd', 
            '&:hover': { 
              backgroundColor: '#4ea9dd', 
              border: '4px solid #5298c0'  // Cambia el borde al pasar el ratón
            } 
          }} 
          component={Link} 
          to="/transmission-lines"
        >
          Transmission Lines
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#f822f8', 
            border: '4px solid #ec1eec', 
            '&:hover': { 
              backgroundColor: '#ec1eec', 
              border: '4px solid #df1ddf'  // Cambia el borde al pasar el ratón
            } 
          }} 
          component={Link} 
          to="/electromagnetic-waves"
        >
          Electromagnetic Waves
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#f72d2d', 
            border: '4px solid #e62b2b', 
            '&:hover': { 
              backgroundColor: '#e62b2b', 
              border: '4px solid #d12626'  // Cambia el borde al pasar el ratón
            } 
          }} 
          component={Link} 
          to="/linear-antennas"
        >
          Linear Antennas
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#ff7321', 
            border: '4px solid #fa7a25', 
            '&:hover': { 
              backgroundColor: '#fa7a25', 
              border: '4px solid #ec6d19'  // Cambia el borde al pasar el ratón
            } 
          }} 
          component={Link} 
          to="/signal-integrity"
        >
          Signal Integrity
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#12b636', 
            border: '4px solid #14ad35', 
            '&:hover': { 
              backgroundColor: '#14ad35', 
              border: '4px solid #149b31'  // Cambia el borde al pasar el ratón
            } 
          }} 
          component={Link} 
          to="/emc-emi"
        >
          EMC / EMI
        </Button>
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            color: 'black', 
            fontWeight: 'bold', 
            textShadow: '1px 1px 0px #ff0000, -1px -1px 0px #ff0000, -1px 1px 0px #ff0000, 1px -1px 0px #ff0000'
          }}
        >
          digital Maestro™  {/* Título del menú */}
        </Typography>
        <Typography 
          variant="subtitle1" 
          gutterBottom 
          sx={{ 
            color: 'black', 
            fontWeight: 'bold', 
            textShadow: '1px 1px 0px #ff0000, -1px -1px 0px #ff0000, -1px 1px 0px #ff0000, 1px -1px 0px #ff0000'
          }}
        >
          the power of Java™ for education  {/* Subtítulo del menú */}
        </Typography>
      </Box>
    </Container>
  );
};

export default Menu;
