import React, { useState } from "react";
import { View, Text, TextInput, Image, Keyboard } from "react-native";
import styles from "./styles";
import mascot from "../../../assets/mascot.png";
import Button from "../Button";
const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() == input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        {/* Image */}
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      {/* Text Input Container */}
      <TextInput
        textAlignVertical="top"
        // Used to Align top and convert return key to done and exit keyboard
        multiline
        returnKeyType="done"
        onSubmitEditing={() => {
          Keyboard.dismiss();
        }}
        value={input}
        onChangeText={setInput}
        placeholder="Please Translate the sentence in english"
        style={styles.textInput}
      ></TextInput>
      <Button text="Check" onPress={onButtonPress} disabled={false} />
    </>
  );
};

export default OpenEndedQuestion;
