import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './Pages/About'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import MainLayout from './Layouts/MainLayout'
import MainPage from './Pages/MainPage'
let x= createBrowserRouter([
  {path:'',element:<MainLayout/>,children:[
    {index:true,element:<MainPage/>},
    {path:'about',element:<About/>},
    {path:'profile',element:<Profile/>},
    {path:'contact',element:<Contact/>},
  ]}
])
function App() {
  return (
    <>
      <RouterProvider router={x}/>
    </>
  )
}

export default App
