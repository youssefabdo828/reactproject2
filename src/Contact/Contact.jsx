import React, { useEffect, useState } from 'react'
import './Contact.css';

export default function Contact() {

    const lable = document.querySelectorAll('label');

  const [name,setname] = useState(null);
  function changelable (name , index) {
if(name){

  lable[index].classList.remove('top')
}else{
  lable[index].classList.add('top')
}
  }
const [age,setage] = useState(null);
const [email,setemail] = useState(null);
const [password,setepassword] = useState(null);
  return (
    <>
    <div className='contact pt-10' id='contact'>
     <div className='header-text text-center pt-4'>
<h2 className='uppercase mb-3 text-4xl font-extrabold'>conatct section</h2>
<div className='flex items-center justify-center mb-6'>
<div className='line w-20 h-1 mr-3 '></div>
<i className='fa-solid fa-star'></i>
<div className='line w-20 h-1 ml-3 '></div>
</div>
  </div>


  <form action="" className='w-full max-w-xl mx-auto px-4 mt-10 space-y-6 '>
    <div className='relative'>
<label htmlFor="username" className=' block mb-1 text-sm top'>userName :</label>
<input value={name} onChange={(e) => {setname(e.target.value); changelable(e.target.value , 0) }} type="text" id='username' placeholder='userName' name='userName' className=' w-full bg-transparent border-b border-gray-300 rounded-b-md outline-none pb-3' />
    </div>

<div>
<label htmlFor="userage" className=' position-relative top'>userAge :</label>
<input value={age} onChange={(e) => {setage(e.target.value); changelable(e.target.value , 1) }} type="number" id='userage' placeholder='userAge' name='userAge' className=' w-full bg-transparent border-b border-gray-300 rounded-b-md outline-none pb-3' />
</div>

<div>
<label htmlFor="useremail" className=' position-relative top'>userEmail :</label>
<input value={email} onChange={(e) => {setemail(e.target.value); changelable(e.target.value , 2) }} type="email" id='useremail' placeholder='userEmail' name='userEmail' className=' w-full bg-transparent border-b border-gray-300 rounded-b-md outline-none pb-3' />
</div>

<div>
<label htmlFor="userpassword" className=' position-relative top'>userPassword :</label>
<input value={password} onChange={(e) => {setepassword(e.target.value); changelable(e.target.value , 3) }} type="password" id='userpassword' placeholder='userPassword' name='userPassword' className=' w-full bg-transparent border-b border-gray-300 rounded-b-md outline-none pb-3' />
</div>

<button class="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition" > send Message </button>

  </form>
  </div>
    </>
  )
}
