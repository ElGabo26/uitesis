import React from 'react'
import {Button,Icon} from "semantic-ui-react"
import { Link } from 'react-router-dom'
import './home.scss'

export function Home() {
  return (
    <Link to='/admin/home'>
    <Button icon color='violet' className='home-button'>
        <Icon name='home'/>
    </Button>
    </Link>
  )
}
