import React from 'react'
import './Review.css'
import riview from '../../assets/R.png'

const Review = () => {
  return (
    <>
    <section>
        <div className="all_main">
            <div className="container">

                <div className="riview">
                    <div className="head">
                        <h1>Customer reviews</h1>
                    </div>

                    <div data-aos="fade-up"
                    data-aos-duration="1000"
                   data-aos-anchor-placement="bottom-bottom">

                    
                    <div className="RIVIEWS">

                        <div className="S_riview">
                         <img src={riview} alt="" />
                            <p><i>Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.</i></p>
                            <h3><i> - Nico Jones</i></h3>
                        </div>


                        <div className="S_riview">
                         <img src={riview} alt="" />
                            <p><i>Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.</i></p>
                            <h3><i> - Nico Jones</i></h3>
                        </div>


                        <div className="S_riview">
                         <img src={riview} alt="" />
                            <p><i>Great quality, and showed they can work through a problem and maintain excellent customer service!!</i></p>
                            <h3><i> - Susana Santos</i></h3>
                        </div>

                    </div>
                    
                    </div>


                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Review