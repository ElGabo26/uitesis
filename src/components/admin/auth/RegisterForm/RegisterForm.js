import React, { useState } from 'react'
import {Form} from 'semantic-ui-react'
import {useFormik} from 'formik'
import {initialValues,validationSchema} from "./RegisterForm.form"
import {Auth} from "../../../../api"
import './RegisterForm.scss'

const authController = new Auth()

export function RegisterForm(props) {
    const {openLogin}=props
    const[error, setError]=useState("")
    const formik= useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,

        onSubmit: async (formValue)=>{
            try {
                setError("")
                await authController.registerDoctor(formValue)
                openLogin()
            } catch (error) {
               console.log(error)
               
            }
        }
    })
  return (
     
    <Form className='register_form' onSubmit={formik.handleSubmit}>
        <Form.Group inline>
        <Form.Input name="firstName" placeholder="Primer nombre" onChange={formik.handleChange} value={formik.values.firstName} error={formik.errors.firstName}/>
        <Form.Input name="lastName" placeholder="Segundo nombre" onChange={formik.handleChange} value={formik.values.lastName} error={formik.errors.lastName}/>
        </Form.Group>
        <Form.Input name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email}/>
        <Form.Input name="medID" placeholder="Código profesional" onChange={formik.handleChange} value={formik.values.medID} error={formik.errors.medID}/>
        <Form.Input name="password" type='password' placeholder="Contraseña" onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password}/>
        <Form.Input name="repeatPassword" type='password' placeholder="Repita su contraseña" onChange={formik.handleChange} value={formik.values.repeatPassword} error={formik.errors.repeatPassword}/>
        <Form.Checkbox name="privacityConditions" label="Estoy de acuerdo con los terminos y condiciones" 
        onChange={(_,data)=>
            formik.setFieldValue('privacityConditions',data.checked)
        } 
        checked={formik.values.privacityConditions}
        error={formik.errors.privacityConditions}/>
        <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>
            Crear usuario
        </Form.Button>  
        <p className='register_form__error'>
            {error}
        </p>
    </Form>
  )
}
