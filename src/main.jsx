import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import CountryDetails from './Pages/CountryDetails'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage'
import Layout from './components/Layout'
import { ThemeProvider } from './ThemeContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/country/:name',
    element: (
      <Layout>
        <CountryDetails />
      </Layout>
    ),
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
