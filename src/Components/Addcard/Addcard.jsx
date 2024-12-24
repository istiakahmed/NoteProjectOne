import React, { useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import Popup from '../Popup/Popup';

const Addcard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <div onClick={() => setShow(true)} className='w-[200px] h-[200px] border-2 border-gray-400 flex justify-center items-center text-2xl text-[#9AA6B2]'>
      <IoAddCircleOutline />
      <h2>Add</h2>
    </div>
      <Popup showValue={show} popCross={()=>setShow(false)} />
    </>
  )
}

export default Addcard
