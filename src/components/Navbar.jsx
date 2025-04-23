import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
 const[isScroll, setIsScroll] = useState(false)

 useEffect(()=>{
  const handleScroll = ()=>{
    const Scroll = window.scrollY > 10;
    setIsScroll(Scroll)

  }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)


 },[])


  return (
    <header className={`navbar ${isScroll ? 'scrolled':'not-scrolled'} `}>
        <div className='inner'>
          <a className='logo' href='#hero'>Mahesh</a>
          <nav className='desktop'>
           

       
            <ul>
            {navLinks.map(({link, name})=>(

              <li className="group" key={name}>
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline'/>
                </a>

              </li>
            ))}

               </ul>

          </nav>
          <a href='#contact' className='contact-btn group'>
            <div className="inner">
              <span> Contact me</span>
            </div>
          </a>
        </div>

    </header>
  )
}

export default Navbar
