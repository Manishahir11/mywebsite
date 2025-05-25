import React from 'react'
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'
import Home from './controllers/Home'
import Bca from './controllers/Bca'
import Hackathons from './controllers/Hackathons'
import Data from './controllers/Data'
import Hosting from './controllers/Hosting'
import Live from './controllers/Live'
import Nav from './Nav'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/bca",
      element:<Bca />,
    },
    {
      path: "/hackathons",
      element:<Hackathons />,
    },
    {
      path: "/data",
      element:<Data />,

    },
    {
      path: "/hosting",
      element:<Hosting/>,
      },
    {
      path: "/live",
      element:<Live />
    }


  ]);
 
  return (
    <>
     <Nav />
     <RouterProvider router={router} />
    </>
  )
}

export default App
