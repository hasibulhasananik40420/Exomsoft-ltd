/* eslint-disable no-unused-vars */
import React from 'react';
// import { LuHeartHandshake } from 'react-icons/lu';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const OurWorkingProcess = () => {
  return (
    <div className='w-full mx-auto p-[12px]  md:p-[100px] bg-slate-900 text-slate-50 '>
      <div className="flex flex-col lg:flex-row md:flex-row gap-3 ">

        <div className="w-full lg:w-[35%] flex flex-col justify-center items-center gap-8 pt-0 lg:pt-[200px] md:pt-[150px]">
          <div className="bg-gray-800 w-3/4 p-10 flex flex-col gap-4">
            {/* <span><LuHeartHandshake className='text-5xl' /></span> */}
            <h1 className='font-bold text-2xl'>UI/UX DESIGN</h1>
            <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi atque dolor similique dolores hic consequatur maiores, voluptatum iste laboriosam?</p>
            <div className="flex items-center">
              <button className='text-[13px]'>view Details</button>
              <span><MdOutlineArrowRightAlt className='text-2xl' /></span>
            </div>
          </div>
          <div className="bg-gray-800 w-3/4 p-10 flex flex-col gap-4">
            {/* <span><LuHeartHandshake className='text-5xl' /></span> */}
            <h1 className='font-bold text-2xl'>UI/UX DESIGN</h1>
            <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi atque dolor similique dolores hic consequatur maiores, voluptatum iste laboriosam?</p>
            <div className="flex items-center">
              <button className='text-[13px]'>view Details</button>
              <span><MdOutlineArrowRightAlt className='text-2xl' /></span>
            </div>
          </div>
        </div>

        <div className="w-[25%] hidden md:flex lg:flex xl:flex flex-col justify-evenly items-center relative">
          <div className="w-[50px] h-[50px] rounded-full bg-green-600 text-white flex justify-center items-center text-xl font-bold z-10">01</div>
          <div className="w-[50px] h-[50px] rounded-full bg-yellow-600 text-white flex justify-center items-center text-xl font-bold z-10">02</div>
          <div className="w-[50px] h-[50px] rounded-full bg-blue-600 text-white flex justify-center items-center text-xl font-bold z-10">03</div>
          <div className="w-[50px] h-[50px] rounded-full bg-pink-600 text-white flex justify-center items-center text-xl font-bold z-10">04</div>
          <div className="h-full absolute top-0 left-[50%] translate-x-[-50%] z-[9] border border-yellow-500 border-dashed"></div>
        </div>

        <div className="w-full lg:w-[35%] flex flex-col justify-center items-center gap-8">
          <div className="bg-gray-800 w-3/4 p-10 flex flex-col gap-4">
            {/* <span><LuHeartHandshake className='text-5xl' /></span> */}
            <h1 className='font-bold text-2xl'>UI/UX DESIGN</h1>
            <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi atque dolor similique dolores hic consequatur maiores, voluptatum iste laboriosam?</p>
            <div className="flex items-center">
              <button className='text-[13px]'>view Details</button>
              <span><MdOutlineArrowRightAlt className='text-2xl' /></span>
            </div>
          </div>
          <div className="bg-gray-800 w-3/4 p-10 flex flex-col gap-4">
            {/* <span><LuHeartHandshake className='text-5xl' /></span> */}
            <h1 className='font-bold text-2xl'>UI/UX DESIGN</h1>
            <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi atque dolor similique dolores hic consequatur maiores, voluptatum iste laboriosam?</p>
            <div className="flex items-center">
              <button className='text-[13px]'>view Details</button>
              <span><MdOutlineArrowRightAlt className='text-2xl' /></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurWorkingProcess