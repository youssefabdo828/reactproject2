import React from 'react';
import './Home.css';
import logo from '../assets/imges/avataaars.svg'

export default function Home() {
  return (
    <>
    <div className='home flex justify-center items-center text-white'>
      <div className='text-center'>
<img src={logo} className='mx-auto mb-3 max-w-full h-auto' alt="logo" />
<div>
  <div className='text-center pt-4 text-white'>
<h2 className='uppercase mb-3 text-4xl font-extrabold'>start Framework</h2>
<div className='flex items-center justify-center mb-3'>
<div className=' me-3 bg-white w-20 h-1 mr-3'></div>
<i className='fa-solid fa-star'></i>
<div className='ms-3 bg-white w-20 h-1 mr-3'></div>
</div>
  </div>
</div>
<div _ngcontent-jdt-c17="">Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
    </>
  )
}

