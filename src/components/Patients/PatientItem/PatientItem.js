import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './patientItem.scss'

export  function PatientItem(props) {
    const {patient}= props

  return (
   <>
    <div className='patient-info'>
      <div className='patient-info__text'>
      <p className='cardio_names'>
        {patient.firstName} {patient.firstLastName}
      </p>
      <span>CI:</span>
      {patient.ciNumber}   <span>Historial:</span>  {patient.numberClinicalHistory}
      
      </div>
      
      <div className='patient-info__buttons'>
        <Link to={`/admin/patient/${patient._id}`} target='_blank'>
        <Button  submit='true' icon>
            <Icon name='eye'/>
        </Button>
        </Link>
      </div>
      
      
      
          
    </div>
    
   </>
  )
}
