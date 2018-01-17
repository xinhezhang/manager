import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          initial
          key="login"
          component={LoginForm}
          title="Please Login"
        />

        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
