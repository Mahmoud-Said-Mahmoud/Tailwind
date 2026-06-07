import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className=' text-white text-center'>
      <div className="bg-cyan-700 w-full p-8 dark:bg-cyan-950">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className='md:w-1/4'>
          <h3 className='uppercase text-2xl'>Location</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className='md:w-1/4'>
          <h3 className='uppercase text-2xl'>AROUND THE WEB</h3>
            <ul className='flex gap-1 justify-center'>
              <li><Link><i className="fa-brands fa-facebook"></i></Link></li>
              <li><Link><i className="fa-brands fa-twitter"></i></Link></li>
              <li><Link><i className="fa-brands fa-linkedin"></i></Link></li>
              <li><Link><i className="fa-brands fa-google"></i></Link></li>
            </ul>
        </div>

        <div className='md:w-1/4'>
          <h3 className='uppercase text-2xl'>About Freelancer</h3>
          <p>Freelance is a free to use, licensed Tailwind theme created by Route</p>
        </div>

      </div>
      </div>
      <div className='bg-cyan-700 dark:bg-cyan-900' >
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  )
}
