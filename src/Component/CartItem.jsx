import React, { useContext } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";
import { CartContext } from '../Utils/CartContext';
const CartItem = ({cartItem}) => {

   const {removeCartFood,increseQty,decreseQty} = useContext(CartContext)
    return <div className="cart-item p-2 w-100 d-flex bg-primary-subtle rounded-3 my-2 align-items-center justify-content-around  ">
        <img className='rounded-circle' src={cartItem.image} alt="" />
        <div>
            <h5 className="cart-item-name text-capitalize fw-bold">{cartItem.name}</h5>
            <div className="cart-item-price fw-semibold">Price: ₹  {cartItem.price * cartItem.qty}</div>
        </div>
        <div>
            <button onClick={()=> decreseQty(cartItem.foodid) } className='fs-5 mx-2'><FaMinus /></button>
            <span className="cart-item-quantity rounded-2 bg-white p-2">{cartItem.qty}</span>
            <button  onClick={()=> increseQty(cartItem.foodid) }  className='fs-5 mx-2'><FaPlus /></button>
            <button onClick={()=> removeCartFood(cartItem.foodid)} className="fs-5 ms-2 text-danger"><GiSplitCross /></button>
        </div>

        

    </div>
}

export default CartItem