const Services = ({ propsInfo }) => {
  return (
    <>
      <div className='pt-24'></div>
      <div className='container  mx-auto '>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-servicesText text-4xl pb-3 font-bold uppercase'>
            Services
          </h1>
          <div className='grid lg:w-[850px] lg:grid-cols-3 pt-8 grid-cols-1 gap-3'>
            {propsInfo.map((propsInfo) => (
              <div
                key={propsInfo.id}
                className='relative group flex items-center justify-center w-full h-full rounded '
              >
                <div className='absolute  invisible group-hover:visible bg-white bg-opacity-20 w-full h-full'></div>
                <img
                  src={propsInfo.url}
                  className='object-cover flex-1 w-[250px]'
                  alt={propsInfo.name}
                />
                <h2 className='absolute invisible group-hover:visible  group-hover:text-black font-bold text-white text-xl text-bold'>
                  {propsInfo.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className='flex justify-center'>
          <button className='bg-linkHover   hover:bg-black text-white font-bold py-4 px-8  rounded'>
            Read More
          </button>
        </div>
      </div>
    </>
  );
};
export default Services;
