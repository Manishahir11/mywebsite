import React from 'react'
import {BCA} from '../links/links.js'

const Bca = () => {
  return (
    <div  className='h-full mx-5 grid grid-cols-4 gap-4 mt-6'>
      <div className='mx-auto p-4 text-2xl font-bold border rounded-2xl min-h-96 min-w-96'>
        <h1>Manipal University</h1>
        {
          BCA.filter((sub)=> sub.heading === "manipal").map((link, index) =>{
            return(
              <div key={index}>

                <a className='text-xl font-semibold' href={link.link} target="_blank">{link.name}</a>
              </div>
            )
          })
        }
        
      </div>
      <div className='mx-auto p-4 text-2xl font-bold border rounded-2xl min-h-96 min-w-96'>
        <h1>Fundamentals of Mathematics</h1>
        {
          BCA.filter((sub)=> sub.heading === "Math").map((link, index) =>{
            return(
              <div key={index}>

                <a className='text-xl font-semibold' href={link.link} target="_blank">{link.name}</a>
              </div>
            )
          })
        }
        
      </div>
      <div className='mx-auto p-4 text-2xl font-bold border rounded-2xl min-h-96 min-w-96'>
        <h1>Technical Communication</h1>
        {
          BCA.filter((sub)=> sub.heading === "Tech").map((link, index) =>{
            return(
              <div key={index}>

                <a className='text-xl font-semibold' href={link.link} target="_blank">{link.name}</a>
              </div>
            )
          })
        }
        
      </div>
      <div className='mx-auto p-4 text-2xl font-bold border rounded-2xl min-h-96 min-w-96'>
        <h1>C Programming</h1>
        {
          BCA.filter((sub)=> sub.heading === "C Language").map((link, index) =>{
            return(
              <div key={index}>

                <a className='text-xl font-semibold' href={link.link} target="_blank">{link.name}</a>
              </div>
            )
          })
        }
      </div>
      <div className='mx-auto p-4 text-2xl font-bold border rounded-2xl min-h-96 min-w-96'>
        <h1>Fundamentals of Computers & Digital Systems</h1>
        {
          BCA.filter((sub)=> sub.heading === "Fundamentals").map((link, index) =>{
            return(
              <div key={index}>

                <a className='text-xl font-semibold' href={link.link} target="_blank">{link.name}</a>
              </div>
            )
          })
        }
      </div>
      <div className='mx-auto p-4 text-2xl font-bold border rounded-2xl min-h-96 min-w-96'>
        <h1> Introduction to Web Programming</h1>
        {
          BCA.filter((sub)=> sub.heading === "Web Programming").map((link, index) =>{
            return(
              <div key={index}>

                <a className='text-xl font-semibold' href={link.link} target="_blank">{link.name}</a>
              </div>
            )
          })
        }
      </div>
      <div className='mx-auto p-4 text-2xl font-bold border rounded-2xl min-h-96 min-w-96'>
        <h1>Environmental Science</h1>
        {
          BCA.filter((sub)=> sub.heading === "Environmental Science").map((link, index) =>{
            return(
              <div key={index}>

                <a className='text-xl font-semibold' href={link.link} target="_blank">{link.name}</a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Bca
