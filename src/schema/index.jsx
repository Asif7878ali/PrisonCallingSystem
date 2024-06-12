import * as Yup from 'yup';

export const signUpSchema= Yup.object({
      name : Yup.string().min(3).max(20).required("Plaese Enter Name").matches(/^[a-zA-Z]+$/,'Enter a valid name'),
      email : Yup.string().email().required("Enter Your Email"),
      fathername : Yup.string().min(3).max(20).required("Enter Your Fater Name").matches(/^[a-zA-Z]+$/,'Enter a valid Father name'),
      address : Yup.string().min(10).max(40).required("Plaese Enter Address"),
      date : Yup.date().required('Select a Date').default(() => new Date()),
      gender : Yup.string().required("Select a Gender"),
      password : Yup.string().min(8).max(15).required("Enter Password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                                           "Must contain at least one Lowercase, Uppercase, Number, Special Character"),
      firmpassword : Yup.string().required().oneOf([Yup.ref('password'),null],'Password Must Match')
});

