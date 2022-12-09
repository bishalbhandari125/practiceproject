import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'



const Navbar = () => {
    const [open ,setOpen] = useState(false)
  return (
<div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 lg:ml-40 mt-3'>
            DAiTA.STUDIO
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden lg:hidden'>
            <AiOutlineMenu className={` ${open ? <AiOutlineClose /> : <AiOutlineMenu /> }`}/>
        </div>
        <div className={`md:flex md:items-center md:pb-0 lg:mr-40 absolute md:static  md:z-auto 
                        z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
           <button className='bg-blue-600 p-2 rounded-md sm:mr-3 md:mr-3 mr-3 font-bold text-gray-300'>Sign in</button>
           <button className='bg-blue-600 p-2 rounded-md font-semibold text-gray-300'>Sign up</button>
        </div> 

    </div>
</div>
  )
}

export default Navbar