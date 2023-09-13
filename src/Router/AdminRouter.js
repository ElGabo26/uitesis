import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Auth,Users,Home,PagePatient} from '../pages/Admin'
import {PageCardio,FetalImages} from '../pages/InfoPatients'
import {AdminLayout} from "../layouts"
import {useAuth} from '../hooks'

export function AdminRouter() {
  
  const {user}= useAuth()

  const loadLayout = (LayOut, Page)=>(
    <LayOut>
      <Page></Page>
    </LayOut>
  )
  return (
    
    <Routes>
      {!user? (<Route path='admin/*' element={<Auth/>} />)
      :(<>
      <Route path='admin/users' element={loadLayout(AdminLayout,Users)} />
      <Route path='admin/home' element={<Home/>} />
      <Route path='admin/patient/:id' element={loadLayout(AdminLayout,PagePatient)} />
      <Route path='admin/cardio' element={loadLayout(AdminLayout,PageCardio)} />
      <Route path='admin/cardio/:id' element={loadLayout(AdminLayout,PageCardio)} />
      <Route path='admin/fetalImages' element={loadLayout(AdminLayout,FetalImages)} />
      </>)}
        
    </Routes>
  )
}
