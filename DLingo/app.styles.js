import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});

export default styles;
