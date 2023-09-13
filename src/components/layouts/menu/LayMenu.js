import React from 'react'
import {Menu} from 'semantic-ui-react'
import { Link, useLocation,useParams } from 'react-router-dom'
import './layMenu.scss'

export function LayMenu(){
  const {id}= useParams()
  const {pathname}=useLocation()
    
  const comparePath=(path)=>{
    if (path===pathname) return true
    return false
  }
  return (<div>{
    !id?(
      <Menu fluid vertical  text className='laymenu'>
      <Menu.Header>
      Información
      </Menu.Header>  
      <Menu.Item as={Link} to="/admin/users" size='massive' active={comparePath('/admin/users')}>
          Pacientes
      </Menu.Item>
       <Menu.Item as={Link} to="/admin/cardio" active={comparePath('/admin/cardio')}>
           Cardio
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Demografía
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Información Feto
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Exámenes Feto
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Hematología
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Test hepáticos
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Historial médico
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Historial obstétrico
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Renal
      </Menu.Item>
      <Menu.Item as={Link} to="" active={comparePath()}>
          Sintomas
      </Menu.Item>
      <Menu.Item as={Link} to="/admin/fetalImages" active={comparePath()}>
          Imagenes del feto
      </Menu.Item>
    </Menu>
    ):(
    <Menu fluid vertical icon text className='laymenu'>
        <Menu.Header>
      Información
      </Menu.Header>
      <Menu.Item as={Link} to={`/admin/patient/${id}`} active={comparePath(`/admin/patient/${id}`)}>
          Paciente
      </Menu.Item>
      <Menu.Item as={Link} to={`/admin/cardio/${id}`} active={comparePath(`/admin/cardio/${id}`)}>
          Cardio
      </Menu.Item>
    </Menu>)}
  </div>)
}
