import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  employeeCreate,
  employeeClear,
} from '../actions';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.employeeClear();
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    // Another way to preset default shift
    //this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    console.log(this.props.employee);

    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Create
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
  employeeCreate,
  employeeClear,
})(EmployeeCreate);
