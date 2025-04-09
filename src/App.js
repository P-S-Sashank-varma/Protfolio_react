import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import ContactForm from './pages/ContactForm';
import Footer from './pages/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;
