import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import CardSection from "./common/CardSection";

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee.item });
  }
  render() {
    const { name } = this.props.employee.item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
