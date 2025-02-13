import React from 'react'
import './Hand.css'
import handi from '../../assets/Handi.png'
import { Link } from 'react-router'

const Hand = () => {
  return (
    <>
    
    <div className="MainHand">
                <div className="HandRow">
                    <div className="HandTexts">
                        <h2>Hand Crafted  fine pieces.</h2>
                        <p>We also firmly believed that our customers  deserved more choices, straightforward  information and legendary service.</p>
                        <Link to={'#'}>Learn More</Link>
                    </div>
                    <img src={handi} alt="hand" />
                </div>
        </div>
    
    
    
    </>
  )
}

export default Hand