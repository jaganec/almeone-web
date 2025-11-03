# AlmeOne Website

Official website for AlmeOne - AI-driven solutions and warehouse automation from Qatar.

## 🚀 Quick Start

### Development with API

**Option 1: Full Development (Recommended)**
```bash
npm install
npm run dev:full
```

**Option 2: Manual Setup**
```bash
# Terminal 1: Start API server
npm run dev:api

# Terminal 2: Start React app  
npm start
```

This starts both the React app (port 3000) and development API server (port 7071).

### React App Only

```bash
npm install
npm start
```

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 📧 API Configuration

### Development API
The development server (`dev-server.js`) provides a mock API for testing contact forms locally.

### Production API (Azure Functions)
1. **Install API dependencies:**
   ```bash
   cd api
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp api/.env.example api/.env
   # Edit .env with your SMTP and reCAPTCHA credentials
   ```

3. **Deploy to Azure:**
   - Set environment variables in Azure Function App settings
   - Deploy the `/api` folder as an Azure Functions app

### Environment Variables
- `SMTP_HOST` - Email server host (e.g., smtp.gmail.com)
- `SMTP_USER` - Email username
- `SMTP_PASS` - Email password or app password
- `RECAPTCHA_SECRET_KEY` - Google reCAPTCHA secret key

## 🎯 Features

- ✅ **Mobile-responsive design** with Tailwind CSS
- ✅ **AI-powered carousel** with floating logo animations
- ✅ **Professional contact forms** with validation
- ✅ **Email notifications** via Azure Functions
- ✅ **Google reCAPTCHA v3** integration
- ✅ **SEO optimized** with structured data
- ✅ **Multi-language support** (Arabic etymology)
- ✅ **Qatar-based branding** with global reach

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
