import React from 'react';
import Menu from './Menu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenidos a Amanogawa Clone
      </Typography>
      <Typography variant="body1">
        Explora varios applets sobre ondas electromagnéticas y más.
      </Typography>
      <Menu />
    </Container>
  );
};

export default Home;
