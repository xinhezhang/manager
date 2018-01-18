import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';

import {
  employeeUpdate,
} from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  onNameChange = (text) => {
    this.props.employeeUpdate({ key: 'name', value: text });
  }

  onPhoneChange = (text) => {
    this.props.employeeUpdate({ key: 'phone', value: text });
  }

  onPickerChange = (day) => {
    this.props.employeeUpdate({ key: 'shift', value: day });
  }

  renderPickerItems = () => {
    const weekdays = [
      'None',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    return weekdays.map((day) => {
      return <Picker.Item key={day} label={day} value={day} />;
    });
  }

  render() {
    return (
      <View>
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
            placeholder="999-999-9999"
            value={this.props.phone}
            onChangeText={this.onPhoneChange}
          />
        </CardSection>

        {/* override default style { flexDirection: 'row' } */}
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>
            Shift
          </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={this.onPickerChange}
          >
            {this.renderPickerItems()}
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    fontWeight: '600',
    padding: 5,
  },
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
})(EmployeeForm);
