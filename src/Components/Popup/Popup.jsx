import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdColorize } from "react-icons/md";
import { IoColorPaletteSharp } from "react-icons/io5";
import './Popup.css'
import { getDatabase, push, ref, set } from "firebase/database";



const Popup = ({showValue, popCross}) => {
    const [showColor, setColor] = useState(false);
    const [todoData, setTodoData] = useState({todoTitle:'' , todoNote:'' , todoError:'' })

    // =========== Firebase variables =========
    const db = getDatabase();

    const handleTodo =() =>{
      if(todoData.todoTitle ==''){
        setTodoData ((prev) =>({...prev, todoError:'Enter Title'}))
      }
      else if(todoData.todoNote ==''){
        setTodoData ((prev) =>({...prev, todoError:'Enter Note'}))
      }
      else{
        set(push(ref(db, 'Notes/')), {
          todoTitle: todoData.todoTitle,
          todoNote: todoData.todoNote
          
        });
      }
    }

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
              <p className='text-xl text-red-500 font-poppins font-medium '>{todoData.todoError}</p>
            <h2 className='text-2xl font-poppins text-gray-500 font-semibold dark:text-white mb-3'>Title</h2>
            <input onChange={(e)=>setTodoData((prev) =>({...prev, todoTitle:e.target.value}))} placeholder='title...' className='w-full h-[40px] bg-gray-100 outline-none text-lg font-semibold text-black dark:' type="text" />
            <h2 className='text-2xl font-poppins text-gray-500 font-semibold dark:text-white mb-3'>Note</h2>
            <textarea onChange={(e)=>setTodoData((prev) =>({...prev, todoNote:e.target.value}))} placeholder='note...' className='w-full h-[250px] bg-gray-100 outline-none text-lg font-semibold text-black dark:' type="text" />
            </div>

            
        {/* ========== color fields =========== */}
        <div className='mt-5'>


         <div className=''>
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

         <div className='saveBtn'>
      
            <button onClick={handleTodo} className="Btn">
              <span className="text">Save</span>
              <span className="svgIcon">
                <svg fill="white" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
              </span>
            </button>
         </div>


        </div>
            

        </div>


        {/* ========== color fields =========== */}
        
        

      </div>
    </>
  )
}

export default Popup
