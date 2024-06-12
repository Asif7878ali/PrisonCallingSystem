import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { notification } from 'antd'
import { useDispatch } from 'react-redux'
import Navbar from './Navbar'


const Home = () => {
  // Log In API
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passwordShown, setPasswordShown] = useState(false);
  const clickShowPassword = () => {
    setPasswordShown(!passwordShown)
  }

  const handlelog = async () => {
    console.log(username, password)
    await axios.post('https://demo.collaberus.com:8014/api/v1/prisoner/login/', {
      username,
      password
    })
      .then(result => {
           console.log(result.data)
           navigate("/Page22")

        if (result.data.success) {
          dispatch({
            type: 'prisons/setUserData',
            payload: result.data
          })
          dispatch({
            type: 'prisons/setToken',
            payload: result.data.data.token
          })
          notification.success({
            message: 'Login Succesfully',
          });
        }
      })
      .catch(error => {
        console.log("Error", error)
        notification.error({
          message: 'Invalid User Or Password',
        });
      })
  }

  return (
    <>
    
    <Navbar/>
     <div className=''>
        <h1 className='text-4xl mt-14 font-bold text-center'>Prisons LogIn</h1>
        <form>
          <div className='flex flex-col bg-white mb-8 mt-14 ml-[600px] text-lg relative rounded-xl w-1/4'>
            <label className='mb-3 font-bold text-2xl' htmlFor="username">UserId</label>
            <input className='h-12 px-4  border-2 border-black rounded-lg' name='username' type="text" placeholder='UserId' value={username} onChange={(e) => setUsername(e.target.value)} />
            {/* { errors.userid && touched.userid ? (<p className='form-error text-red-600'>{errors.userid}</p>) : null } */}

            <label className='mb-3 mt-3 font-bold text-2xl' htmlFor="password">Password</label>
            <input className='h-12 px-4 mt-3 border-2 border-black rounded-lg' name='password' type={passwordShown ? 'text' :'password'} placeholder='
            Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {/* { errors.Password && touched.Password ? (<p className='form-error text-red-600'>{errors.Password}</p>) : null } */}
            <div className='flex mt-2 space-x-3'>
                <button onClick={clickShowPassword}><input type="checkbox" name="checkbox"/></button>
                 <label htmlFor="checkbox">Show Password</label>
              </div>

            <div className=' cursor-pointer h-9 w-60 rounded-lg text-center font-bold mt-4 ml-16 bg-blue-600 text-white hover:bg-blue-700 hover:text-black'>
              <button className='mt-1' ><Link onClick={handlelog} to="">login</Link></button>
            </div>

            <div className='cursor-pointer h-12 w-80 rounded-lg text-center font-bold mt-4 ml-6 bg-green-600 text-white hover:bg-green-700 hover:text-black'>
              <p className='mt-2'>
                <Link to="CreateAccount">Create Account</Link>
              </p>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default Home
