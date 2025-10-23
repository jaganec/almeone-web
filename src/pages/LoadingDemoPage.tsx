import React, { useState } from 'react';
import LoadingSpinner, { 
  PageLoader, 
  FormLoader, 
  ButtonLoader, 
  InlineLoader, 
  useLoading 
} from '../components/LoadingSpinner';
import { useGlobalLoading } from '../contexts/LoadingContext';

const LoadingDemoPage: React.FC = () => {
  const [showPageLoader, setShowPageLoader] = useState(false);
  const { isLoading: formLoading, startLoading: startForm, stopLoading: stopForm } = useLoading();
  const { showPageLoader: showGlobalLoader, hidePageLoader: hideGlobalLoader } = useGlobalLoading();

  const handleFormSubmit = async () => {
    startForm();
    await new Promise(resolve => setTimeout(resolve, 3000));
    stopForm();
  };

  const handlePageLoader = () => {
    setShowPageLoader(true);
    setTimeout(() => setShowPageLoader(false), 3000);
  };

  const handleGlobalLoader = () => {
    showGlobalLoader('Processing your request...');
    setTimeout(() => hideGlobalLoader(), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-black">
            Loading <span className="text-gold">Components</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive loading states and spinners for all your application needs.
          </p>
        </div>

        {/* Basic Spinners Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Basic Spinners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Default Spinner */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-4 text-black">Default</h3>
              <LoadingSpinner size="large" variant="default" />
              <p className="text-sm text-gray-600 mt-4">Standard loading spinner</p>
            </div>

            {/* Gold Spinner */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-4 text-black">Gold</h3>
              <LoadingSpinner size="large" variant="gold" />
              <p className="text-sm text-gray-600 mt-4">Brand colored spinner</p>
            </div>

            {/* Dots Spinner */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-4 text-black">Dots</h3>
              <LoadingSpinner size="large" variant="dots" />
              <p className="text-sm text-gray-600 mt-4">Bouncing dots animation</p>
            </div>

            {/* Bars Spinner */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-4 text-black">Bars</h3>
              <LoadingSpinner size="large" variant="bars" />
              <p className="text-sm text-gray-600 mt-4">Animated bars</p>
            </div>
          </div>
        </section>

        {/* Sizes Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Different Sizes</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-around">
              <div className="text-center">
                <LoadingSpinner size="small" variant="gold" />
                <p className="text-sm text-gray-600 mt-2">Small</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="medium" variant="gold" />
                <p className="text-sm text-gray-600 mt-2">Medium</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="large" variant="gold" />
                <p className="text-sm text-gray-600 mt-2">Large</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="xl" variant="gold" />
                <p className="text-sm text-gray-600 mt-2">Extra Large</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Interactive Demos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Loading Demo */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-black">Form Submission</h3>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
                />
                <button
                  onClick={handleFormSubmit}
                  disabled={formLoading}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                    formLoading 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-gold text-black hover:bg-gold-dark'
                  }`}
                >
                  {formLoading ? (
                    <span className="flex items-center justify-center gap-3">
                      <ButtonLoader size="small" />
                      Submitting...
                    </span>
                  ) : (
                    'Submit Form'
                  )}
                </button>
                {formLoading && (
                  <div className="text-center mt-4">
                    <FormLoader text="Processing your submission..." />
                  </div>
                )}
              </div>
            </div>

            {/* Page Loader Demo */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-black">Page Transitions</h3>
              <div className="space-y-4">
                <button
                  onClick={handlePageLoader}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300"
                >
                  Show Local Page Loader
                </button>
                <button
                  onClick={handleGlobalLoader}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300"
                >
                  Show Global Page Loader
                </button>
                <p className="text-sm text-gray-600">
                  Test page loading states for navigation and data fetching
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inline Loading States */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Inline Loading States</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Fetching data...</span>
              <InlineLoader variant="default" text="" />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Processing payment...</span>
              <InlineLoader variant="gold" text="" />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Uploading files...</span>
              <LoadingSpinner size="small" variant="dots" />
            </div>
          </div>
        </section>

        {/* Dark Background Variants */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Dark Background Variants</h2>
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <LoadingSpinner size="large" variant="white" />
                <p className="text-white text-sm mt-4">White Spinner</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="large" variant="gold" text="Loading..." />
                <p className="text-white text-sm mt-4">Gold with Text</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="large" variant="dots" />
                <p className="text-white text-sm mt-4">Gold Dots</p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-black">Usage Examples</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm overflow-x-auto">
            <pre>{`// Basic usage
<LoadingSpinner size="medium" variant="gold" />

// With text
<LoadingSpinner size="large" variant="gold" text="Loading..." />

// Form submission
const { isLoading, startLoading, stopLoading } = useLoading();
{isLoading ? <ButtonLoader /> : 'Submit'}

// Page loader
import { PageLoader } from './LoadingSpinner';
{showLoader && <PageLoader text="Loading page..." />}

// Global loading context
const { showPageLoader, hidePageLoader } = useGlobalLoading();
showPageLoader('Processing...');`}</pre>
          </div>
        </section>
      </div>

      {/* Local page loader overlay */}
      {showPageLoader && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <LoadingSpinner size="xl" variant="gold" text="Loading demo page..." />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingDemoPage;