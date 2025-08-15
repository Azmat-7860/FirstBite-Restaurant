import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

export const NoItem = () => {
  return (
    <div className='noItem d-flex align-items-center justify-content-center flex-column'>
        <h1 className='text-secondary fw-bold'>Empty Cart <TiShoppingCart/></h1>
        <Link className='checkOut-btn text-decoration-none' style={{width: "150px"}} to="/menu">Go to Menu</Link>
            </div>
  )
}
