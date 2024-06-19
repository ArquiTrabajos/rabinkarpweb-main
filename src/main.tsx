import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import PaginaError from './pages/PaginaError.tsx'
import InformacionAlgoritmo from './pages/InformacionAlgoritmo.tsx'
import InicioAlgoritmo from './pages/InicioAlgoritmo.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaError />,
    children: [
      {
        path: "informacion",
        element: <InformacionAlgoritmo />
      },
      {
        path: "algoritmo",
        element: <InicioAlgoritmo />
      },
      {
        index: true,
        element: <Navigate to={"algoritmo"} replace />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
