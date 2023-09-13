import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../../hooks'
import './logout.scss'

export function Logout() {
  const {logout}= useAuth()
  const navigate=useNavigate()
  const onLogout=()=>{
    logout()
    navigate("/admin")
  }
  return (
    <Button  icon color='black'className='logout' onClick={onLogout}>
      <Icon name='sign out' />
    </Button>
  )
}

export default Logout