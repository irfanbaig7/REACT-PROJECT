import React, { useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeProviderBaby } from './context/ThemeProviderBaby'
export default function App() {

  // here is actual code for change the background screen color changing
  // useEffect(() => {
  //   
  // }, [])
  



  return (
    <ThemeProviderBaby>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={<About /> } />
          <Route path='/blog' element={<Blog /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProviderBaby>
  )
}
