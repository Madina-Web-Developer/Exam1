import React from 'react'
import { Link } from 'react-router'
import './OurService.css'
import s1 from '../../assets/S1.png'
import s2 from '../../assets/S2.png'
import s3 from '../../assets/S3.png'

const Ourservice = () => {
  return (
   
    <>    
    <section>

    <div className="MainService">
        <div className="container">
            <div className="Service_Items">
                <h2>Our Services</h2>

                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                   
                <div className="ServiceIMGS">
                   
                    <div className="SSI">
                        <img src={s1} alt="Service1" />
                        <h3>JEWELRY REPAIR</h3>
                    </div>
                  
                    <div className="SSI">
                        <img src={s2} alt="Service2" />
                        <h3>RING SIZING</h3>
                    </div>
                    
                    <div className="SSI">
                        <img src={s3} alt="Service3" />
                        <h3>JEWELRY POLISHING</h3>
                    </div>
                    
                </div>
                   
                   </div>
                <div className="ItemsButton"><Link to={'#'}>Learn More</Link></div>
            </div>
        </div>
    </div>  
    
    </section> 
    </>
  )
}

export default Ourservice