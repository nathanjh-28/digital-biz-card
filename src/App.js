import React from 'react';
import Heading from './components/Heading';
import Buttons from './components/Buttons';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
    return (
        <div className='card'>
            <Heading />
            <Buttons />
            <About />
            <Interests />
            <Footer />

        </div>)
}

export default App;
