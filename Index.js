import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages/components here
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

function App() {
    return (
        <Router>
            <Routes>
                {/* Define your routes here */}
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="*" element={<div>..</div>} />
            </Routes>
        </Router>
    );
}

export default App;