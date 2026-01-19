import React from 'react'
import Herosection from './Herosection'
import Team from './Team'

const page = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
        <Herosection/>
        <Team/>
    </div>
  )
}

export default page