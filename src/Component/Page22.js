import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { notification } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar'


const Page22 = () => {
   const dispatch = useDispatch();

   const { apiData, token, recentNumber } = useSelector((state) => ({
      apiData: state.prisons.apiData,
      token: state.prisons.token,
      recentNumber: state.prisons.recentNumber
   }))
   console.log("redux api data", apiData)
   console.log('redux Token', token)
   console.log('redux recentcall api data', recentNumber)
   //Api data
   const fName = useSelector((state) => state.prisons.apiData.data.prisoner_data.first_name)
   console.log('the first name is', fName)
   const lName = useSelector((state) => state.prisons.apiData.data.prisoner_data.last_name)
   console.log('the Last name is', lName)
   const curBal = useSelector((state) => state.prisons.apiData.data.currenct_balance)
   console.log('curreent Balance', curBal)
   const phone_Number = useSelector((state) => state.prisons.apiData.data.prisoner_data.phones)
   console.log('Phone num', phone_Number)

   const [recentdata, setRecentdata] = useState([])
   const recentapi = async () => {
      await axios.post('https://demo.collaberus.com:8014/api/v1/prisoner/get_recent_calls/', {}, {
         headers: { Authorization: `Token ${token}` }
      })
         .then(response => {
            console.log(response.data)
            dispatch({
               type: 'prisons/setNumber',
               payload: response.data.data
            })
            setRecentdata(response.data.data)
         })
         .catch(error => {
            console.log("The Error of Recent Calls API", error)
         })
   }

   useEffect(() => {
      recentapi();
   }, [])

   

   const showNotificationPopUp =() => [
      notification.success({
         message : 'Connect Call'
      })
   ]

   return (
      <>
      <Navbar/>
          <div className=' md:flex lg:flex'>
            <div className=' h-[550px] ml-10 w-96 bg-blue-200 rounded-lg'>
               <div className='font-bold'>
                  <div className=''>
                     <p className='pl-9 text-2xl'>Hello!</p>
                     <div className='flex space-x-1'>
                        <h1 className='text-yellow-700 pl-9  text-4xl'>{fName}</h1>
                        <h1 className=' text-yellow-700 text-4xl'>{lName}</h1>
                     </div>
                  </div>

               </div>

               <div className='font-bold mt-28 pl-9'>
                  <p className='text-2xl'>Current Ballance</p>
                  <h1 className='text-yellow-700 mt-2 text-4xl'>{curBal}</h1>
               </div>

               <div className='mt-40 ml-16 w-64 text-3xl bg-indigo-900 rounded-lg  text-white'>
                  <p>Touch any of these alowed No. call them</p>
               </div>
            </div>
            {/*Container 2 */}

            <div className=' h-[550px] ml-36 w-96 bg-blue-200 rounded-lg'>
               <div className='font-bold'>
                  <div className=''>
                     <p className='pl-24 text-blue-900 mt-5 text-2xl'>Allowed Number</p>
                  </div>
               </div>

               <div>{phone_Number && phone_Number.map((item, index) => (
                  <button onClick={showNotificationPopUp} key={index} className=' bg-blue-600 text-black font-bold ml-28 shadow-lg mt-10 rounded-md px-7 py-2'>
                     <Link to='/Page3' state={{ props: item.number }}>{item.number}</Link>
                  </button>
               ))}
                 
               </div>  
              
            </div>


            {/* Comtailner 3 */}
            <div className='bg-blue-200 ml-36 h-[550px] w-96 rounded-md'>

               <div className=''>
                  <table className='border-collapse'>

                    
                     <thead className=''>
                        <tr>
                           <td className='text-yellow-700 font-bold  text-center w-32'>Date-Time</td>
                           <td className='text-yellow-700 font-bold text-center w-32'>Number</td>
                           <td className='text-yellow-700 font-bold text-center w-32'>Calls</td>
                        </tr>
                     </thead>
                     {recentdata.map((item, index) => {
                        return (
                           <tr className='' key={index}>
                              <td className=' text-center'> {moment(item.start_time).format('D-MM-YYYY, h:mm:ss a')} </td>
                              <td className=' text-center'>{item.number_dialed}</td>
                              <td className=' text-center'>{item.bill_seconds + " Min"}</td>
                           </tr>
                        )
                     })}

                  </table>
               </div>
            </div>

         </div>
      </>
   )
}

export default Page22
