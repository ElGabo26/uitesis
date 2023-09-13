import React, {useCallback} from 'react'
import {Image} from 'semantic-ui-react'
import {useDropzone} from 'react-dropzone'
import { useParams } from 'react-router-dom';
import { useFormik } from "formik";
import { useAuth } from "../../../../hooks";
import { ENV } from '../../../../utils';
import { initialValues } from './imagesForm.form'
import { FetalImage } from '../../../../api/infoPatients/fetalImages';


const imageController= new FetalImage()

export function ImagesForm(props) {
    const {image}=props
    const {accessToken}= useAuth()
    const {id}= useParams()

    const formik = useFormik({
        initialValues: initialValues(image),
        
         onSubmit: async (formValue) => {
          try {
            if (!image) {
              await imageController.addImage(formValue,accessToken,id);
            } else {
              console.log(formValue)
            }
            
          } catch (error) {
            console.error(error);
          }
        },
      });

    const onDrop=useCallback(
        (aceptedFile)=>{
            console.log(aceptedFile)
        }
    )
    const {getInputProps,getRootProps}=useDropzone({
        onDrop
    })

    const getFile=()=>{
        return null
    }
  return (
    <div className='fetal-images' {...getRootProps()}>
        <input {...getInputProps()}>
            {getFile()}?(
                <div className='mensaje'>
                    <strong>No hay imagenes</strong>
                </div>
            ):(
                <Image src={getFile()}></Image>
            )
        </input>
    </div>
  )
}
