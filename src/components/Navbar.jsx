import React from 'react'

const Navbar = () => {
  //Lessons learnt/to learn
  //differentiate between z-index position:relative:absolute
  //justify:between:center items:center
  //what is flex
  //the relationship between realative and absolute
  //difference between padding and margin in tailwind
  return (
    <div className='text-white relative z-10 flex items-center justify-between
     mx-8 py-5 border-b-[1px] border-white/40'>
      <div className='flex items-center'>
      <p className="font-bold text-[18px] pr-24">KULTURA</p>
        <ul className='flex items-center font-semibold gap-8'>
          <li className='relative flex items-center justify-center group'>
            <p>Explore</p>
            <div className='absolute h-[1px] w-full bg-white   scale-0 group-hover:scale-100 duration-200 ease-out 
            -bottom-[22px] px-2 w-[4rem] rounded-full'></div>
          </li>
          <li className='relative flex items-center justify-center group'>
            <p>Discover</p>
            <div className='absolute h-[1px] w-full bg-white scale-0 group-hover:scale-100 duration-200 ease-out 
            -bottom-[22px] px-2 w-[4rem] rounded-full'></div>
          </li>
          <li className='relative flex items-center justify-center group'>
            <p>Tour package</p>
            <div className='absolute h-[1px] w-full bg-white scale-0 group-hover:scale-100 duration-200 ease-out 
            -bottom-[22px] px-2 w-[4rem] rounded-full'></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar