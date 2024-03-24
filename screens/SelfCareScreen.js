import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ToolbarHome from "../components/ToolbarHome";

const SelfCareScreen = () => {
  return (
    <SafeAreaView>
      <ToolbarHome />
      <ScrollView style={{}}>
        <Text>Self care screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelfCareScreen;

const styles = StyleSheet.create({});
