import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  //  =========== taking data from redux
  const reData = useSelector((state)=>state.CurrentUser.value)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout =()=>{
    navigate('/login')
    localStorage.removeItem('dataUser')
    dispatch(reData(null))
  }

  // ================= dark mood apply=========

  const [toggleValue, setToggleValue] = useState(false);
  // ========== saving the mode when user  visitor
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light";
    localStorage.setItem("mode", savedMode);
    document
      .querySelector("html")
      .classList.toggle("dark", savedMode === "dark");
  }, []);
  // ========== changing the mode on toggle
  const handelMode = () => {
    if (localStorage.getItem("mode") == "light") {
      localStorage.setItem("mode", "dark");
      document.querySelector("html").classList.add("dark");
      setToggleValue(!toggleValue);
    } else {
      localStorage.setItem("mode", "light");
      document.querySelector("html").classList.remove("dark");
      setToggleValue(!toggleValue);
    }
  };
  // ========== dark mood end

  return (
    <>
    <nav className='main_menu transition-all duration-[.4s] dark:bg-black'>
        <div className="container"> 
           <div className='flex justify-end'>
            <div className='userProfile flex items-center gap-3'>
              <div className='userPhoto overflow-hidden border-2 border-black w-[50px] h-[50px] rounded-full bg-slate-500'>
                <img src={reData?.photoURL} alt="" />
              </div>
              <h2 className='text-xl font-semibold dark:text-white '>{reData?.displayName}</h2>
              <FaSignOutAlt onClick={handleLogout} className='text-2xl text-slate-500'/>

            </div>
            {/* =============== dark mood  */}
            {localStorage.getItem("mode") == "light" ? (
          <button
            className="p-2 bg-black text-xl text-white rounded-sm"
            onClick={handelMode}
          >
            Dark
          </button>
        ) : (
          <button
            className='p-2 bg-purple-500 text-white rounded-sm text-xl'
            onClick={handelMode}
          >
            Light
          </button>
        )}
        {/* =============== dark mode end ======= */}
            </div> 
            
        </div>

    </nav>
    </>
  )
}

export default Navbar
