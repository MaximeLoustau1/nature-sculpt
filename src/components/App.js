import '../styles/App.scss';
import About from './About.jsx';
import AboutUs from './AboutUs.jsx';
import Services from './Services.jsx';
import Process from './Process.jsx';
import Portfolio from './Portfolio.jsx';
import ContactForm from './Contact.jsx';
import Footer from './Footer.jsx';

import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('EN');

  return (
    <div>
      <About language={language} setLanguage={setLanguage} />
      <AboutUs language={language} />
      <Process language={language} />
      <Services language={language} />
      <Portfolio language={language} />
      <ContactForm language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
