import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root.jsx';
import Toodo from './Pages/Toodo.jsx';
import ShowPostDet from './Pages/ShowPostDet.jsx';
import NotFound from './Components/NotFound.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,children:[

      {
         path:'/',
        element:<App></App>
      },

      {
         path:'/post/:id',
         loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<ShowPostDet></ShowPostDet>
      },
      {
         path:'/todos',
        element:<Toodo></Toodo>
      },


    
    ]
  },

  {
    path:'*',
    element:<NotFound></NotFound>
  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
