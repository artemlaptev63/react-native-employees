import React, { Component } from "react";
import { connect } from "react-redux";
import { employeesFetch } from "../actions";
import { FlatList } from "react-native";
import _ from "lodash";
import ListItem from "./ListItem";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  createDataSource() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        enableEmptySections
        keyExtractor={employee => employee.uid}
        renderItem={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
