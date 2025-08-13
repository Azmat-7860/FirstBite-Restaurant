import React, { use, useContext, useEffect } from 'react'
import { LiaCartPlusSolid } from "react-icons/lia";
import { CartContext } from '../Utils/CartContext';

export const FoodItem = ({food}) => {
   const {addCartFood} = useContext(CartContext)
    return (
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2">
      <div className="food-item p-2 border border-1">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={food.image} alt={food.name} />
            </div>
            <div className="flip-card-back d-flex justify-content-center align-items-center">
              <span className="fw-bold fs-5">{food.name}</span>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='mt-2 ms-1 fw-bold'>₹ {food.price}</h5>
          <button onClick={()=> addCartFood(food.foodid,food.name,food.price,food.image)} className='border-0 bg-white text-black fs-3 m-0 fw-bolder p-0 px-1'><LiaCartPlusSolid /></button>
        </div>
      </div>
    </div>
  )
}
