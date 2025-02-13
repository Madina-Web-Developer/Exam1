import React from 'react'
import './Latest.css'
import latest1 from '../../assets/Latest.png'
import latest2 from '../../assets/Latest1.png'
import latest3 from '../../assets/Latest2.png'
import { Link } from 'react-router-dom'

const Latest = () => {
  return (
   
    <div className="MainLatest">
    <div className="container">
        <div className="Latests_Items">
            <h2>OUR LATEST JEWELRY</h2>
            <div data-aos="fade-left"
            data-aos-duration="1000">

            <div className="LatestIMGS">
                <img src={latest2} alt="latest2" />
                <img src={latest3} alt="latest3" />
                <img src={latest1} alt="latest1" />
            </div>
            </div>
            <div className="ItemsButton">
            <Link to={'#'}>view gallery</Link>
            </div>
        </div>
    </div>
</div>    


  )
}

export default Latest