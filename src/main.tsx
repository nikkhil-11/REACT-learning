import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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
  </StrictMode>,
)
