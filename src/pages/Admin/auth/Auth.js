import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import {RegisterForm,LoginForm} from "../../../components/admin/auth"
//import { RegisterForm, LoginForm } from "../../../components/Admin/auth";
import "./Auth.scss";

export function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);

  const openLogin = () => setActiveIndex(0);

  const panes = [
    {
      menuItem: "Login",
      render: () => (
        <Tab.Pane>
         <LoginForm/>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Register",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin={openLogin} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className="auth">
      

      <Tab
        panes={panes}
        className="auth__forms"
        activeIndex={activeIndex}
        onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
      />
    </div>
  );
}