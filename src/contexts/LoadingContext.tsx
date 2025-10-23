import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PageLoader } from '../components/LoadingSpinner';

// TypeScript interfaces
interface LoadingContextType {
  isLoading: boolean;
  loadingText: string;
  setLoading: (loading: boolean, text?: string) => void;
  showPageLoader: (text?: string) => void;
  hidePageLoader: () => void;
}

interface LoadingProviderProps {
  children: ReactNode;
}

// Create the context
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Loading Provider component
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading...');

  const setLoading = (loading: boolean, text: string = 'Loading...') => {
    setIsLoading(loading);
    setLoadingText(text);
  };

  const showPageLoader = (text: string = 'Loading...') => {
    setLoading(true, text);
  };

  const hidePageLoader = () => {
    setLoading(false);
  };

  const value: LoadingContextType = {
    isLoading,
    loadingText,
    setLoading,
    showPageLoader,
    hidePageLoader
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && <PageLoader text={loadingText} />}
    </LoadingContext.Provider>
  );
};

// Custom hook to use loading context
export const useGlobalLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useGlobalLoading must be used within a LoadingProvider');
  }
  return context;
};

// HOC for pages with loading states
export const withLoading = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const { showPageLoader, hidePageLoader } = useGlobalLoading();

    React.useEffect(() => {
      showPageLoader();
      const timer = setTimeout(() => {
        hidePageLoader();
      }, 1000); // Simulate loading time

      return () => {
        clearTimeout(timer);
        hidePageLoader();
      };
    }, [showPageLoader, hidePageLoader]);

    return <Component {...props} />;
  };
};

export default LoadingContext;