'use client'
import React, {useState} from 'react'

const Card = ({title, price, discount, pages, projects, storage}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => setIsSelected(!isSelected);

  const clickBuy = () => {
    alert('success')
  }

  return (
    <div onClick={handleSelected} className={`cursor-pointer w-[350px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${isSelected ? 'border-2 border-black' : ''}`}>
      <div className='w-[100%] p-[1rem] bg-gray-900 text-white flex items-center justify-between'>
        <h1 className='uppercase text-[1.2rem]'>{title}</h1>
        <p className='text-[.8rem]'>{discount}</p>
      </div>

      <div className='pt-[3rem] px-[1.5rem]'>
        <div className='w-[100%] flex items-center justify-center border-b-2 pb-[20px]'>
          <div className='relative flex items-end px-[1.5rem]'>
            <span className='absolute top-0 left-0 text-[1.4rem] text-gray-400'>$</span>
            <h1 className='text-[4rem]'>{price}</h1>
            <p className='text-[.9rem] text-gray-400 mb-[20px]'>/months</p>
          </div>
        </div>

        <div className='flex flex-col gap-[20px] bg-white p-[1.5rem]'>
          <div>
            <p><span className='font-bold'>{projects}</span> Projects</p>
            <p><span className='font-bold'>{pages}</span> Pages</p>
            <p><span className='font-bold'>{storage}</span> Mb Disk Space</p>
          </div>
          <div className='w-[100%] flex items-center justify-center'>
            <button onClick={clickBuy} className='uppercase py-[.9rem] px-[2rem] rounded-[10px] bg-blue-500 text-white'>buy now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card