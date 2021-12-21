import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import styles from "./app.styles";
import ImageOption from "./src/Components/ImageOptions/ImageOption";
//import questions from "./data/imageMulatipleChoiceQuestions";
import { useState, useEffect } from "react";
import Button from "./src/Components/Button";
import ImageMultipleChoiceQuestion from "./src/Components/imageMultipleChoiceQuestion/imageMultipleChoiceQuestion";
import OpenEndedQuesion from "./src/Components/OpenEndedQuesion";
import questions from "./data/openEndedQuestions";
const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("Congratulations, you have completed this section.");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const onWrong = () => {
    Alert.alert("Please Choose Again!");
  };
  return (
    <View style={styles.root}>
      {/* <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      ></ImageMultipleChoiceQuestion> */}

      <OpenEndedQuesion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  );
};

export default App;
