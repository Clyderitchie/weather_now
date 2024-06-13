import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/homeAndError/homePage';
import ErrorPage from './pages/homeAndError/errorPage';
import Results from './pages/results/results';

import './app.css';

const handleSearch = (city) => {
  console.log("Searching for:", city);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App onSearch={handleSearch} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/search',
        element: <Results />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);