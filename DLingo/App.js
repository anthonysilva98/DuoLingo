import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./app.styles";
import ImageOption from "./src/Components/ImageOptions/ImageOption";
import question from "./data/oneQuestionWithOption";
const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption
          image={question.options[0].image}
          text={question.options[0].text}
        />
        <ImageOption
          image={question.options[1].image}
          text={question.options[1].text}
        />
        <ImageOption
          image={question.options[2].image}
          text={question.options[2].text}
        />
        <ImageOption
          image={question.options[3].image}
          text={question.options[3].text}
        />
      </View>
    </View>
  );
};

export default App;
