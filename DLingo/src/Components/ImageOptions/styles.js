import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,
    //size
    width: "48%",
    height: "48%",
    alignItems: "center",
  },
  optionImage: {
    width: "70%",
    height: "70%",
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  selectedText: {
    color: "#40BEF7",
    fontWeight: "bold",
  },
  optionText: {
    fontWeight: "bold",
  },
});

export default styles;
