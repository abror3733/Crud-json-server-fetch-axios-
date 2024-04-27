import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import instance from '../api/axios'; 
import useFetch from '../hook/useFetch';
import useAxios from '../hook/useAxios';
import { useNavigate } from 'react-router-dom';

const List = () => {
  // const [cars,setCars] = useState([])
  // useEffect(()=>{
  //   const getCars = async ()=>{
  //     const responce =await fetch("http://localhost:3000/cars")
  //     const data =await responce.json()
  //     setCars(data)
  //   }
  //   getCars()
  //   console.log(cars)
  // },[])
  // const cars=useFetch("/cars")

  // axios.get("http://localhost:3000/cars")
  // .then(res=> console.log(res.data))
  
  //  const cars = useAxios("/cars")
  //  console.log(cars);

   const [cars,setCars] = useState([])
   const navigate = useNavigate()
   const [refresh,setRefresh] = useState(false)
   const handleDeleteDb =(e)=>{
    instance()
    .delete(`/cars/${e.target.id}`)
    .then(res=> console.log(res))
    setRefresh(!refresh)
   }



   useEffect(()=>{
    instance()
    .get("/cars")
    .then(res=> setCars(res.data))
  },[refresh])

  return (
    <div className='bg-[#FEAF00] cursor-pointer p-5 flex flex-col items-center justify-between space-y-5'>
       <div onClick={()=> navigate('/add-cars')} className='w-[30%]  bg-[white] font-semibold hover:shadow-md hover:shadow-[rgb(90,88,88)] text-black p-1 mt-2 rounded-md my-2'>
        <h3 className='text-center'>Add</h3>
       </div>
   <div className='flex flex-wrap items-center justify-between space-y-5'>
   {cars.length> 0 && cars.map(item=>(
          <div key={item.id}  className='w-[22%] relative p-3 bg-white h-[320px] rounded-md shadow-md shadow-[#504e4e]'>
          <img className='mx-auto mt-5' src={item.img} alt="img" width={90} height={80} />
          <strong className='absolute top-[10px] left-[10px] text-slate-500 font-semibold'>ID:{item.id}</strong>
          <h3 className='text-center text-[27px] font-bold mt-3'>Modern Cars</h3>
          <div className='flex flex-col space-y-2 mt-3'>
            <h4 className='text-slate-500 font-semibold'>Name: <strong className='text-[20px] text-black'>{item.name}</strong></h4>
            <h4 className='text-slate-500 font-semibold'>Color: <strong className='text-black text-[14px]'>{item.color}</strong></h4>
            <h4 className='text-slate-500 font-semibold'>Price: <strong className='text-black text-[14px]'>{item.price}</strong></h4>
          </div>
          <button id={item.id} onClick={handleDeleteDb} className='w-full bg-[red] font-semibold hover:shadow-md hover:shadow-[#5a5858] text-white p-1 rounded-md my-2'>Delete</button>
        </div>
        ))}
   </div>
    </div>
  )
}

export default List;









