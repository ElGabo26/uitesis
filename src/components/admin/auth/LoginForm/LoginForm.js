import React from 'react'
import {Form} from "semantic-ui-react"
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import {initialValues,validationSchema} from './LoginForm.form'
import {Auth} from '../../../../api'
import {useAuth} from '../../../../hooks'
const authController=new Auth()

export function LoginForm() {
  const {login}=useAuth()
  const navigate=useNavigate()
  const formik= useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue)=>{
      try {
        
        const res= await authController.login(formValue)
        
        authController.setAccessToken(res.accessToken)
        authController.setRefreshToken(res.refreshToken)
        login(res.accessToken)
        navigate('./home')

      } catch (error) {
          if(error.msg){
            alert(error.msg)
          }else{
            console.log(error)
          }
      }
    }
  });
  return (
    <Form className='loginForm' onSubmit={formik.handleSubmit}>
      <Form.Input name="email" placeholder='email' onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email}/>
      <Form.Input name="password" placeholder='password' type="password" onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password}/>

      <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>
            Login
        </Form.Button>
    </Form>
  )
}
