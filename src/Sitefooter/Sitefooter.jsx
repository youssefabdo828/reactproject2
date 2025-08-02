import React from 'react'
import './Sitefooter.css';

export default function Sitefooter1() {
  return (
    <>
    <div className='footer text-white'>

      <div className='upper-footer'>
        <div className=" flex flex-wrap justify-evenly m-4">
          <div className="card">
<div className=" m-4 w-full sm:w-64 text-center">
<h3 className='text-2xl font-bold mb-2'>LOCATION</h3>
<p className='mb-3'>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
</div>

          </div>
          <div className="card">
<div className=" m-4 w-full sm:w-64 text-center">
<h3 className='text-2xl font-bold mb-2'>AROUND THE WEB</h3>
<div className="icons flex justify-center gap-3 mt-2">
  <i _ngcontent-hvp-c21="" class="fa-brands fa-facebook mx-1 icon"></i>
  <i _ngcontent-hvp-c21="" class="fa-brands fa-twitter mx-1 icon"></i>
  <i _ngcontent-hvp-c21="" class="fa-brands fa-linkedin-in mx-1 icon"></i>
  <i _ngcontent-hvp-c21="" class="fa-solid fa-globe mx-1 icon"></i>
</div>
</div>

          </div>
          <div className="card">
<div className=" w-full sm:w-64 m-4 text-center">
<h3 className="text-2xl font-bold mb-2">ABOUT FREELANCER</h3>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>

          </div>
        </div>
      </div>
      <div className="lower-footer ">
        <p>
          Copyright © Your Website 2021
        </p>
      </div>
    </div>
    </>
  )
}
