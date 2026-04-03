import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root.jsx'
import Home from './Components/Home.jsx'
import Mobiles from './Components/Mobiles.jsx'
import Laptops from './Components/Laptops.jsx'
import Blogs from './Components/Blogs.jsx'
import Users from './Components/Users.jsx'
import Users2 from './Components/Users2.jsx'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path: 'blogs', Component: Blogs},
      {
        path: 'users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<p>Loading....</p>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      }
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
