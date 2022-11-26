import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
const Blog = () => {
  return (
    <>
      <div className='pt-24'></div>
      <div className='flex flex-col items-center justify-center container mx-auto'>
        <div className='text-center'>
          <h1 className='lg:text-5xl text-3xl text-aboutFarm font-bold mb-3'>
            OUR BLOG
          </h1>
          <p className='text-aboutFarmPar font-light max-w-[800px] text-center'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its
          </p>
        </div>
        <div className='flex items-center flex-wrap px-5 lg:flex-nowrap gap-9 pt-20'>
          <div className='bg-backgroundGreen group hover:bg-white hover:shadow-3xl rounded max-w-md'>
            <div className='w-full'>
              <img
                src='https://picsum.photos/1920.webp'
                className='w-full object-cover'
                alt='img'
              />
            </div>
            <div className='flex flex-col gap-5 px-5 text-white  group-hover:text-black'>
              <span className='text-xl pt-5'>Post By :Xofram</span>

              <div className='flex justify-between items-center text-iconColor'>
                <span className='flex gap-2 items-center'>
                  Like
                  <AiOutlineHeart />
                </span>
                <span className='flex gap-2 items-center'>
                  <BiComment /> Comments
                </span>
                <span className='flex gap-2 items-center'>
                  <AiOutlineShareAlt /> Share
                </span>
              </div>
              <div className='gap-2 flex flex-wrap py-3'>
                <h1 className='text-2xl font-bold'>Fresh Vegetables Like</h1>
                <p className='text-xl font-light'>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
          </div>
          <div className='bg-white hover:shadow-3xl rounded max-w-md'>
            <div className='w-full'>
              <img
                src='https://picsum.photos/1920.webp'
                className='w-full object-cover'
                alt='img'
              />
            </div>
            <div className='flex flex-col gap-5 px-5 text-black'>
              <span className='text-xl pt-5'>Post By :Xofram</span>

              <div className='flex justify-between items-center text-iconColor'>
                <span className='flex gap-2 items-center'>
                  Like
                  <AiOutlineHeart />
                </span>
                <span className='flex gap-2 items-center'>
                  <BiComment /> Comments
                </span>
                <span className='flex gap-2 items-center'>
                  <AiOutlineShareAlt /> Share
                </span>
              </div>
              <div className='gap-2 flex flex-wrap py-3'>
                <h1 className='text-2xl font-bold'>Fresh Vegetables Like</h1>
                <p className='text-xl font-light'>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
          </div>
          <div className='bg-backgroundGreen group hover:bg-white hover:shadow-3xl rounded max-w-md'>
            <div className='w-full'>
              <img
                src='https://picsum.photos/1920.webp'
                className='w-full object-cover'
                alt='img'
              />
            </div>
            <div className='flex flex-col gap-5 px-5 text-white  group-hover:text-black'>
              <span className='text-xl pt-5'>Post By :Xofram</span>

              <div className='flex justify-between items-center text-iconColor'>
                <span className='flex gap-2 items-center'>
                  Like
                  <AiOutlineHeart />
                </span>
                <span className='flex gap-2 items-center'>
                  <BiComment /> Comments
                </span>
                <span className='flex gap-2 items-center'>
                  <AiOutlineShareAlt /> Share
                </span>
              </div>
              <div className='gap-2 flex flex-wrap py-3'>
                <h1 className='text-2xl font-bold'>Fresh Vegetables Like</h1>
                <p className='text-xl font-light'>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
