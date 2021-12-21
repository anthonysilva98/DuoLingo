import React from "react";
import { View, Text, Image } from "react-native";
import ProgressBar from "../ProgressBar";
import { StyleSheet } from "react-native";
import heart from "../../../assets/heart.png";
const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress}></ProgressBar>
      <Image source={heart} style={styles.heart} resizeMode="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingTop: 10,
    alignItems: "center",
  },
  heart: {
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  lives: {
    color: "red",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
});
export default Header;
