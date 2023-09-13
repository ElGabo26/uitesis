import React,{useState,useEffect} from 'react'
import {Loader,Button,Icon,Confirm} from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../../hooks'
import {PatientsForm} from '../../../components/Patients'
import { Patient } from '../../../api/patient'
import {BasicModal} from '../../../components/modal'
import { formatDate } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import './pagePatient.scss'

const patientController=new Patient()


export function PagePatient() {
    const {id}=useParams()
    const {accessToken}= useAuth()
    const [patient, setPatient]=useState(null)
    const [birth , setBirth] =useState('')

    const [reload, setReload]=useState(false)
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");

    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("");
    const [isDelete, setIsDelete] = useState(false);

    const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
    const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);
    const onReload = () => setReload((prevState) => !prevState);
    const navigate =useNavigate()

    useEffect(() => {
      (
        async()=>{
            try {
                const response= await patientController.getPatient(accessToken,id)
                setBirth(formatDate(response.dateBirth))

                setPatient(response)
                
            } catch (error) {
                console.log(error)
            }
            
        }
      )()

         
    }, [reload])

    const openUpdateUser = () => {
      setTitleModal(`Actualizar ${patient.firstName} ${patient.firstLastName}`);
      onOpenCloseModal();
      onReload()
    };

    const openDeleteConfirm = () => {
      setIsDelete(true);
      setConfirmMessage(`Eliminar usuario ${patient.firstName} ${patient.firstLastName}`);
      onOpenCloseConfirm();
    };

    const onDelete= async ()=>{

      try {
        await patientController.deletePatient(accessToken,id)
        onOpenCloseConfirm();
        navigate('/admin/users')

      } catch (error) {
        alert(error.msg)
        console.log(error)
      }

    }

  if(!patient) return <Loader active inline='centered'  />
  return (
    <>
    
  <div className="informacion">
      <h2>Información del Paciente</h2>
    
    <div className='informacion-1'>

    <div className="patient-details">
      <p><strong>CI: </strong> {patient.ciNumber}</p>
      <p><strong>Nombre: </strong> {patient.firstName} {patient.firstLastName} {patient.secondLastName}</p>
      <p><strong>Fecha de Nacimiento: </strong> {birth}</p>
      <p><strong>Fecha de Registro: </strong> {formatDate(patient.creationDate)}</p>
      <p><strong>Número de Historial Clínico: </strong> {patient.numberClinicalHistory}</p>
    </div>
     
            
    <div className='patient-butoms'>
      <Button  icon size='massive' submit='true' primary onClick={openUpdateUser}>
        <Icon name='pencil'/>
      </Button>
      <Button  icon size='massive' submit='true' color='black' onClick={openDeleteConfirm}>
        <Icon name="trash"/>
      </Button>
    </div>
    </div>

      

    
  </div>

  <BasicModal show={showModal} close={onOpenCloseModal} title={titleModal}>
        <PatientsForm close={onOpenCloseModal} onReload={onReload} user={patient} />
      </BasicModal>
    
      <Confirm
        open={showConfirm}
        onCancel={onOpenCloseConfirm}
        onConfirm={ onDelete}
        content={confirmMessage}
        size="mini"
      />
  </>
  )
}
