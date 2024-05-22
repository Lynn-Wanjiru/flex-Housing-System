import React from 'react'
import Button from '../layouts/button'
import img from '../assets/img/houseimg.jpg'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#cae6f5] to-[#a4e9f1]'>
      <div className='w-full lg:w-2/4 space-y-4'>
        <h1 className='font-semibold text-5xl lg:text-6xl text-center lg:text-start leading-tight max-w-4xl md:mt-4 mt-20' > FlexNest</h1>
        <p className='text-center lg:text-start max-w-4xl'>Efficient housing solution for Tenants and Landlords.</p>
        <p className='text-center lg:text-start max-w-4xl'>Flexible housing options and a comfortable, nurturing environment.</p>
        <div className='flex justify-center lg:justify-start'>
          <Button title='APPLY NOW' />
        </div>
      </div>
      <div className='flex justify-center lg:justify-end'>
        <img src={img} alt='img' style={{ maxWidth: '100%', maxHeight: '15%' }} />
      </div>
    </div>
  );
};

export default Home