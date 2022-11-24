const Services = ({ data }) => {
  return (
    <div className='container mx-auto py-24'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-servicesText text-4xl font-bold uppercase'>
          Services
        </h1>
        <div class='grid lg:grid-cols-3 grid-cols-1 gap-3'>
          {data.map((data) => (
            <div className='relative group flex items-center justify-center w-full h-full rounded '>
              <div className='absolute invisible group-hover:visible bg-white bg-opacity-20 w-full h-full'></div>
              <img src={data.url} alt={data.name} />
              <h1 className='absolute invisible group-hover:visible  group-hover:text-black font-bold text-white text-xl text-bold'>
                {data.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className='flex justify-center'>
        <button className='bg-linkHover  hover:bg-white hover:bg-black text-white font-bold py-2 px-4 rounded'>
          Read More
        </button>
      </div>
    </div>
  );
};
export default Services;
