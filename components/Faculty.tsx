'use client'
import Image from 'next/image';
import { useState } from 'react';
import Addbtn from '@/public/More.png'
import Lessbtn from '@/public/Less.png'

type User = {
  id:number,
  name:string,
  image?:string | null,
  designation:string,
  bio?:string
}

const Faculty = ({user}:{user:User}) => {
  const [Show, setShow] = useState(false);

  return (
    <div>
      <div className='w-70 h-60 relative rounded-4xl bg-[#F2F2F2]'>
        {user.image && <Image src={user.image} alt={user.name} fill className='object-cover' />}
      </div>
      <div className='bg-[#F5F5FF] text-[#424242] w-70 my-5 rounded-3xl py-2 relative'>
        <div className='text-center'>
          <h1 className='text-lg font-montserrat font-bold'>{user.name}</h1>
          <h2 className='text-xs font-montserrat pb-2'>{user.designation}</h2>
          {
            !Show ? <button onClick={() => setShow(!Show)} className='absolute top-3 right-4 cursor-pointer hover:top-3'>
              <Image src={Addbtn} alt='add-btn' className='w-5 h-5 ' />
            </button> : <button onClick={() => setShow(!Show)} className='absolute top-3 right-4 cursor-pointer hover:top-3'>
              <Image src={Lessbtn} alt='Hide-btn' className='w-5 h-5 ' />
            </button>
          }
        </div>
        {
          Show ? <div className='border-t-2'>
            <p className='px-5 text-sm py-5'>{user.bio ?? 'No Data Available'}</p>
          </div> : "" 
        }

      </div>
    </div>
  )
}

export default Faculty