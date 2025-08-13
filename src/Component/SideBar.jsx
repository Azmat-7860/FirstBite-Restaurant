import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdNotListedLocation } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className="sidebar  m-3">
      <div className='sidebar-btn text-center p-2 w-100'>
        <h3 className=" fs-1 text-white mb-0">FB.</h3>
      </div>
      <Link to={'/'} className='sidebar-btn text-center p-2 w-100'>
        <FaHome className='text-white fs-1 '/>
      </Link>
      <Link to="/menu" className='sidebar-btn text-center p-2 w-100'>
        <IoRestaurant className='text-white fs-1 '/>
      </Link>
      <Link to="/cart" className='sidebar-btn text-center p-2 w-100'>
        <TiShoppingCart className='text-white fs-1 '/>
      </Link>
      <div className='sidebar-btn text-center p-2 w-100'>
        <TbLogout className='text-white fs-1 '/>
      </div>
      
    </div>
  )
}
