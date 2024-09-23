import React from 'react'
import logo from '/logo.png'


const Payroll = () => {
  return (
    <div className='w-screen h-screen bg-white_base flex overflow-hidden'>
      <div className='w-[350px] h-screen bg-Green_base'>
        <div className='w-full h-[101px] flex justify-center items-center space-x-1'>
          <img src={logo} alt="logo" className='size-5/6' />
        </div>
      </div>
      <div className='w-full h-screen'>
        <div className='w-full h-[101px] bg-white_base shadow-custom' ></div>
      </div>
    </div>
  )
}

export default Payroll