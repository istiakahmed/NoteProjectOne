import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";


const Singlecard = ({}) => {

  const [notes, setNotes] = useState([])


  // ================= fire base read operation for getting data 
  //  ======== firebase variables=====
  const db = getDatabase();


  // =========== firebase read function====

  useEffect(()=>{
    const starCountRef = ref(db, 'Notes/');
       onValue(starCountRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item)=>{
              arr.push(item.val())
            })
            setNotes(arr)
       });
   }, []);



  return (
    <>
    <div className='flex flex-wrap gap-5'>
      {
        notes.map((item)=>(

    <div className='singleCard w-[250px] h-[250px] rounded-lg border-2 border-gray-600 p-2'>
        <h2 className='text-xl font-medium text-gray-500'>{item.todoTitle}</h2>
        <p>{item.todoNote}</p>
     </div>
        ))
      }


    </div>
    </>
  )
}

export default Singlecard
