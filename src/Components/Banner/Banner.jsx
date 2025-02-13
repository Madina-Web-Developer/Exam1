import React from 'react'
import './Banner.css'
import Bannerimg from '../../assets/Banner.png'

const Banner = () => {
  return (
   <section>
    <div className="all_banner">
        <img className='banner_img' src={Bannerimg} alt="bannerimg" />
    </div>
   </section>
  )
}

export default Banner