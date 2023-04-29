import React from 'react'
import { Link } from 'react-router-dom'
import about from '../assets/images/about.png.webp'

const AboutPageCom = () => {
  return (
    <div className='py-8 px-4  md:px-16 min-h-screen flex items-center justify-center  flex-col sm:flex-row gap-4 sm:gap-8'>
        <div className="basis-1/3 flex gap-4 flex-col">

                <h1 className='text-3xl md:text-5xl font-bold'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            
                <h2 className='font-bold'>Your destination is waiting.Your van is ready.</h2>
        
                <Link className="cta_btn mt-8 block" to="/vans">Explore our vans</Link>
        </div>
        <div className="img basis-2/4 ">
            <img src={about} alt="about_img" />
        </div>

    </div>
  )
}

export default AboutPageCom