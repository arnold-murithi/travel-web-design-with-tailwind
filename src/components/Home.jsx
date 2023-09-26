import React from 'react'

function Home() {
  return (
    <div className='relative z-10 flex flex-col items-end '>
      <div className=' flex flex-col items-end pr-6 pt-12 w-[34.4rem]'>
      {/*Title */}
      <div className='w-full flex justify-start items-start'>
      <h1 className="text-white font-bold text-[70px] leading-[80%]
      drop-shadow-[0_65px_65px_rgba(0,0,0,0.55)]  w-full">
        WORLD<br/>OF <span>PARADISE,</span><br/> INDONESIA
        </h1>
      </div>
        {/*Description */}
        <div className='w-[32.6rem] text-white/95 pt-5'>
          <p className='text-[15px]'>Let's explore one of the largest countries in the<br/> 
          world, namely indonesia. Enjoy 3 vacation packages at<br/> 
          competitive prices and strong soul</p>
        </div>
        <div className='border-t w-full mt-20 border-white/80 pb-10 flex items-center gap-8'>
      <div className="">
      <p className='text-white/80 font-medium '>Most popular activity</p>
      <p className='text-white font-bold '>Maniac snorkelling in Bali</p>
      </div>
      <div className="">
      <p className='text-white/80 font-medium '>Most excited place</p>
      <p className='text-white font-bold '>Ubud art & culture</p>
      </div>
      <div className="">
      <p className='text-white/80 font-medium '>Culture style</p>
      <p className='text-white font-bold '>Vintage Hawaii</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home