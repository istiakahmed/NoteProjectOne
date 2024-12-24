import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdColorize } from "react-icons/md";
import { IoColorPaletteSharp } from "react-icons/io5";


const Popup = ({showValue, popCross}) => {
    const [showColor, setColor] = useState(false);

  return (
    <>
      <div className={`${showValue? 'block w-full' : 'hidden'}  transition-all duration-[.5s] flex justify-center items-center min-h-screen  bg-[#00000070] absolute top-0 right-0`}>
        <div>
        <button onClick={popCross} className='text-2xl absolute top-[10px] right-[10px] hover:rotate-[180deg] transition-all duration-[.4s] dark:text-red-500'>
            
            <RxCross2 />
            </button>

        </div>
        {/* ========= input fields ======== */}
        <div className='w-full md:w-[500px] h-[500px] bg-white rounded-lg p-[20px] dark:bg-black transition-all duration-[.4s]'>
            <div>
            <h2 className='text-2xl font-poppins text-gray-500 font-semibold dark:text-white mb-3'>Title</h2>
            <input placeholder='title...' className='w-full h-[40px] bg-gray-100 outline-none text-lg font-semibold text-black dark:' type="text" />
            <h2 className='text-2xl font-poppins text-gray-500 font-semibold dark:text-white mb-3'>Note</h2>
            <textarea placeholder='note...' className='w-full h-[400px] bg-gray-100 outline-none text-lg font-semibold text-black dark:' type="text" />
            </div>

            
        {/* ========== color fields =========== */}
         <div className='mt-5'>
            <div className='colors mb-5 flex gap-2 items-center relative overflow-hidden'>
             <MdColorize onClick={()=>setColor(!showColor)} className='text-xl text-gray-500 dark:text-white hover:rotate-180 transition-all duration-[.4s]' />

             <div className={`absolute flex gap-1 top-0 ${showColor? 'left-9' : 'left-[-115px]'} transition-all duration-[.4s]`}>
             <button className='w-[20px] h-[20px] rounded-full bg-[#F26B0F]'></button>
             <button className='w-[20px] h-[20px] rounded-full bg-[#81BFDA]'></button>
             <button className='w-[20px] h-[20px] rounded-full bg-[#0A97B0]'></button>
             
             <div className='w-[20px] h-[20px] rounded-full border-2 '>

                <label htmlFor="colors">
                <IoColorPaletteSharp className='text-red-400 text-lg' />

                </label>
                <input className='hidden' id='colors' type="color" />

             </div>

             </div>



            </div>

         </div>
            

        </div>


        {/* ========== color fields =========== */}
        
        

      </div>
    </>
  )
}

export default Popup
