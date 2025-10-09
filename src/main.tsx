import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import Layout from './Layout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Walking from './Components/home/Walking'
import Boots from './Components/home/Boots'


const router = createBrowserRouter([
  { path: '/', 
    element: <Layout />,
    children: [
      {
       path: '/',
        element: <Walking/> 
      },{
        path: '/boots',
        element: <Boots/>
      }
    ] 
  },
]
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
=======
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
>>>>>>> 553a4241d847908d59a84836e0ef380ec25c02ca
  </StrictMode>,
)
