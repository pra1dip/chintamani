import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ContactUs from '../Pages/ContactUs'
import Gallery from '../Pages/Gallery'
import Franchies from '../Pages/Franchies'
import NavBar from '../Components/NavBar'
const MainRoutes = () => {
  return (
    <>
    <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/franchies' element={<Franchies/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
       </Routes>
    </>
  )
}

export default MainRoutes