import React, { useState, useEffect } from "react";
import moment from 'moment'
import { AiOutlineClockCircle, AiFillCalendar } from 'react-icons/ai'

const DateTime = () => {
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <>
    <div className="md:flex lg:flex lg:ml-[13rem] space-x-8">
     <div className="flex space-x-2">
     <AiOutlineClockCircle className="text-blue-700" size={25}/>
     <p className="text-blue-500 md:mt-0 font-bold">{moment(time).format('h:mm:ss a')}</p>
     </div>
     
     <div className="flex space-x-2">
     <AiFillCalendar className="text-blue-700" size={25}/>
     <p className="text-blue-500  md:mt-0 font-bold">{moment().format('D-MMM-YYYY')}</p>
     </div>
     </div>
   {/* {login?
   {(!connect) && logout}
   : 
   timer } */}
      
    </>
  )
}

export default DateTime
