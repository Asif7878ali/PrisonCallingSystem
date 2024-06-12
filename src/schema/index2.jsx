import * as Yup from 'yup';

export const logUpSchema= Yup.object({
    userid : Yup.string().min(3).max(20).required("Please Enter Name"),
    Password : Yup.string().min(6).max(15).required("Enter Password"),
});