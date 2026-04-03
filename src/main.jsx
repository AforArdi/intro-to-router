import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root.jsx'
import Home from './Components/Home.jsx'
import Mobiles from './Components/Mobiles.jsx'
import Laptops from './Components/Laptops.jsx'
import Blogs from './Components/Blogs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path: 'blogs', Component: Blogs}
    ]
  },
  {
    path: '/',
    element: <div>Welcome from main.jsx</div>
  },
  {
    path: 'about',
    element: <div>This is about section</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
