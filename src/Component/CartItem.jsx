import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";
const CartItem = () => {
    return <div className="cart-item p-2 w-100 d-flex bg-primary-subtle rounded-3 my-2 align-items-center justify-content-around  ">
        <img className='rounded-circle' src="" alt="" />
        <div>
            <h5 className="cart-item-name text-capitalize ">Item Name</h5>
            <div className="cart-item-price">Price: $10.00</div>
        </div>
        <div>
            <button className='fs-5 mx-2'><FaMinus /></button>
            <span className="cart-item-quantity rounded-2 bg-white p-2">1</span>
            <button className='fs-5 mx-2'><FaPlus /></button>
        </div>

        <div>
            <button className="fs-5 text-danger"><GiSplitCross /></button>
        </div>

    </div>
}

export default CartItem