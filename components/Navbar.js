import React from 'react'
import Link from 'next/link';
import { useState } from 'react';




export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

    return (
        <>

        <nav className='flex items-center flex-wrap  p-3 font-open-sans '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
             
        <img src= "/carbonrodlogo.jpg"alt='logo'  width={100} height={100}/>
           
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-[#80ED99] rounded lg:hidden text-black ml-auto hover:text-black outline-none'
          onClick={handleClick}
        >
         
         <svg
              class="w-6 h-6 text-black-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link href='/device'>
              <a className='lg:inline-flex lg:w-auto w-full  px-3 py-2 text-black  items-center justify-center  hover: text-[#64c297]'>
                Our Device
              </a>
            </Link>
            <Link href='#'>
              <a className='lg:inline-flex lg:w-auto w-full  px-3 py-2 text-black  items-center justify-center hover: text-[#64c297]'>
                About Us
              </a>
            </Link>
            <Link href='#'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center  hover: text-[#64c297]'>
                Contact Us
              </a>
            </Link>
           
           
        
          </div>

          <div class=" md:flex items-center space-x-3 ">
            <Link href = "/signin">
              <button type="button" class=" drop-shadow-md py-2 px-2 font-medium text-[#64c297]  rounded " >Sign In</button>
            </Link>
					</div>
        </div>
      </nav>
        </>
    )
}


export default Navbar
