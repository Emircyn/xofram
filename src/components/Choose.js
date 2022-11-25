import React from 'react';

const Choose = ({ data }) => {
  return (
    <>
      <div className='pt-24'></div>
      <div className='container mx-auto'>
        <div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl text-aboutFarm font-bold mb-3'>
              WHY CHOOSE US
            </h1>

            <p className='text-aboutFarmPar font-light max-w-[800px] text-center'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its
            </p>
          </div>
          <div className='pt-24'></div>
          <div className='flex justify-between mb-10'>
            {data.map((data) => (
              <div
                key={data.id}
                className={`${
                  data.id === 2 && 'scale-110'
                } w-[350px] text-center gap-y-5 flex flex-col justify-center  items-center`}
              >
                <div>
                  <img src={data.url} alt={data.name} />
                </div>
                <div>
                  <h1 className='text-2xl text-aboutFarmPar mb-2'>
                    {data.name}
                  </h1>
                  <p className='text-aboutFarmPar font-light'>{data.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='items-center justify-center flex'>
            <button className='bg-linkHover hover:bg-black text-white font-bold py-4 px-8  rounded'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Choose;
