const path = require('path');

module.exports = {
  // Style configuration
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },

  // TypeScript configuration
  typescript: {
    enableTypeChecking: true
  },

  // Webpack configuration
  webpack: {
    configure: (webpackConfig) => {
      // Add any custom webpack configurations here
      return webpackConfig;
    }
  },

  // DevServer configuration for development
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true
  },

  // Babel configuration
  babel: {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript'
    ],
    plugins: []
  },

  // Jest configuration for testing
  jest: {
    configure: {
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
    }
  }
};