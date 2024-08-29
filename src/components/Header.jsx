import React from 'react'

const Header = () => {
  return (
    <div className='p-6 m-0 flex justify-between bg-[#B8C0FF]'>
      <div className=''>
        <img src="public/images/maxresdefault.jpg" alt="" className='h-4' />
        <p>Advance Mock</p>
      </div>
      <div className='flex flex-row justify-between gap-4'>
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
      </div>
    </div>
  )
}

export default Header