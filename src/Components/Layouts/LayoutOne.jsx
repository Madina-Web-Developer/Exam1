import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Mobile from '../Mobile nav/Mobile'

const LayoutOne = () => {
  return (
    <>
    <Mobile/>
    <Navbar/>
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default LayoutOne