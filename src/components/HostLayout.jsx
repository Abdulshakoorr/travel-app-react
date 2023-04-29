import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    return (
        <div className="px-8 sm:16 md:px-24">
            <nav className="host-nav flex space-x-6 ">
                <NavLink to="/host"
                 className={({isActive}) => isActive ? "border-b-2 border-spacing-2 border-red-400 text-orange-500" :""}
                >Dashboard</NavLink>
                <NavLink to="/host/income"
                 className={({isActive}) => isActive ? "border-b-2 border-spacing-2 border-red-400 text-orange-500" :""}
                >Income</NavLink>
                <NavLink to="/host/reviews"
                 className={({isActive}) => isActive ? "border-b-2 border-spacing-2 border-red-400 text-orange-500" :""}
                >Reviews</NavLink>
                <NavLink to="/host/vans"
                 className={({isActive}) => isActive ? "border-b-2 border-spacing-2 border-red-400 text-orange-500" :""}
                >Host Vans</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}