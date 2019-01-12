import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import {
    ListView,
    View,
    Text
} from 'react-native';

class EmployeeList extends Component {

    componentWillMount() {

        let {
            employeesFetch,
            employees
        } = this.props;

        employeesFetch();
        createDataSource({ employees });
    }

    componentWillReceiveProps(nextProps) {
        createDataSource(nextProps.employees);

    }

    createDataSource({ employees }) {
     
        const dataSourceValidation = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = dataSourceValidation.cloneWithRows(employees);
    }

    render() {

        return (
            <View>
                <Text>Employees List</Text>
            </View>
        );
    }
}

const styles = {
    list: {
        flex: 1,
        height: 50
    }
}

const mapStateToProps = state => {

    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);