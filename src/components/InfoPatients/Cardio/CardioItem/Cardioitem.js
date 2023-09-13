import React, {useState} from 'react'
import {Button,Icon} from 'semantic-ui-react'
import { formatDate } from '../../../../utils/formatDate'
import {PageCardioItem} from '../CardioPageItem'
import {BasicModal} from '../../../modal'
import './cardioItem.scss'

export function CardioItem(props) {
  const {cardio, onReload}= props
  
  const[showModal, setShowModal]=useState(false)

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  

  return (
    <>
    <div className='cardio-info'>
      <div className='cardio-info__text'>
      <p>
      <strong>Fecha:</strong>{formatDate(cardio.creationDate)}
      </p>
      <p className='cardio-names'>
      <strong>CI: </strong> {cardio.pacientCi} <strong>Paciente: </strong> {cardio.pacientName}
      </p>
      <p><strong>Presión Arterial: </strong> {cardio.meanArterialPressure}</p>  
      
      </div>
      
      <div className='cardio-info__buttons'>
        
        <Button  submit='true' icon onClick={onOpenCloseModal}>
            <Icon name='eye'/>
        </Button>
        
      </div>
          
    </div>
    <BasicModal show={showModal} close={onOpenCloseModal} title={`Informe de: ${cardio.pacientName}`}>
        <PageCardioItem cardio={cardio} onReload={onReload} close={onOpenCloseModal}/>
    </BasicModal>
   </> 
   
  )

}