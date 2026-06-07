import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [expand,setExpand]=useState(false)
  const [dark,setDark]=useState(localStorage.getItem('dark')==="true")
  console.log(dark)
  useEffect(()=>{
    localStorage.setItem("dark",dark)
  if(dark){
    document.documentElement.classList.add("dark")
    console.log(dark)
    
  }else{
    document.documentElement.classList.remove('dark')
    console.log(dark)
  }
  },[dark])

  return (
    <>
    <div className=" w-full bg-cyan-700 p-5 text-white fixed-top dark:bg-cyan-950 ">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to={''} className='md:text-2xl uppercase'> <h1>Start Framework</h1></Link>
          <ul className=' gap-5 hidden md:flex'>
            <li><Link to={'about'}className=' uppercase'> About</Link></li>
            <li><Link to={'profile'}className=' uppercase'> Profile</Link></li>
            <li><Link to={'contact'}className=' uppercase'> Contact</Link></li>
            <li className='cursor-pointer' onClick={()=>setDark(!dark)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </li>
            </ul>  

            <div className='flex gap-2 md:hidden'>
            <div className=' cursor-pointer'>
              <svg onClick={()=>setExpand(!expand)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
              <div className='cursor-pointer'>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
              </div>
              </div>
      </div>
          {expand && <ul className='container mx-auto space-y-4 mt-3 lg:hidden'>
              <li><Link to={'about'}className=' uppercase'> About</Link></li>
              <li><Link to={'profile'}className=' uppercase'> Profile</Link></li>
              <li><Link to={'contact'}className=' uppercase'> Contact</Link></li>
            </ul>  }
      </div>
    </>
  )
}

