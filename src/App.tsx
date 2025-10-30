import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WarehousePage from './pages/WarehousePage';
import LoadingDemoPage from './pages/LoadingDemoPage';
import { LoadingProvider } from './contexts/LoadingContext';

// Suppress known safe warnings from dependencies
const originalWarn = console.warn;
console.warn = (...args) => {
  const message = args[0];
  if (
    typeof message === 'string' && 
    message.includes('UNSAFE_componentWillMount') &&
    message.includes('strict mode')
  ) {
    // Suppress ReCaptcha strict mode warnings - known safe dependency warning
    return;
  }
  originalWarn.apply(console, args);
};

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Small delay to ensure the route change is complete
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return null;
};

const App: React.FC = () => {
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  
  const AppContent = () => (
    <LoadingProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <main className="pt-16 sm:pt-20 md:pt-24">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/warehouse" element={<WarehousePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/loading-demo" element={<LoadingDemoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LoadingProvider>
  );

  // Only use ReCaptcha in production or when explicitly configured
  const shouldUseRecaptcha = recaptchaKey && process.env.NODE_ENV === 'production';
  
  return shouldUseRecaptcha ? (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey}
      scriptProps={{ 
        async: true, 
        defer: true
      }}
    >
      <AppContent />
    </GoogleReCaptchaProvider>
  ) : (
    <AppContent />
  );
};

export default App;