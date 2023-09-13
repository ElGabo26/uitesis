import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {WebLayout} from '../layouts'
import {Home} from '../pages/Web'

export function WebRouter() {
  const loadLayout = (LayOut, Page)=>(
    <LayOut>
      <Page></Page>
    </LayOut>
  )
  return (
    <Routes>
        <Route path='/' element={loadLayout(WebLayout,Home)} />
    </Routes>
  )
}
