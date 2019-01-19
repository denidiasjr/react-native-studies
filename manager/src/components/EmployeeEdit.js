import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import {
    Card,
    CardSection,
    Button,
    Confirm
} from './common';

class EmployeeEdit extends Component {

    state = {
        modalVisible: false
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { 
            name,
            phone,
            shift,
            employee,
            employeeSave
        } = this.props;

        employeeSave({ name, phone, shift, uid: employee.uid });
    }
    
    onTextPress() {
        
        const {
            phone, shift, employeeDelete, employee
        } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAcceptFire() {
        
        let {
            uid,
        } = this.props.employee;

        this.props.employeeDelete({uid});
    }

    onDeclineFire() {
        this.setState({ modalVisible: false });
    }

    render() {

        return(
            <Card>
                <EmployeeForm  />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({ modalVisible: true })}>
                        Fire employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.modalVisible}
                    onAccept={this.onAcceptFire.bind(this)}
                    onDecline={this.onDeclineFire.bind(this)}
                >
                    Are your sure you want to delete this? 
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        name,
        phone,
        shift
    } = state.employeeForm;

    return {
        name, phone, shift
    };
}


export default connect(mapStateToProps, { 
    employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);