import React, { useEffect } from 'react'
import { SideBar } from '../Component/SideBar';
import { FoodItem } from '../Component/FoodItem';
import { foodDetails } from '../../public/foods';

const FoodSection = () => {

  const [foodOption, setFoodOption] = React.useState('All');
  let MyFood = foodDetails;

     MyFood = foodOption === "All" ? foodDetails : foodDetails.filter((item) => item.categories === foodOption);

 
  return <div className="Menu-sec container py-2 d-flex flex-wrap flex-lg-nowrap align-items-center column-gap-3">
   <div className=" order-2 order-lg-1 m-auto m-lg-0">
    <SideBar />
    </div> 
    <div className='Menu-box w-100 order-1 order-lg-2'>
      <div className='text-start'>
        <h2 className=" cart-text  fw-bold text-uppercase ">Menu </h2>
      </div>

      <div className="Menu-option d-flex justify-content-between overflow-x-auto my-3">
        <button onClick={() => setFoodOption('All')} className='btn btn-outline-dark m-1'>All</button>
        <button onClick={() => setFoodOption('Snacks')} className='btn btn-outline-dark m-1'>Snacks</button>
        <button onClick={() => setFoodOption("Fast Food")} className='btn btn-outline-dark m-1'>Fast Food</button>
        <button onClick={() => setFoodOption('Italian')} className='btn btn-outline-dark m-1'>Italian</button>
        <button onClick={() => setFoodOption("Drink")} className='btn btn-outline-dark m-1'>Drink</button>
        <button onClick={() => setFoodOption('Dessert')} className='btn btn-outline-dark m-1'>Dessert</button>
        <button onClick={() => setFoodOption("Breakfast")} className='btn btn-outline-dark m-1'>BreakFast</button>
        <button onClick={() => setFoodOption("Main Course")} className='btn btn-outline-dark m-1'>Main Course</button>
      </div>

      <div className="Menu-items row mt-2  d-flex flex-wrap justify-content-evenly gap-2 ">
        {MyFood.map((item) => <FoodItem key={item.foodid} food={item}  />)}

      </div>


    </div>
  </div>
}

export default FoodSection