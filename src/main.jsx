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
import UsersDetails from './Components/UsersDetails.jsx'
import Posts from './Components/Posts.jsx'
import PostDetail from './Components/PostDetail.jsx'

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
      },
      {
        path: 'users/:userId',
        loader: ({params})=> fetch(),
        Component: UsersDetails
      },
      {
        path: 'posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
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
