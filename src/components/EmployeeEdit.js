import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// import Communications from 'react-native-communications';
import { text } from 'react-native-communications';

import {
  employeeUpdate,
  employeeSave,
} from '../actions';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, key) => {
      this.props.employeeUpdate({ key, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    //console.log(name, phone, shift);
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid // from "EmployeeListItem.js", "onRowPress()"
    });
  }

  onSendTextPress = () => {
    const { name, phone, shift } = this.props;
    // Communications.text(phoneNumber, body)
    text(phone, `Hi, ${name}. Your scheduled shift is on ${shift}. Thank you!`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onSendTextPress}>
            Text Schedule
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
})(EmployeeEdit);
