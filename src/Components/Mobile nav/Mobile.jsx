import React, { useState } from 'react'
import './Mobile.css'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Logo from '../../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router'

const Mobile = () => {

const [show, setshow] = useState(false)


  return (
    <nav>

        <div className="mobile md:hidden ">
            <div className="container">
                <div className="all_mobile">

                    <div className="icon relative">
                    <FaBars onClick={()=>setshow(!show)} className='bar' />

                    {
                        show?
                    <div className="m_list">
                     <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>Shop</Link></li>
                            <li><Link>Services</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                     </div>

                     :

                     ''

                    }

                    </div>


                    <div className="mobile_logo">
                     <img src={Logo} alt="Mobile logo" />
                    </div>

                    <div className="bag">
                    <HiOutlineShoppingBag  className='mobile_icon' />
                    </div>

                </div>
            </div>
        </div>

    </nav>
  )
}

export default Mobile