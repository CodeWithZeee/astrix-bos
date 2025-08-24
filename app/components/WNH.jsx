import React from 'react'
import EasterCarousel from './ui/corousel'

const WNH = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold flex items-center  justify-center">
        WHO <span className='text-green-400 p-8'>Noha</span> Helps?
      </h1>
      <h2 className='audiowide text-2xl font-semibold flex items-center justify-center'>
       Noha is for service providers who want scale without chaos
      </h2>
      <section className="flex  items-center min-h-screen bg-[#000000] text-white ml-16 ">
        {/* Carousel Section */}
        <div className='ml-16 '>
          <EasterCarousel />
        </div>
      </section>
    </div>
  )
}

export default WNH
