import React from 'react'
import './Footer.css'
import footerimg from '../../assets/Footer.png'
import { FaFacebookF, FaInstagram, FaYelp } from 'react-icons/fa'
import { SlSocialPintarest } from 'react-icons/sl'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    
    <div className="main_footer">
        <div className="container">
          <div className="main_footer_box">
            <div className="Footer_one">
              <div className="img"><img src={footerimg} alt="" /></div>
              <div className="footer_text">
                <h1>STAY IN TOUCH?</h1>
                <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                <button className=' animate-pulse'><Link to={'#'}>SUBSCRIBE</Link></button>
              </div>
            </div>
          </div>
          <div className="footer_nav">
            <div className="singlefooter">
              <h2>Product</h2>
              <div className="F_hum">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="singlefooter">
              <h2>Product</h2>
              <div className="F_hum">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="singlefooter">
              <h2>Product</h2>
              <div className="F_hum">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>FAQ</p>
              </div>
            </div>
          </div>
        </div>
          <hr className='mt-[35px]'/>
          <div className="container">
            <div className="footer_last_text">
              <p>© Blue Diamond Jewelry™  2021</p>
              <div className="Footer_icon">
                <button><Link to={'#'} ><FaFacebookF /></Link></button>
                <button><Link to={'#'}><FaInstagram /></Link></button>
                <button><Link to={'#'}><SlSocialPintarest /></Link></button>
                <button><Link to={'#'}><FaYelp /></Link></button>
              </div>
            </div>
          </div>
      </div>
    
    </>
  )
}

export default Footer