import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
=======
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
>>>>>>> main
  );
};

export default App;