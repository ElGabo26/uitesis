import React,{useState} from 'react'
import {Tab,Button} from 'semantic-ui-react'
import { BasicModal } from '../../../components/modal'
import { PatientsForm,ListPatients } from '../../../components/Patients'
import './users.scss'


export function Users() {

  const [showModal, setShowModal]=useState(false)
  const [reload,setReload]=useState(false)

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  

  const panes=[
  {
    menuItem:"Mis pacientes",
   render: ()=>(
     <Tab.Pane attached={false} >
      <ListPatients doctor={true} reload={reload} />
     </Tab.Pane> 
    ) },
    {
      menuItem:"Todos los pacientes",
     render: ()=>(
       <Tab.Pane attached={false} >
        <ListPatients doctor={false} reload={reload} />
       </Tab.Pane> 
      ) }
  ]

  return (
    <>
      <div className="users-page">
        <div className="users-page__add">
        <Button fluid primary onClick={onOpenCloseModal}>
          Nuevo Paciente
        </Button>
        </div>
        <Tab menu={{ secondary: true }} panes={panes} />
      </div>

      <BasicModal
        size='large'
        show={showModal}
        close={onOpenCloseModal}
        title="Crear nuevo Paciente"
      >
        {<PatientsForm close={onOpenCloseModal} onReload={onReload}/>}
      </BasicModal>
    </>
  )
}
