import React,{useState} from 'react';
import {Tab,Button} from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { CardioForm, ListCardio } from '../../../components/InfoPatients';
import { BasicModal } from '../../../components/modal';
import { useAuth } from '../../../hooks';
import './pageCardio.scss'




export function PageCardio() {
  const{user}=useAuth()
  
  const [showModal, setShowModal]=useState(false)
  const [reload,setReload]=useState(false)

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  const {id}=useParams()
  const [page, setPage] = useState(1);
    const changePage = (_, data) => {
      setPage(data.activePage);
      
    };

    const restarPage = () => {
      setPage(1);
    };


  const  panes=!id?[
  {
    menuItem:"Mis Archivos",
   render: ()=>(
     <Tab.Pane attached={false}  >
      <ListCardio reload={reload} onReload={onReload} field='doctor' value={user._id} page={page} changePage={changePage}/>
     </Tab.Pane> 
    )
    },
    {
      menuItem:"Todos los Archivos",
     render: ()=>(
       <Tab.Pane attached={false} >
        <ListCardio reload={reload} onReload={onReload} field='' page={page} changePage={changePage} />
       </Tab.Pane> 
      ) }
  ]:[{
    menuItem:"Archivos del Paciente",
   render: ()=>(
     <Tab.Pane attached={false} >
      <ListCardio reload={reload} onReload={onReload} field='pacient' value={id} page={page} changePage={changePage} />
     </Tab.Pane> 
    ) }]

  return (
    <>
      <div className="cardio-page">
        
        {id?(
        <div className='cardio-page__add'><Button fluid primary onClick={onOpenCloseModal}>
          Nuevo Informe
        </Button></div>):(<></>)}
        
        <Tab menu={{ secondary: true }} panes={panes} onTabChange={restarPage} />
      </div>

      <BasicModal
        size='small'
        show={showModal}
        close={onOpenCloseModal}
        title="Información Cardio"
      >
        {<CardioForm close={onOpenCloseModal} onReload={onReload}/>}
      </BasicModal>
    </>
  )
}
