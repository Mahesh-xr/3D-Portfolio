import React from 'react'
import { counterItems } from '../constants'
import { div } from 'three/tsl'

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        {counterItems.map(item=>(
            <div key={item.label} className='counter-number text-white text-5xl font-bold mb-2'>
              0  {item.suffix}
            </div>
        ))}
      
    </div>
  )
}

export default AnimatedCounter
