import React from 'react'
import { Link } from 'react-router-dom'

const AboutPageCom = () => {
  return (
    <div className='py-8 a-bg-img h-screen sm:h-[75vh] md:min-h-[90vh]'>
        {/* <img src={img1} className="md:h-[70vh] min-w-full object-cover bg-center bg-no-repeat" /> */}
        <div className="about-page-container flex items-center  gap-2 md:gap-4 px-6 sm:px-16 md:px-24 flex-wrap relative">
            <div className="about-page-content shadow-lg shadow-slate-400 p-8 sm:px-16 absolute bg-[#00000048] text-white  w-96 md:w-2/3 rounded top-48 z-50">
                <h1 className='text-3xl font-bold'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="about-page-cta basis-96 mt-8  mb-8">
                <h2 className='font-bold'>Your destination is waiting.Your van is ready.</h2>
            </div>
                <Link className="cta_btn mt-8 " to="/vans">Explore our vans</Link>
            </div>
        </div>

    </div>
  )
}

export default AboutPageCom