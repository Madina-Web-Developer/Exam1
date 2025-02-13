import React from 'react'
import './Shop.css'
import Item1 from '../../assets/Item1.png'
import Item2 from '../../assets/Item2.png'
import Item3 from '../../assets/Item3.png'
import Item4 from '../../assets/Item4.png'
import Item5 from '../../assets/Item5.png'

const Shop = () => {
  return (
    <>
    <section>
       <div className="container">
       <div className="all_shop">

       <div className="head_s">
       <div data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
       <h1>Shop by Jewelry Type</h1>
       </div>
      
     
                
            </div>

            <div data-aos="fade-left"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="500">
            <div className="images_all">

            <div className="image">
            <img src={Item1} alt="item" />
            <h2>EARRINGS</h2>
            </div>

            <div className="image">
            <img src={Item2} alt="item" />
            <h2>NECKLACES</h2>
            </div>


            <div className="image">
            <img src={Item3} alt="item" />
            <h2>BRACELATES</h2>
            </div>


            <div className="image">
            <img src={Item4} alt="item" />
            <h2>ALL RINGS</h2>
            </div>

            <div className="image">
            <img src={Item5} alt="item" />
            <h2>ENGAGEMENT RINGS</h2>
            </div>


            </div>

            </div>


            </div>
       </div>
    </section>
    </>
  )
}

export default Shop