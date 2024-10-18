import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import Login from './Routes/Login.jsx'
import Cadastro from './Routes/Cadastro.jsx'
import Contexto from './context/Contexto.jsx'
const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Login/>
      }
      ,
      {
        path:"/cadastrar",
        element:<Cadastro/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Contexto>
   <RouterProvider router={route}/>
   </Contexto>
  </StrictMode>,
)
