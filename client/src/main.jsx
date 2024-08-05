import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import "./App.css";
import router from './routes/router.jsx';
import ContextProvider from './Context/ContextProvider.jsx';
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
