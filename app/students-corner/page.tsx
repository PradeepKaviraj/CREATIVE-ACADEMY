import React from 'react'
import Herosection from './Herosection'
import Reviews from './Reviews'

const page = () => {
  return (
    <div className='overflow-hidden'>
        <Herosection/>
        <Reviews/>
    </div>
  )
}

export default page