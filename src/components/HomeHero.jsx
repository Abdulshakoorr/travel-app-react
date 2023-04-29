import React from 'react'
import { Link } from 'react-router-dom'
const HomeHero = () => {
  return (
    <div className='bg-hero h-[500px] sm:h-[75vh] md:min-h-[90vh] flex items-center justify-center gap-4 flex-col w-full '>
        <h1 className='md:text-4xl font-bold text-slate-50 text-center px-8 md:px-96'>You got the <b className='uppercase tracking-[1.5rem]'> travel</b> plans, we got the travel vans.</h1>
        <p className='text-slate-50 text-center md:px-[28rem]'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip..</p>
        <Link className='bg-orange-400 py-2 px-6 font-semibold tracking-widest hover:shadow-2xl hover:scale-110 transition-all hover:bg-orange-600 duration-150 ease-linear text-white ' to='/vans'>Find Your Van</Link>
    </div>
  )
}

export default HomeHero