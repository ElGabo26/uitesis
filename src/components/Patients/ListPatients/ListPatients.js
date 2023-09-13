import React ,{useState,useEffect} from 'react'
import {Loader} from 'semantic-ui-react'
import {size, map} from 'lodash'
import { useAuth } from '../../../hooks'
import { Patient } from '../../../api/patient'
import { PatientItem } from '../PatientItem'
import './listPatients.scss'


const patientController= new Patient()

export function ListPatients(props) {
    const {user,accessToken}= useAuth()
    const {reload,doctor,onReload}=props
    const [patients, setPatients] = useState(null)

    const user_id=user._id
    useEffect(() => {
        (
            async()=>{
                try {
                    if(!doctor){
                        const response= await patientController.getPatients(accessToken)
                        setPatients(response)
                    }else{
                        const response= await patientController.getPatients(accessToken,'doctor',user_id) 
                        setPatients(response)
                    }
                    
                    
                    
                } catch (error) {
                    console.log(error)
                }
            }
        )()
          }, [doctor,reload])
    
    if(!patients) return <Loader active inline='centered' />
    if (size(patients)===0) return "No existen pacientes"
  return (
    <div className='list-patients'>
        {
    map(patients,(patient)=>(
    <PatientItem key={patient._id} patient={patient} /> ))}
  </div>)
}
