import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav>
        <div className="main_nav hidden md:block">
            <div className="container">

                <div className="nav">

                    <div className="logo">
                        <img src={Logo} alt="navlogo" />
                    </div>

                    <div className="list flex justify-between items-center">
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>Shop</Link></li>
                            <li><Link>Services</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                     
                        <HiOutlineShoppingBag  className='nav_icon' />

                    </div>

                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar