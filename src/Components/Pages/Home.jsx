import React from 'react'
import Banner from '../Banner/Banner'
import Shop from '../Shop/Shop'
import Review from '../Review/Review'
import Latest from '../Latest/Latest'
import Ourservice from '../OurServices/Ourservice'
import Hand from '../Hand/Hand'

const Home = () => {
  return (
    <>
    <Banner/>
    <Shop/>
    <Hand/>
    <Latest/>
    <Review/>
    <Ourservice/>
    </>
  )
}

export default Home