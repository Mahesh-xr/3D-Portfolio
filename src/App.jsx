import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeaturesCard from './sections/FeaturesCard'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeaturesCard/>
    </>
    
  )
}

export default App
