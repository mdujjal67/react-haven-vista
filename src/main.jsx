import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes';
import AuthProvider from './pages/authProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster 
        position="top-right"
        reverseOrder={true}>
      </Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
