import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineNoteAlt } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

const SideNavbar = () => {
  return (
    <>
     <nav className='w-[200px] bg-gray-100 h-screen dark:border-r-2 dark:border-gray-400 transition-all duration-[.4s] dark:bg-black'>
      <h2 className='text-xl font-bold text-gray-400 p-2 mb-[20px]'>Notes</h2>
      <ul>
        <li className='p-2'>
            <NavLink
                to="/"
                className={({ isActive }) => [isActive ? "flex items-center gap-2 text-xl font-poppins font-semibold text-brandColor " : "dark:text-white flex items-center gap-2 text-xl font-poppins font-semibold text-black",].join(" ")
                }
              >
               <MdOutlineNoteAlt /> All Notes
            </NavLink>

        </li>

        <li className='p-2'>
            <NavLink
                to="/pinnote"
                className={({ isActive }) => [isActive ? "flex items-center gap-2 text-xl font-poppins font-semibold text-brandColor " : "dark:text-white flex items-center gap-2 text-xl font-poppins font-semibold text-black",].join(" ")
                }
              >
               <MdOutlinePushPin /> Pin
            </NavLink>

        </li>

        <li className='p-2'>
            <NavLink
                to="/trash"
                className={({ isActive }) => [isActive ? "flex items-center gap-2 text-xl font-poppins font-semibold text-brandColor " : "dark:text-white flex items-center gap-2 text-xl font-poppins font-semibold text-black",].join(" ")
                }
              >
               <IoTrashOutline /> Trash
            </NavLink>

        </li>
        
      </ul>

     </nav>
    
    </>
  )
}

export default SideNavbar
