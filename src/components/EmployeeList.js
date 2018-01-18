import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  employeesFetch,
  logoutUser,
} from '../actions';

import { CardSection, Button } from './common';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    // we also need build list in here since when user add a new employee,
    // then come back, this component will be re-rendered, and this life-cycle
    // method will be called
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // "nextProps" are the next set of props that
    // this component will be rendered with
    //
    // "this.props" is still the old set of props
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

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />

        <CardSection>
          <Button onPress={this.props.logoutUser}>
            Logout
          </Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // "state.employees" is a object has many key-value pairs, for each
  // key-value pair, run the "fat arrow function" with (value, key),
  // return a object like
  // { name: 'Jim', phone: '111-111-1111', shift: 'Monday', id: 'xxx' }
  //
  // Finally, lodash's map function will put these objects into a array
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, {
  employeesFetch,
  logoutUser,
})(EmployeeList);
