import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import FiveStep from '../../components/FiveStep/FiveStep'
import BestPartSection from '../../components/bestPartSection/BestPartSection'
import Complementry from '../../components/complementry/Complementry'
import ForYou from '../../components/forYou/ForYou'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FiveStep />
      <BestPartSection />
      <Complementry />
      <ForYou />
    </>
  )
}

export default Home