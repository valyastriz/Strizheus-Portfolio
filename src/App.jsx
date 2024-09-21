import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import './App.css'; // will decide later is I want to keep this or just use bootsrap

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* This will Include the Header which has my name and navigation */}
        <main className="container my-5">
          <Routes>
            <Route path="/" element={<AboutMe />} /> {/* Default route */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;