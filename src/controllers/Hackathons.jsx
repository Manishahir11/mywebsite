import React from 'react'
import { hackthons} from '../links/links.js'

const Hackathons = () => {
  return (
<div  className='mx-auto  mt-6'>
              <h1 className='mx-5 text-3xl font-bold'>Hackathons</h1>
        <div className='mx-auto p-4 text-2xl font-bold grid grid-cols-4 gap-4'>
              {
                hackthons.map((link, index) =>{
                  return(
                    <div  className='border rounded-2xl bg-[#DDDDDD] hover:bg-[#EEEEEE] cursor-pointer flex flex-col justify-center items-center' key={index}>
                       <div className='pt-5 w-56 h-48'>
                        <img src={link.img} alt="" />
                       </div>
                      <a className='my-3 text-center text-xl font-semibold' href={link.link} target="_blank">{link.name}</a>
                    </div>
                  )
                })
              }
              
            </div>
   
    </div>
  )
}

export default Hackathons
