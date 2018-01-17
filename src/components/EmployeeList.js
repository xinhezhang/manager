import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    // we also need build list in here since when user add a new employee,
    // then come back, this component will be re-rendered, and this life-cycle
    // method will be called
    this.createDataSource(this.props);
  }

  // "nextProps" are the next set of props that
  // this component will be rendered with
  // "this.props" is still the old set of props
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // "employees" from application state at 'reducers/index.js'
    // { employees: EmployeeReducer }
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    return (
      <View>
        <Text>Employee 1</Text>
        <Text>Employee 2</Text>
        <Text>Employee 3</Text>
        <Text>Employee 4</Text>
        <Text>Employee 5</Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);
