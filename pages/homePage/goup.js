import React, { useState } from 'react'

const Goup = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative min-h-screen bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Blobs */}
      <div 
  className="absolute w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-1000 ease-out"
  style={{
    left: '50%',  
    top: '30%',
    background: 'linear-gradient(135deg, rgba(235, 65, 20, 0.4), rgba(235, 65, 20, 0.4))',
    transform: isHovered 
      ? 'translate(20%, -20%)' 
      : 'translate(-10%, -30%)', 
    opacity: 0.7,
  }}
/>
      <div 
        className="absolute w-[300px] h-[400px] rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'linear-gradient(135deg,  rgba(88, 28, 135, 0.4),  rgba(31, 41, 55, 0.4))',
          transform: isHovered ? 'translate(20%, 50%)' : 'translate(-25%, 50%)',
          left: '25%',
          opacity: 0.7,
        }}
      />

      <div className="relative flex justify-center min-h-screen mt-[150px]">
        <div className="text-center px-4 md:px-0 z-10">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-8">
            Empowering Your
            <span className="text-red-700 ml-4">Brand</span><br />
            in the Digital World.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-600">
            We are a dynamic team of agile, creative minds, driving innovation<br />
            at remarkable speed to elevate our clients to new heights and<br />
            capture opportunities across diverse industries.
          </p>
          <div className="flex justify-around mx-[50px] mt-[50px]">
            <button className="flex items-center bg-red-700 hover:bg-red-800 transition-colors text-white rounded-full p-4 text-2xl font-bold shadow-2xl">
              Let's Talk
            </button>
            <button className="text-red-700 font-bold text-2xl underline hover:text-red-800 transition-colors">
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goup
