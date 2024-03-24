import { Text, View } from "react-native";
import React, { Component } from "react";
import Toolbar from "../components/Toolbar";

export class SendMoneyScreen extends Component {
  render() {
    return (
      <View>
        <Toolbar title="Send Money" />
        <Text>SendMoneyScreen</Text>
      </View>
    );
  }
}

export default SendMoneyScreen;
