import React from 'react'
import './Portfolio.css';
import { useState } from 'react';
import pic1 from '../assets/imges/poert1.png'
import pic2 from '../assets/imges/port2.png'
import pic3 from '../assets/imges/port3.png'

export default function Portfolio() {

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  const images = [pic1, pic2, pic3, pic1, pic2, pic3];
  return (
    <>

    <div className='portfolio text-white py-12 mb-40'>
  <div className='header-text text-center pt-4'>
<h2 className='uppercase mb-3 text-4xl font-bold'>portfolio component</h2>
<div className='flex items-center justify-center mb-6'>
<div className='line w-20 h-1 bg-white mr-3'></div>
<i className='fa-solid fa-star'></i>
<div className='line w-20 h-1 bg-white ml-3'></div>
</div>
  </div>
<div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
                <img src={img} alt={`portfolio-${index}`} className="w-full rounded-lg transition duration-300" />
                <div className="layer absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
                  <button onClick={() => openModal(img)} className="focus:outline-none">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        
      </div>



  {selectedImage && (
        <div
          className="modal fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="max-w-3xl mx-auto bg-transparent rounded-lg">
            <img src={selectedImage} alt="modal" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}

  </div>
  </>
  )
}
