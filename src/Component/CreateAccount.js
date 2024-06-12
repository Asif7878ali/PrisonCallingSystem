import React from "react"
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {notification} from 'antd'


const CreateAccount = () => {

  const emptyValues = {
    name: "",
    email: "",
    password: "",
    education: "",
    city: '',
    number : '',
    Mobnumber :'',
  }

  const regSchema = Yup.object({
    name : Yup.string().min(3).max(30).required('Enter Your Name'),
    email : Yup.string().email().required('Enter Your E-Mail'),
    password : Yup.number().min(8).required('Enter Password'),
    education : Yup.string().required('Select Education'),
    city : Yup.string().required('Select City'),
    number : Yup.string().required('Select Country Code'),
    Mobnumber : Yup.number().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(10).required('A phone number is required')
  })

  const {values , touched , errors , handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues : emptyValues,
      validationSchema : regSchema,
     onSubmit : (values, action) =>{
          console.log('React Data', values);
          action.resetForm();
          notification.success({
            message : 'Registration Succesfull'
          })
     }
  })


  return (
    <>
       
         <form onSubmit={handleSubmit}>
        <div className='pl-[35rem]'> 
            <div className='bg-gray-300 mt-5  lg:w-[28rem] lg:h-[30rem] shadow-xl'>
                    <div className=' mt-10 text-2xl'>
                      <h1 className='ml-9'>Create An Account</h1>
                      <button className='bg-red-600 text-white ml-6 mt-5 text-lg hover:bg-red-700 lg:w-[25rem]'>Google</button>
                       <input className='border border-black mt-3 ml-6 lg:w-[25rem]' type="email" name='email' placeholder='E-mail'
                        value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                          { errors.email && touched.email ? <p className="text-red-700">{errors.email}</p> : null}

                       <input  className='border border-black mt-3 ml-6 lg:w-[25rem]' type="text" name='name' placeholder='Full Name'
                       value={values.name} onBlur={handleBlur} onChange={handleChange}/>
                         { errors.name && touched.name ? <p className="text-red-700">{errors.name}</p> : null}

                       <input className='border border-black mt-3 ml-6 lg:w-[25rem]' type="password" name='password' placeholder='  Password' value={values.password} onBlur={handleBlur} onChange={handleChange}/>
                       { errors.password && touched.password ? <p className="text-red-700">{errors.password}</p> : null}
                       <select name="education" className='border border-black mt-3 ml-6 lg:w-[25rem]' value={values.education} onBlur={handleBlur} onChange={handleChange}>
                        <option value="">  ----Highest Educatiom Level-----</option>
                        <option value="6th - 9th Class">6th - 9th Class</option>
                        <option value="10th Class">10th Class</option>
                        <option value="11th Class">11th Class</option>
                        <option value="12th Class">12th Class</option>
                        <option value="Gruduate Degree">Gruduate Degree / Diploma</option>
                        <option value="Post Gruadute Degree">Post Gruadute Degree</option>
                        <option value="Working Profesnal">Working Profesnal</option>
                       </select>
                       { errors.education && touched.education ? <p className="text-red-700">{errors.education}</p> : null}

                       <select name="city" className='border border-black mt-3 ml-6 lg:w-[25rem]' value={values.city} onBlur={handleBlur} onChange={handleChange}>
                        <option value="">  ---Select Your City-----</option>
                        <option value="6th - 9th Class">Delhi</option>
                        <option value="10th Class">Ghaziabad</option>
                        <option value="11th Class">Meerut</option>
                        <option value="12th Class">Rohtak</option>
                        <option value="Gruduate Degree">Sonipat</option>
                        <option value="Post Gruadute Degree">Lucknow</option>
                        <option value="Working Profesnal">Aligarh</option>
                       </select>
                       { errors.city && touched.city ? <p className="text-red-700">{errors.city}</p> : null}

                       <select name="number" className='border border-black mt-3 ml-6 lg:w-[25rem]'value={values.number} onBlur={handleBlur} onChange={handleChange}>
                        <option value="">---Select Code---</option>
                        <option value="6th - 9th Class">Indai (+91)</option>
                        <option value="10th Class">Pakistan (+32)</option>
                        <option value="11th Class">Iran (+22)</option>
                        <option value="12th Class">Iraq (+56)</option>
                        <option value="Gruduate Degree">Sri Lanka (+45)</option>
                        <option value="Post Gruadute Degree">Nepal (+98)</option>
                        <option value="Working Profesnal">Bangladesh (+67)</option>
                       </select>
                       { errors.number && touched.number ? <p className="text-red-700">{errors.number}</p> : null}

                       <input className='border border-black mt-3 ml-6 lg:w-[25rem]' type="number" name='Mobnumber' placeholder='  Mobile Number'value={values.Mobnumber} onBlur={handleBlur} onChange={handleChange} />
                       { errors.Mobnumber && touched.Mobnumber ? <p className="text-red-700">{errors.Mobnumber}</p> : null}
                       <button className='bg-[#40b1d1] text-white font-bold text-lg rounded-md mt-3 ml-6 lg:w-[25rem]' type='submit'>CREATE NEW ACCOUNT</button>
                    </div>
            </div>
        </div>
        </form>
       
    </>
  )
}

export default CreateAccount
