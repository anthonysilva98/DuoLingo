import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import styles from "./app.styles";
import ImageOption from "./src/Components/ImageOptions/ImageOption";
import questions from "./data/imageMulatipleChoiceQuestions";
import { useState, useEffect } from "react";
import Button from "./src/Components/Button";
const App = () => {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);
  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert("Correct!");
      //move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert("Please Choose again");
    }
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id == option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </View>
  );
};

export default App;
