import React from 'react'
import Navbar from '../components/common/Navbar'
import Home from '../pages/Home'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className=''>
      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <main className='pt-20 '>
      <Outlet/>
      </main>


      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default UserLayout