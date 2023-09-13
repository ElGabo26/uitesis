import React from 'react'
import {Logout,LayMenu,Home} from '../components'
import './adminLayout.scss'

export  function AdminLayout(props) {
    const {children}=props
  return (

    <div className="admin-layout">
      <div className="admin-layout__left">
        <LayMenu patient={null} />
      </div>
      <div className="admin-layout__right">
        <div className="admin-layout__right-header">
          <Home />
          <Logout />
        </div>
        <div className="admin-layout__right-content">{children}</div>
      </div>
    </div>
  );
}
