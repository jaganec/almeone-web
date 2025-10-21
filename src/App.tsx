import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
const App: React.FC = () => {
  return (
    
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY as string}
      scriptProps={{ async: true, defer: true }}
    >
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default App;