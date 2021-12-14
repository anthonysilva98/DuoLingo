import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    //height and color
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,
    //Elements inside container
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",

    //border style
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    borderColor: "white",
    borderBottomWidth: 1.5,
  },
  disabledContainer: {
    backgroundColor: "lightgrey",
    borderColor: "grey",
  },
});

export default styles;
