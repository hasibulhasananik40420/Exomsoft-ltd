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
    <div className="w-full mx-auto p-[100px] bg-slate-900 text-slate-50">
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-center'>
        <div className="">
          <img src={logo} alt="" className='w-5/12' />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora totam iste a. Accusamus alias voluptate ratione blanditiis a numquam amet!</p>
          <div className="flex gap-2 items-center">
            <button className='p-2 rounded-lg border-2 border-teal-700 hover:text-teal-700 hover:border-slate-700 transition-all'><BsTwitter /></button>
            <button className='p-2 rounded-lg border-2 border-teal-700 hover:text-teal-700 hover:border-slate-700 transition-all'><FaFacebook /></button>
            <button className='p-2 rounded-lg border-2 border-teal-700 hover:text-teal-700 hover:border-slate-700 transition-all'><ImPinterest2 /></button>
            <button className='p-2 rounded-lg border-2 border-teal-700 hover:text-teal-700 hover:border-slate-700 transition-all'><BsInstagram /></button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4>Contact</h4>
          <div className="flex gap-4">
            <button><FiMail /></button>
            <span>xyz@gmail.com</span>
          </div>
          <div className="flex gap-4">
            <button><MdLocationPin /></button>
            <span>Mirpur 10, Dhaka, Bangladesh</span>
          </div>
          <div className="flex flex-col">
            <h4>Open Hours</h4>
            <p>Monday - Sunday at 10am-4pm</p>
            <p>Friday Closed</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4>Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            <img src={footerGallery} alt="" className='w-[100%]' />
            <img src={footerGallery} alt="" className='w-[100%]' />
            <img src={footerGallery} alt="" className='w-[100%]' />
            <img src={footerGallery} alt="" className='w-[100%]' />
            <img src={footerGallery} alt="" className='w-[100%]' />
            <img src={footerGallery} alt="" className='w-[100%]' />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4>Newsletter</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, dignissimos.</p>
          <div className="relative w-full">
            <input type="search" name="" id="" className='border-2 border-slate-800 rounded-md p-2 bg-slate-800 text-slate-200' placeholder='enter your mail' />
            <button className='text-slate-50 absolute right-[109px] top-[50%] translate-y-[-50%] block'><TbSend className='w-full h-full inline-block text-stone-50' /></button>
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