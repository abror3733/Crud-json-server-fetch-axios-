import React, { useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';

function AddPage() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const colorRef = useRef();
  const priceRef = useRef();
  const [imgUrl, setImgUrl] = useState('');

  const handleAddCars = async (e) => {
    e.preventDefault();

    const data = {
      img: imgUrl,
      name: nameRef.current.value,
      color: colorRef.current.value,
      price: priceRef.current.value
    };

    try {
      const res = await instance().post("/cars", data);
      if (res.status === 201) {
        navigate('/');
      } else {
        console.error("Avtomobil qo'shishda xatolik:", res);
      }
    } catch (error) {
      console.error("Avtomobil qo'shishda xatolik:", error);
    }
  }

  const handleChoose = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className='bg-[#FEAF00] h-[100vh] mx-auto flex items-center justify-center'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='bg-[#FFFFFF] py-[20px] px-[15px] rounded-[17px] w-[37%] login-wrap'>
        <div className='flex items-center justify-center space-x-2 mb-[20px]'>
          <h2 className='text-[20px] text-[#000000] font-bold '>Enter your todo</h2>
        </div>
        <form onSubmit={handleAddCars}>
          <label className='flex flex-col space-y-[5px]'>
            <span className='text-[#6C6C6C] text-[16px] font-[500]'>Enter your car name</span>
            <input
              ref={nameRef}
              className='border-[#E5E5E5] border-[1px] pt-[7px] pb-[8px] pl-[10px] rounded-md focus:shadow-[#FEAF00] outline-none focus:shadow-md'
              type="text"
              placeholder="Enter your car name"
            />
          </label>
          <label className='flex flex-col space-y-[5px] mt-[19px]'>
            <span className='text-[#6C6C6C] text-[16px] font-[500]'>Enter your car color</span>
            <input
              className='border-[#E5E5E5] border-[1px] pt-[7px] pb-[8px] pl-[10px] rounded-md focus:shadow-[#FEAF00] outline-none focus:shadow-md'
              required
              ref={colorRef}
              type="text"
              placeholder="Enter your car color"
              autoComplete="off"
            />
          </label>
          <label className='flex flex-col space-y-[5px] mt-[19px]'>
            <span className='text-[#6C6C6C] text-[16px] font-[500]'>Enter your car price</span>
            <input
              className='border-[#E5E5E5] border-[1px] pt-[7px] pb-[8px] pl-[10px] rounded-md focus:shadow-[#FEAF00] outline-none focus:shadow-md'
              required
              ref={priceRef}
              type="text"
              placeholder="Enter your car price"
              autoComplete="off"
            />
          </label>
          <label className='flex flex-col space-y-[5px] mt-[19px]'>
            <span className='text-[#6C6C6C] text-[16px] font-[500]'>Choose your car image</span>
            <input
              onChange={handleChoose}
              className=''
              required
              type="file"
              accept="image/*"
            />
            {imgUrl && 
            <img src={imgUrl} alt="Car" className="mt-2" style={{ maxWidth: "30%" }} />}
          </label>
          <button className='mt-[35px] bg-[#FEAF00] text-white text-[16px] rounded-md uppercase pt-[10px] pb-[11px] w-full hover:opacity-70 transition-[0.6s]' type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPage;
