import React, { useState } from 'react'
import {Form} from  'semantic-ui-react'
import {useFormik} from "formik"
import {useAuth} from "../../../hooks"
import { initialValues, validationSchema } from './patientsForm.form'
import { Patient } from '../../../api/patient'
import './patientsForm.scss'


const patientController= new Patient()

export  function PatientsForm(props) {

    const { close, onReload, user} = props;
    const {accessToken} = useAuth()
    const [msg, setMsg]=useState('')

    const formik= useFormik({
        initialValues:initialValues(user),
        validationSchema:validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
          try {
             if(!user){
                await patientController.createPatient(accessToken,formValue)
             }else{
                await patientController.updatePatient(accessToken,formValue,user._id)
             }
            
            setMsg(user?"Usuario actualizado":"Usuario creado")
            onReload()
            setTimeout(close,1500)
            
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
    <Form className='patient-form' onSubmit={formik.handleSubmit}> 
        <p className='patient-form__msg'>
            {msg}
        </p>
        <Form.Input name='firstName' placeholder='Primer nombre' onChange={formik.handleChange} value={formik.values.firstName} error={formik.errors.firstLastName}/>
        <Form.Group widths='equal'>
            <Form.Input name='firstLastName' placeholder='Primer apellido' onChange={formik.handleChange} value={formik.values.firstLastName} error={formik.errors.firstLastName} />
            <Form.Input name='secondLastName' placeholder='Segundo apellido' onChange={formik.handleChange} value={formik.values.secondLastName} error={formik.errors.secondLastName}/>
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input name="ciNumber" placeholder='CI' onChange={formik.handleChange} value={formik.values.ciNumber} error={formik.errors.ciNumber}/>
            <Form.Input name="numberClinicalHistory" placeholder='Historial médico' onChange={formik.handleChange} value={formik.values.numberClinicalHistory} error={formik.errors.numberClinicalHistory}/>
        </Form.Group>
        <Form.Input name='dateBirth' placeholder="YYYY/MM/DD" onChange={formik.handleChange} value={formik.values.dateBirth} error={formik.errors.dateBirth}/>
        
        <Form.Button primary type="submit" fluid loading={formik.isSubmitting}>
            {!user? "Crear Paciente":"Actualizar Paciente"}
        </Form.Button>

    </Form>
  )
}

