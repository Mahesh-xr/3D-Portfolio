import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeaturesCard from './sections/FeaturesCard'
import ExperienceSection from './sections/ExperienceSection'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeaturesCard/>
    <ExperienceSection/>
    </>
    
  )
}

export default App
