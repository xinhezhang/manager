import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class EmployeeListItem extends Component {
  onRowPress = () => {
    Actions.employeeEdit({
      employee: this.props.employee,
    });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
};

export default EmployeeListItem;
