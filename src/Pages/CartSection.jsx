import React from 'react'

import CartItem from '../Component/CartItem';
import { SideBar } from '../Component/SideBar';

const CartSection = () => {
  return <div className="cart-sec container py-5 d-flex align-items-center column-gap-3">
<SideBar />
    <div className='cart-box w-100'>
      <div className='text-start'>
        <h2 className=" cart-text  fw-bold text-uppercase ">Cart </h2>
      </div>
      <div className="row">

        <div className="cart-items col-12 col-md-7">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-total col-12 col-md-5">
          <div className="cart-total-box p-3 bg-primary-subtle ">
            <h3 className="text-start fw-bold">Cart Total</h3>
            <div className="cart-total-price text-start my-3">
              <span className="fs-5">Total: $40.00</span>
            </div>
            <button className="checkOut-btn w-75 ">Checkout</button>
          </div>
          <div className="cart-promo-box ">
            <h4 className="text-start my-3">Have a Promo Code?</h4>
            <input type="text" className="form-control" placeholder="Enter Promo Code" />
            <button className="checkOut-btn w-75 mt-2">Apply</button>
          </div>

        </div>
      </div>
    </div>
  </div>



}

export default CartSection