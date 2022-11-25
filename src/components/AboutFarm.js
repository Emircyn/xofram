import React from 'react';

const AboutFarm = () => {
  return (
    <>
      <div className='pt-24'></div>

      <div className='flex flex-col lg:flex-row justify-between gap-y-3 lg:gap-x-3 mx-3 lg:mx-20 items-center'>
        <div>
          <h1 className='text-aboutFarm text-3xl w-full lg:text-5xl font-bold pb-3'>
            ABOUT OUR FARM
          </h1>
          <p className='text-aboutFarmPar text-base font-light pr-6 pb-12'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
          <button className='bg-linkHover items-start w-40 hover:bg-black text-white font-bold py-4 px-8 rounded'>
            Read More
          </button>
        </div>
        <div className='lg:w-5/6 w-screen '>
          <img
            className='object-cover w-full inset-0'
            src='/img-7.png'
            alt='greenFlowers'
          />
        </div>
      </div>
    </>
  );
};
export default AboutFarm;
