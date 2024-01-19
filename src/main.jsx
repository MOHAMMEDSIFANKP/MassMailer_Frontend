import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="329620575621-v54qd8b32lei37p5f5uh1tcjjbso07ak.apps.googleusercontent.com">
  <React.StrictMode>
    <ThemeProvider>
       <App />
    </ThemeProvider>
  </React.StrictMode>
  </GoogleOAuthProvider>,
)
