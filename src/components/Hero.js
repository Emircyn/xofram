import { useState, useCallback } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Hero.css';
// import required modules
import { Autoplay } from 'swiper';

const Hero = () => {
  const [swiperRef, setSwiperRef] = useState();
  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className='mySwiper '
      >
        <div className='absolute top-4 right-0 px-10 flex-col gap-y-2 z-10 hidden lg:flex '>
          <button
            onClick={handleRightClick}
            className='w-16 h-16 bg-heroText rounded-full'
          >
            <span className='flex justify-center items-center'>
              <IoIosArrowForward size={24} />
            </span>
          </button>
          <button
            onClick={handleLeftClick}
            className='w-16 h-16 bg-white hover:bg-heroText rounded-full'
          >
            <span className='flex justify-center items-center'>
              <IoIosArrowBack size={24} />
            </span>
          </button>
        </div>
        <SwiperSlide>
          <div className='container mx-auto pt-3 lg:pt-12 lg:px-4'>
            <div className='flex gap-4 justify-center flex-wrap ml-[-15px] mr-[-15px] relative'>
              <div className='flex flex-col gap-4 flex-grow-0 flex-shrink-0 basis-2/3 items-center lg:items-start'>
                <h1 className='text-3xl text-heroText font-bold'>Dedicated</h1>
                <h2 className='text-white text-3xl lg:text-5xl lg:font-bold'>
                  To Building Farms
                </h2>
                <p className='text-base overflow-hidden lg:text-left text-center max-w-[430px] text-heroText font-light'>
                  IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED
                  BY THE READABLE CONTENT
                </p>
                <button className='bg-linkHover max-w-[170px] hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded'>
                  Read More
                </button>
              </div>
              <div className='flex justify-center p-4 items-center'>
                <img src='/img-1.png' className='w-8/12' alt='flowers' />
              </div>
            </div>
            <div className='pb-12 hidden lg:block'>
              <nav>
                <ul className='flex gap-x-4 items-center text-lg text-white'>
                  <li className='bg-linkHover text-center w-auto py-1.5 px-3 rounded'>
                    <a href='/'>Home</a>
                  </li>
                  <li className='bg-opacity-0 bg-linkHover text-center hover:bg-opacity-100 w-auto py-1.5 px-3 rounded'>
                    <a href='/'>About</a>
                  </li>
                  <li className='bg-opacity-0 bg-linkHover text-center hover:bg-opacity-100 w-auto py-1.5 px-3 rounded'>
                    <a href='/'>Services</a>
                  </li>
                  <li className='bg-opacity-0 bg-linkHover text-center hover:bg-opacity-100 w-auto py-1.5 px-3 rounded'>
                    <a href='/'>Our Products</a>
                  </li>
                  <li className='bg-opacity-0 bg-linkHover text-center hover:bg-opacity-100 w-auto py-1.5 px-3 rounded'>
                    <a href='/'>Contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container mx-auto pt-3 lg:pt-12 lg:px-4'>
            <div className='flex gap-4 justify-center flex-wrap ml-[-15px] mr-[-15px] relative'>
              <div className='flex flex-col gap-4 flex-grow-0 flex-shrink-0 basis-2/3 items-center lg:items-start'>
                <h1 className='text-3xl text-heroText font-bold'>Dedicated</h1>
                <h2 className='text-white text-3xl lg:text-5xl lg:font-bold'>
                  To Building Farms
                </h2>
                <p className='text-base overflow-hidden lg:text-left text-center max-w-[430px] text-heroText font-light'>
                  IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED
                  BY THE READABLE CONTENT
                </p>
                <button className='bg-linkHover max-w-[170px] hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded'>
                  Read More
                </button>
              </div>
              <div className='flex justify-center p-4 items-center'>
                <img src='/img-1.png' className='w-8/12' alt='flowers' />
              </div>
            </div>
            <div className='pb-12 hidden lg:block'>
              <nav>
                <ul className='flex gap-x-4 items-center text-lg text-white'>
                  <li className='bg-linkHover text-center w-auto py-1.5 px-3 rounded'>
                    <a href='/'>Home</a>
                  </li>
                  <li className='bg-opacity-0 bg-linkHover text-center hover:bg-opacity-100 w-auto py-1.5 px-3 rounded'>
                    <a href='/'>About</a>
                  </li>
                  <li className='bg-opacity-0 bg-linkHover text-center hover:bg-opacity-100 w-auto py-1.5 px-3 rounded'>
                    <a href='/'>Services</a>
                  </li>
                  <li className='bg-opacity-0 bg-linkHover text-center hover:bg-opacity-100 w-auto py-1.5 px-3 rounded'>
                    <a href='/'>Our Products</a>
                  </li>
                  <li className='bg-opacity-0 bg-linkHover text-center hover:bg-opacity-100 w-auto py-1.5 px-3 rounded'>
                    <a href='/'>Contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
