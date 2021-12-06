import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./app.styles";
import ImageOption from "./src/Components/ImageOptions/ImageOption";
import question from "./data/oneQuestionWithOption";
const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
          />
        ))}
      </View>
    </View>
  );
};

export default App;
