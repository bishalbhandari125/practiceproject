import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import UploadedDoc from './UploadedDoc';

const UploadComp = () => {
  const handleChange = (e) => {
   
  };
  return (
    <>
    <div className="relative flex h-full w-48 flex-col overflow-y-auto border-r border-gray-200 bg-gray-300">
      <form>
        <label
          htmlFor='file'
          className='flex flex-col items-center justify-center h-auto grid-flow-row gap-2 bg-blue-600 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer px-9 m-2'
        >
          <div className="flex pb-2">
            <AiOutlinePlusCircle className='w-7 h-7 -ml-5 text-white bg-blue-600 rounded-full mt-2' />
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <input
                id='file'
                type='file'
                accept='application/pdf,application/msword'
                onChange={handleChange}
                className='p-1 px-2 font-bold text-gray-100 bg-blue-500 rounded-lg hidden'
              />
            </p>
            <h3 className="text-md text-white ml-2 mt-3">Upload File</h3>
          </div>
        </label>
      </form>

      <hr className='divide-black'></hr>


        {/* Uploading fom google,and other */}
        <div className='flex flex-col text-center gap-2 text-gray-800 font-semibold'>
          <button className='bg-white py-2 '>One Drive</button>
          <button className='bg-white py-2 '>Google Drive</button>
          <button className='bg-white py-2 '>Dropbox</button>
        </div>

        {/* uploaded image from file upload */}
        <UploadedDoc />
      </div>
    </>
  )
}

export default UploadComp
