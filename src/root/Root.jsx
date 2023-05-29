/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Root = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />

    </div>
  )
}

export default Root