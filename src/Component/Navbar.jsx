import DateTime from "./DateTime";
import Logut from "./Logut";
import { useSelector } from "react-redux";
import {useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const { apiData } = useSelector((state) => ({
    apiData: state.prisons.apiData
  }))
    // console.log('NavBar Componenet Data is',apiData)
  
    const location = useLocation();
    const [numdata, setNumdata] = useState(location.state?.props);
    useEffect(() => {
      setNumdata(numdata);
      // console.log("State Variable Navbar is", numdata)
  },[location.state?.props])

  return (
    <>
       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
             <img className='h-12 w-14' src="https://d1fdloi71mui9q.cloudfront.net/4pWy64jwQpuU1mo3DXix_OutYPC2MzRrQIGsH"/>
          </a>
      <div className="lg:ml-[31rem] items-center text-base justify-center">
          <a className="lg:text-2xl sm:text-sm font-bold">Tamil Nadu Prisons Caliing System</a>
      </div>
     {apiData ? <> {numdata?  <DateTime/>:<Logut/> } </> : <DateTime/>}
     </div> 
    </>
  )
}

export default Navbar
