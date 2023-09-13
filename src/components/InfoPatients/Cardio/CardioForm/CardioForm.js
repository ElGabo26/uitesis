import React from 'react'
import {Form} from 'semantic-ui-react'
import {useFormik} from 'formik'
import { useParams } from 'react-router-dom'
import { initialValues, validationSchema } from './cardioForm.form'
import { Cardio } from '../../../../api/infoPatients'
import {useAuth} from '../../../../hooks'

const cardioController= new Cardio();

export function CardioForm(props) {
  const {close, onReload, file}=props
  const {accessToken}= useAuth()
  const {id}=useParams() //id del paciente
  

    const formik= useFormik({
        validateOnChange:false,
        initialValues:initialValues(file),
        validationSchema:validationSchema(),
        onSubmit:async (formValue)=>{
          try {
            if(!file){
              await cardioController.createCardio(formValue,accessToken,id)
            }else{
              await cardioController.updateCardio(formValue,accessToken,file._id)
            }
            
            onReload()
            close()
            
          } catch (error) {
            console.log(error)
          }

        }

    })

  return (
    <Form className='cardio-form' onSubmit={formik.handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input name="diastolicPressure" placeholder='Presión diastólica'
         onChange={formik.handleChange}
         value={formik.values.diastolicPressure} 
         error={formik.errors.diastolicPressure}
        />
        <Form.Input name="systolicPressure" placeholder='Presión sistólica'
         onChange={formik.handleChange}
         value={formik.values.systolicPressure} 
         error={formik.errors.systolicPressure}
        />
      </Form.Group>
        <Form.Input name="meanArterialPressure" placeholder='Promedio presión arterial'
         onChange={formik.handleChange}
         value={formik.values.meanArterialPressure} 
         error={formik.errors.meanArterialPressure}
        />
        <Form.Input name="spO2" placeholder='porcentaje de spO2'
         onChange={formik.handleChange}
         value={formik.values.spO2} 
         error={formik.errors.spO2}
        />
      <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>
        Registar Informe
      </Form.Button>
    </Form>
  )
}
