import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';  // Importa el componente Navbar
import Footer from './components/Footer';  // Importa el componente Footer
import Home from './components/Home';  // Importa el componente Home
import ElectromagneticWaves from './components/ElectromagneticWaves';  // Importa el componente ElectromagneticWaves
import { Button, Box } from '@mui/material';  // Importa los componentes Button y Box de Material-UI

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />  {/* Componente de la barra de navegación principal */}
        <Box sx={{ backgroundColor: '#0b58a5', padding: '0.5rem'}}>
         <Button 
           variant="contained" 
           sx={{ 
             backgroundColor: 'inherit', 
             border: '4px solid #0b55a0', 
             '&:hover': { 
               backgroundColor: '#56b6ee', 
               border: '4px solid #4ea9dd'  // Cambia el borde al pasar el ratón
             } 
           }} 
           component={Link} 
           to="/"
         >
           HOGAR
          </Button>
          <Button 
           variant="contained" 
           sx={{ 
             backgroundColor: 'inherit', 
             border: '4px solid #0b55a0', 
             '&:hover': { 
               backgroundColor: '#56b6ee', 
               border: '4px solid #4ea9dd'  // Cambia el borde al pasar el ratón
             } 
           }} 
           component={Link} 
           to="/"
         >
           BROWSER REQUIREMENTS
          </Button>
          <Button 
           variant="contained" 
           sx={{ 
             backgroundColor: 'inherit', 
             border: '4px solid #0b55a0', 
             '&:hover': { 
               backgroundColor: '#56b6ee', 
               border: '4px solid #4ea9dd'  // Cambia el borde al pasar el ratón
             } 
           }} 
           component={Link} 
           to="/"
         >
           PRODUCTS
          </Button>
          <Button 
           variant="contained" 
           sx={{ 
             backgroundColor: 'inherit', 
             border: '4px solid #0b55a0', 
             '&:hover': { 
               backgroundColor: '#56b6ee', 
               border: '4px solid #4ea9dd'  // Cambia el borde al pasar el ratón
             } 
           }} 
           component={Link} 
           to="/"
         >
           PARTINERS
          </Button>  
          <Button 
           variant="contained" 
           sx={{ 
             backgroundColor: 'inherit', 
             border: '4px solid #0b55a0', 
             '&:hover': { 
               backgroundColor: '#56b6ee', 
               border: '4px solid #4ea9dd'  // Cambia el borde al pasar el ratón
             } 
           }} 
           component={Link} 
           to="/"
         >
           CONTACT US
          </Button>
        </Box>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />  {/* Ruta para la página principal */}
            <Route path="/electromagnetic-waves" element={<ElectromagneticWaves />} />  {/* Ruta para la página de ondas electromagnéticas */}
            {/* Añade las rutas adicionales aquí */}
          </Routes>
        </div>
        <Footer />  {/* Componente de pie de página */}
      </div>
    </Router>
  );
};

export default App;
