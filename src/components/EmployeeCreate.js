import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  onNameChange = (text) => {
    this.props.employeeUpdate({ key: 'name', value: text });
  }

  onPhoneChange = (text) => {
    this.props.employeeUpdate({ key: 'phone', value: text });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoCapitalize="words"
            label="Name"
            placeholder="Jane Doe"
            value={this.props.name}
            onChangeText={this.onNameChange}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="(999)999-9999"
            value={this.props.phone}
            onChangeText={this.onPhoneChange}
          />
        </CardSection>

        <CardSection>
          <Button>
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
  employeeUpdate,
})(EmployeeCreate);
