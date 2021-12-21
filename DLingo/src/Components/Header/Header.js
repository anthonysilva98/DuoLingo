import React from "react";
import { View, Text } from "react-native";
import ProgressBar from "../ProgressBar";
import { StyleSheet } from "react-native";
const Header = ({ progress }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress}></ProgressBar>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingTop: 10,
  },
});
export default Header;
