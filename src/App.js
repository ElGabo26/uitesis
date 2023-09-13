import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {WebRouter,AdminRouter} from '../src/Router'
import {AuthProvider} from './context'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <WebRouter/>
        <AdminRouter/>
      </BrowserRouter>
   </AuthProvider>
  )
}

