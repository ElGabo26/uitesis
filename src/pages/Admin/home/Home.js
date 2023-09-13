import React from 'react'
import {Grid,Button, Icon} from 'semantic-ui-react'
import {Logout} from '../../../components/layouts/logout'
import { Link} from 'react-router-dom'
import './home.scss'

export  function Home() {
  
  return (
    <div className='home'>
      <div className='home__right'>
      <Logout></Logout>
      </div>
       <Grid className="home__menu" centered columns={1}>
        <Grid.Column>
          <Grid.Row>
            <Link to="/admin/users">
              <Button size='massive'>
                <Icon name='user'/>
                <p>Pacientes</p>
              </Button>
            </Link>
          </Grid.Row>
          <Grid.Row>
              <Button size='massive'>
                <Icon name="file alternate outline"/>
                <p>Archivos</p>
              </Button>
          </Grid.Row>
          <Grid.Row>
              <Button size='massive'>
                <Icon name='chart bar'/>
                <p>Informe</p>
              </Button>

          </Grid.Row>
          </Grid.Column>
       </Grid>
    </div>
  )
}
