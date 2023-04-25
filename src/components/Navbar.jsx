import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-slate-50 py-3 shadow-md px-8 md:px-36 flex items-center justify-between'>
      <Link to='/'> <div className="logo cursor-pointer">VEN Life</div></Link>
        <ul className='flex items-center justify-center gap-2'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </ul>
    </div>
  )
}

export default Navbar