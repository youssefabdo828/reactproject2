import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
    <div className='about flex flex-col items-center justify-center text-white'>
<div>
  <div className='text-center pt-4 text-white'>
<h2 className='uppercase mb-3 text-4xl font-extrabold'>about component</h2>
<div className='flex items-center justify-center mb-3'>
<div className='w-20 h-1 bg-white mr-3'></div>
<i className='fa-solid fa-star'></i>
<div className='w-20 h-1 bg-white ml-3'></div>
</div>
  </div>
  </div>
<div className="container mx-auto px-5">
  <div className=" flex flex-col md:flex-row justify-center items-center gap-8">
    <div className='md:w-1/2 text-white'>
<p>
  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
</p>
    </div>
    <div className='md:w-1/2 text-white'>
      <p>
         Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
      </p>
    </div>
  </div>
    </div>
    </div>
    </>
  );
}
