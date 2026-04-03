import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Root from './Components/Root.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Root},
      {path: 'home', Component: }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

  </StrictMode>,
)
