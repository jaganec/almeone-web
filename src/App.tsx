import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoadingDemoPage from './pages/LoadingDemoPage';
import { LoadingProvider } from './contexts/LoadingContext';

const App: React.FC = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY as string}
      scriptProps={{ async: true, defer: true }}
    >
      <LoadingProvider>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/loading-demo" element={<LoadingDemoPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LoadingProvider>
    </GoogleReCaptchaProvider>
  );
};

export default App;