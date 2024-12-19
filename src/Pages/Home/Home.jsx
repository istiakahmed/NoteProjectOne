import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
// // ======= Dark mood start=======
//  // ========== state
//  const [toggleValue, setToggleValue] = useState(false);
//  // ========== saving the mode when user  visitor
//  useEffect(() => {
//    const savedMode = localStorage.getItem("mode") || "light";
//    localStorage.setItem("mode", savedMode);
//    document
//      .querySelector("html")
//      .classList.toggle("dark", savedMode === "dark");
//  }, []);
//  // ========== changing the mode on toggle
//  const handelMode = () => {
//    if (localStorage.getItem("mode") == "light") {
//      localStorage.setItem("mode", "dark");
//      document.querySelector("html").classList.add("dark");
//      setToggleValue(!toggleValue);
//    } else {
//      localStorage.setItem("mode", "light");
//      document.querySelector("html").classList.remove("dark");
//      setToggleValue(!toggleValue);
//    }
//   };
  //  ===========dark mood end=========

  return (
    <>
    <div className='container transition-all duration-[.4s] dark:bg-black'>
      <h1 className='text-xl font-medium text-black dark:text-white'> Home page</h1>
    </div>
    </>
  )
}

export default Home
