import React, { useState } from "react";
import {  Button, Icon, Confirm } from "semantic-ui-react";
import { Cardio } from "../../../../api/infoPatients";
import { useAuth } from "../../../../hooks";
import { BasicModal } from "../../../modal";
import { CardioForm } from "../CardioForm";
import './cardioPageItem.scss'
const cardioController= new Cardio() ;

export function PageCardioItem(props) {
  const { cardio, onReload, close } = props;
  const { accessToken } = useAuth();
  

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");


  
  const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  

  const openUpdateUser = () => {
    setTitleModal(`Actualizar el archivo del paciente ${cardio.pacientName}`);
    onOpenCloseModal()
  };



   const openDeleteConfirm = () => {
    
    setConfirmMessage(`Eliminar el archivo del paciente ${cardio.pacientName}`);
    onOpenCloseConfirm();
  };

  const onDelete = async () => {
    try {
      await cardioController.deleteCardio(accessToken,cardio._id);
      onReload();
      onOpenCloseConfirm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="cardio-item">
        <div className="cardio-item__info">
            
              <p><strong>Paciente: </strong> {cardio.pacientName}</p>
              <p> <strong>CI: </strong> {cardio.pacientCi}</p>
              <p><strong>Preción diastólica</strong>{cardio.diastolicPressure}</p>
              <p><strong>Preción sitólica</strong>{cardio.systolicPressure}</p>
              <p><strong>Preción Arterial</strong>{cardio.meanArterialPressure}</p>
              <p><strong>SpO2</strong>{cardio.spO2}</p>
              
            
        </div>

        <div className="cardio-item__buttons">
          <Button icon primary onClick={openUpdateUser}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="black" onClick={openDeleteConfirm}>
            <Icon name="trash" />
          </Button>
        </div>
      </div>

      <BasicModal show={showModal} close={close} title={titleModal}>
        <CardioForm close={close} onReload={onReload} file={cardio} />
      </BasicModal>

      <Confirm
        open={showConfirm}
        onCancel={onOpenCloseConfirm}
        onConfirm={onDelete}
        content={confirmMessage}
        size="mini"
      />
    </>
  );
}