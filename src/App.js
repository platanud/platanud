import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootswatch/dist/simplex/bootstrap.min.css';

// UI
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';

// Widgets
import WavePropagation from './components/widgets/WavePropagation';
import Polarization from './components/widgets/Polarization';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Routes>
                        <Route exact path="/" element={<Menu />} />
                        <Route exact path="/wavepropagation" element={<WavePropagation />} />
                        <Route exact path="/polarization" element={<Polarization />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

