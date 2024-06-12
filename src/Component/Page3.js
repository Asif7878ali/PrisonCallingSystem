import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {notification} from 'antd'
import Navbar from './Navbar'


const Page3 = () => {

  const location = useLocation();
  const [numdata, setNumdata] = useState(location.state?.props);
  

  useEffect(() => {
        setNumdata(numdata);
        console.log("State Variable Number is", numdata)
    },[location.state?.props])

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  var time;

  useEffect(() => {
    time = setInterval(() => {
      setSeconds(seconds + 1)
      if (seconds === 59) {
        setMinutes(minutes + 1)
        setSeconds(0);
      }
    }, 1000)
    return () => clearInterval(time)
  })

  const handleNotification = () =>{
      notification.error({
        message : 'Disconnect Call',
       });
    }

  return (
    <>
    <Navbar/>
      <div className='mb-44'>
        <div className='p-12 mt-32 max-w-sm mx-auto bg-white rounded-xl border-2 border-blue-500 space-x-4'>
          <div className='font-bold text-blue-500'>
            <p className='ml-10'>Calling to:- {numdata}</p>
          </div>

          <div className='font-bold text-blue-500'>
            <p className='ml-12 mt-3'>Duration:- {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
          </div>
         </div>

        <div className=' h-10 ml-[42rem] w-48 rounded-lg text-center shadow-xl font-bold mt-8 bg-blue-500 text-black hover:bg-blue-700'>
          <button onClick={handleNotification} className='mt-2'>
            <Link to="/Page22">Disconnect Call</Link>
          </button>
        </div>

      </div>
    </>
  )
}

export default Page3
