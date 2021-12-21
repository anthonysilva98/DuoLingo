import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import styles from "./app.styles";
import ImageOption from "./src/Components/ImageOptions/ImageOption";
//import questions from "./data/imageMulatipleChoiceQuestions";
import { useState, useEffect } from "react";
import Button from "./src/Components/Button";
import ImageMultipleChoiceQuestion from "./src/Components/imageMultipleChoiceQuestion/imageMultipleChoiceQuestion";
import OpenEndedQuesion from "./src/Components/OpenEndedQuesion";
import questions from "./data/allQuestions";
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
      {/* conditional Rendering */}
      {currentQuestion.type == "IMAGE_MULTIPLE_CHOICE" ? (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        ></ImageMultipleChoiceQuestion>
      ) : null}

      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuesion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
    </View>
  );
};

export default App;
