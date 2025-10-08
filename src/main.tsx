import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import { createBrowserRouter} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Contact from './Components/Component/Component'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
       path : "",
       element: <Home/>
      },
      {
        path : "About",
        element: <About/>,
      },
      {
        path : "contact",
        element: <Contact/>,
      }
    ]
  }] 

);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)
