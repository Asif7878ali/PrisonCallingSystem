import React from 'react'
import { notification } from 'antd'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Logut = () => {

    const dispatch = useDispatch();

    const handleNotification = () => {
        
        dispatch({
           type: 'prisons/setUserData',
           payload: null
        })
        dispatch({
           type: 'prisons/setToken',
           payload: null
        })
        dispatch({
           type: 'prisons/setNumber',
           payload: null
        })
        notification.success({
           message: 'Logout Succesfully',
        });
     }


  return (
    <>
     <button className='lg:ml-[25rem] shadow-lg rounded-md bg-blue-500 w-20 font-bold text-white hover:bg-blue-800 ' onClick={handleNotification}>
        <Link to="/">Logout</Link>
     </button>
     </>
  )
}

export default Logut
