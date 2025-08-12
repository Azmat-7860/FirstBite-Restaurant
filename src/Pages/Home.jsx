import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Home = () => {
  return <div className='home-sec text-white d-flex flex-column justify-content-center align-items-center'>
    <h1 className=' '>Welcome to <span className='bg-brand fw-bold fs-1 '> FirstBite  </span>  Restaurant</h1>
    <p className='my-3 fs-4 fst-italic'>Your one-stop destination for delicious food and exceptional service.</p>

    <div className='d-flex flex-wrap justify-content-center'>
      <button className='home-btn  '>Contact Us <MdKeyboardDoubleArrowRight className='fw-bold fs-4'/></button>
      <Link to="/menu" className=' home-btn '>Explore Menu <MdKeyboardDoubleArrowRight className='fw-bold fs-4'/></Link>

    </div>
  </div>
}

export default Home