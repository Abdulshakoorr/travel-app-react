import React from 'react'
import {NavLink ,Link} from 'react-router-dom'
import logo from '../assets/images/logo.png.webp'
const Navbar = () => {
  return (
    <div className='bg-slate-50 py-3 shadow-md px-8 md:px-36 flex items-center justify-between'>
      <Link to='/'> <div className="logo cursor-pointer w-24"><img src={logo} alt="logo" /></div></Link>
        <ul className='flex items-center justify-center gap-2'>
            <NavLink to='/' 
            className={({isActive}) => isActive ? "border-b-2 border-spacing-2 border-red-400 text-orange-500" :""}
            >Home</NavLink>
            <NavLink to='/about' 
            className={({isActive}) => isActive ? "border-b-2 border-spacing-2 border-red-400 text-orange-500" :""}
            >About</NavLink>
            <NavLink to='/vans' 
            className={({isActive}) => isActive ? "border-b-2 border-spacing-2 border-red-400 text-orange-500" :""}
            >Vans</NavLink>
            <NavLink to='/host' 
            className={({isActive}) => isActive ? "border-b-2 border-spacing-2 border-red-400 text-orange-500" :""}
            >Host</NavLink>
        </ul>
    </div>
  )
}

export default Navbar