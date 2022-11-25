const Resources = () => {
  return (
    <>
      <div className='pt-24'></div>
      <div className='bg-backgroundGreen'>
        <div className='container mx-auto'>
          <div className='flex pt-24 lg:pt-0 flex-wrap lg:flex-nowrap gap-7'>
            <div className='flex mx-4 flex-col gap-5 justify-center'>
              <h1 className='font-bold text-3xl lg:text-5xl text-white'>
                RESOURCES FOR FARMING
              </h1>
              <h5 className='text-linkHover text-base font-bold'>
                GO GREEN, GO NATURAL....WE LOVE TO HELP YOU!
              </h5>
              <p className='text-white font-light'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as
              </p>
              <button className='bg-linkHover max-w-[170px] hover:bg-white hover:text-black text-white font-bold py-4 px-8  rounded'>
                Read More
              </button>
            </div>
            <div className='w-[160%] h-full '>
              <img src='/img-8.png' alt='dayi' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resources;
