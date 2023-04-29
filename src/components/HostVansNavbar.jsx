import React from "react";
import { NavLink } from "react-router-dom";

const HostVansNavbar = () => {
  return (
    <nav className="px-16 flex space-x-4">
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-spacing-2 border-red-400 text-orange-500"
            : ""
        }
      >
        Details
      </NavLink>
      <NavLink
        to="pricing"
        
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-spacing-2 border-red-400 text-orange-500"
            : ""
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="photos"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-spacing-2 border-red-400 text-orange-500"
            : ""
        }
      >
        Photos
      </NavLink>
    </nav>
  );
};

export default HostVansNavbar;
