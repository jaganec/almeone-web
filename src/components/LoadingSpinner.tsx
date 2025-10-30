import React from 'react';

// TypeScript interfaces for Loading Spinner
interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  variant?: 'default' | 'gold' | 'white' | 'black' | 'dots' | 'pulse' | 'bars';
  className?: string;
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  variant = 'default',
  className = '',
  text,
  fullScreen = false,
  overlay = false
}) => {
  // Size classes
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // Text size classes
  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xl: 'text-xl'
  };

  // Spinner components for different variants
  const SpinnerVariants = {
    default: () => (
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-gold rounded-full animate-spin`} />
    ),
    
    gold: () => (
      <div className={`${sizeClasses[size]} border-4 border-gold/20 border-t-gold rounded-full animate-spin`} />
    ),
    
    white: () => (
      <div className={`${sizeClasses[size]} border-4 border-white/20 border-t-white rounded-full animate-spin`} />
    ),
    
    black: () => (
      <div className={`${sizeClasses[size]} border-4 border-gray-800/20 border-t-black rounded-full animate-spin`} />
    ),
    
    dots: () => (
      <div className="flex space-x-1">
        <div className={`${size === 'small' ? 'w-2 h-2' : size === 'medium' ? 'w-3 h-3' : size === 'large' ? 'w-4 h-4' : 'w-5 h-5'} bg-gold rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
        <div className={`${size === 'small' ? 'w-2 h-2' : size === 'medium' ? 'w-3 h-3' : size === 'large' ? 'w-4 h-4' : 'w-5 h-5'} bg-gold rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
        <div className={`${size === 'small' ? 'w-2 h-2' : size === 'medium' ? 'w-3 h-3' : size === 'large' ? 'w-4 h-4' : 'w-5 h-5'} bg-gold rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
      </div>
    ),
    
    pulse: () => (
      <div className={`${sizeClasses[size]} bg-gold rounded-full animate-pulse`} />
    ),
    
    bars: () => (
      <div className="flex space-x-1">
        <div className={`${size === 'small' ? 'w-1 h-4' : size === 'medium' ? 'w-2 h-6' : size === 'large' ? 'w-3 h-8' : 'w-4 h-10'} bg-gold animate-loading-bar`} style={{ animationDelay: '0ms' }} />
        <div className={`${size === 'small' ? 'w-1 h-4' : size === 'medium' ? 'w-2 h-6' : size === 'large' ? 'w-3 h-8' : 'w-4 h-10'} bg-gold animate-loading-bar`} style={{ animationDelay: '100ms' }} />
        <div className={`${size === 'small' ? 'w-1 h-4' : size === 'medium' ? 'w-2 h-6' : size === 'large' ? 'w-3 h-8' : 'w-4 h-10'} bg-gold animate-loading-bar`} style={{ animationDelay: '200ms' }} />
        <div className={`${size === 'small' ? 'w-1 h-4' : size === 'medium' ? 'w-2 h-6' : size === 'large' ? 'w-3 h-8' : 'w-4 h-10'} bg-gold animate-loading-bar`} style={{ animationDelay: '300ms' }} />
      </div>
    )
  };

  const SpinnerComponent = SpinnerVariants[variant];

  // Container classes
  const containerClasses = `
    flex flex-col items-center justify-center
    ${fullScreen ? 'fixed inset-0 z-50' : ''}
    ${overlay ? 'bg-black/50 backdrop-blur-sm' : ''}
    ${className}
  `;

  return (
    <div className={containerClasses}>
      <SpinnerComponent />
      {text && (
        <p className={`mt-3 text-center font-medium ${textSizeClasses[size]} ${
          variant === 'white' ? 'text-white' : 
          variant === 'black' ? 'text-black' : 
          'text-gray-600'
        }`}>
          {text}
        </p>
      )}
    </div>
  );
};

// Specialized Loading Components
export const PageLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <LoadingSpinner
    size="large"
    variant="gold"
    text={text}
    fullScreen
    overlay
  />
);

export const FormLoader: React.FC<{ text?: string }> = ({ text = 'Submitting...' }) => (
  <LoadingSpinner
    size="medium"
    variant="gold"
    text={text}
  />
);

export const ButtonLoader: React.FC<{ size?: 'small' | 'medium' }> = ({ size = 'small' }) => (
  <LoadingSpinner
    size={size}
    variant="white"
    className="inline-flex"
  />
);

export const InlineLoader: React.FC<{ text?: string; variant?: LoadingSpinnerProps['variant'] }> = ({ 
  text = 'Loading...', 
  variant = 'default' 
}) => (
  <LoadingSpinner
    size="small"
    variant={variant}
    text={text}
    className="inline-flex"
  />
);

// Hook for managing loading states
export const useLoading = (initialState: boolean = false) => {
  const [isLoading, setIsLoading] = React.useState(initialState);

  const startLoading = React.useCallback(() => setIsLoading(true), []);
  const stopLoading = React.useCallback(() => setIsLoading(false), []);
  const toggleLoading = React.useCallback(() => setIsLoading(prev => !prev), []);

  return {
    isLoading,
    startLoading,
    stopLoading,
    toggleLoading,
    setIsLoading
  };
};

export default LoadingSpinner;