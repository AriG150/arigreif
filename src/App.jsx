import React from 'react';
import './App.css';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
