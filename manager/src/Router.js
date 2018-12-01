import React from 'react';
import {
    Scene,
    Router
} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {

    return (
        <Router>
            <Scene key="root">
                <Scene key="login" title="Authentication" component={LoginForm} initial />
                <Scene key="employeesList" title="Employees" component={EmployeeList} />
            </Scene>
        </Router>
    );
}

export default RouterComponent;