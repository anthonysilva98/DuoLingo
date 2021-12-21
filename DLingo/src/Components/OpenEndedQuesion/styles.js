import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "red",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
  sentenceContainer: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#ebebeb",
    borderWidth: 1,
    borderColor: "lightgray",
    alignSelf: "stretch",
    padding: 20,
    borderRadius: 10,
    flex: 1,
  },
});
export default styles;
