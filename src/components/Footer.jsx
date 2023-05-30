/* eslint-disable no-unused-vars */
import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { ImPinterest2 } from 'react-icons/im';
import { MdLocationPin } from 'react-icons/md';
import { TbPhoneCall, TbSend } from 'react-icons/tb';
import footerGallery from '../assets/istockphoto-604021580-170667a.jpg';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-16 px-7 bg-slate-900 text-slate-50">
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-center'>
        <div className="">
          <img src={logo} alt="" className='w-[110px]' />
          <p className='text-[12px] font-normal mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora totam iste a. Accusamus alias voluptate ratione blanditiis a numquam amet!</p>
          <div className="flex gap-3 items-center mt-5">
            <button className='p-2 rounded-lg border-2 border-teal-700 hover:text-teal-700 hover:border-slate-700 transition-all'><BsTwitter /></button>
            <button className='p-2 rounded-lg border-2 border-teal-700 hover:text-teal-700 hover:border-slate-700 transition-all'><FaFacebook /></button>
            <button className='p-2 rounded-lg border-2 border-teal-700 hover:text-teal-700 hover:border-slate-700 transition-all'><ImPinterest2 /></button>
            <button className='p-2 rounded-lg border-2 border-teal-700 hover:text-teal-700 hover:border-slate-700 transition-all'><BsInstagram /></button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className='text-xl'>Contact</h4>
          <div className="flex items-center gap-4">
            <FiMail />
            <span className='text-[12px] font-normal'>xyz@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
          <MdLocationPin size={20}/>
            <span className='text-[12px] font-normal'>Mirpur 10, Dhaka, Bangladesh</span>
          </div>
          <div className="flex flex-col mt-6">
            <h4 className='text-[20px] font-normal'>Open Hours</h4>
            <p className='text-[12px] font-normal mt-2'>Monday - Sunday at 10am-4pm</p>
            <p className='text-[12px] font-normal'>Friday Closed</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className='text-xl'>Gallery</h4>
          <div className="grid grid-cols-3 gap-x-1 gap-y-4">
            <img src={footerGallery} alt="" className='w-[80px] h-[60px]' />
            <img src={footerGallery} alt="" className='w-[80px] h-[60px]' />
            <img src={footerGallery} alt="" className='w-[80px] h-[60px]' />
            <img src={footerGallery} alt="" className='w-[80px] h-[60px]' />
            <img src={footerGallery} alt="" className='w-[80px] h-[60px]' />
            <img src={footerGallery} alt="" className='w-[80px] h-[60px]' />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className='text-xl'>Newsletter</h4>
          <p className='text-[12px] font-normal'  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, dignissimos.</p>

          <div className="relative w-full">
            <input type="search" name="" id="" className='border-2 border-slate-800 rounded-md p-2 bg-slate-800 text-slate-200 outline-0 ' placeholder='Enter your email' />

            <button className='text-slate-50 absolute right-[-18px] md:right-[-27px] lg:right-[99px] top-[50%] translate-y-[-50%] block'>
              <TbSend className='w-full h-full inline-block text-stone-50' />
            </button>
          </div>

          <div className="flex gap-3">
            <button><TbPhoneCall className='text-4xl text-emerald-700' /></button>
            <div className="flex flex-col">
              <span>+880 1787170612</span>
              <span>Call To Our Expert</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer