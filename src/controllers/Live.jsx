import React from 'react'
import {live} from '../links/links.js'
const Live = () => {
  return (
    <div  className='mx-auto  mt-6'>
                  <h1 className='mx-5 text-3xl font-bold'>LIVE</h1>
            <div className='mx-auto p-4 text-2xl font-bold grid grid-cols-4 gap-4'>
                  {
                    live.map((link, index) =>{
                      return(
                        <div  className='border rounded-2xl bg-[#DDDDDD] hover:bg-[#EEEEEE] cursor-pointer flex flex-col  items-center' key={index}>
                           <div className='pt-5 w-80 h-56'>
                            <img className='cover h-full w-full rounded-sm' src={link.img} alt="" />
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

export default Live
