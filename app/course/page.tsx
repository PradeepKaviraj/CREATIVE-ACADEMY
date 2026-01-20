import React from 'react'
import Herosection from './Herosection'
import Mainsection from './Mainsection'

const page = () => {
  return (
    <div className='overflow-hidden'>
        <Herosection/>
        <Mainsection/>
    </div>
  )
}

export default page