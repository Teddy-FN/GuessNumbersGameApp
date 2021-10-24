import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import styles from "./style";
import Card from "../UI/Card/Card";
import NumberContainer from "../UI/NumberContainer";
import { Color } from "../Utils/constant";
import Textinput from "../UI/TextInput/Textinput";
import MainButton from "../UI/Buttons";
const StartScreenGame = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [SelectedNumbers, setSelectedNumbers] = useState();
  const onNumberedValue = (value) => {
    setEnteredValue(value.replace(/[^0-9]/g, ""));
  };
  const handlerResetNumbers = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handlerConfirmNumbers = () => {
    console.log("landing here");
    const chosenNumbers = parseInt(enteredValue);
    if (isNaN(chosenNumbers) || chosenNumbers <= 0 || chosenNumbers > 99) {
      Alert.alert("Invalid Numbers", "Number has to be a between 1 and 99", [
        {
          text: "okay",
          style: "cancel",
          onPress: handlerResetNumbers,
        },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumbers(chosenNumbers);
    setEnteredValue("");
    Keyboard.dismiss()
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{SelectedNumbers}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(SelectedNumbers)}>
          Start Game
        </MainButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.texts}>Select a Number</Text>
          <Textinput
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            placeholder="Enter Numbers"
            maxLength={2}
            onChangeText={onNumberedValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={handlerResetNumbers}
                color={Color.COLOR_PRIMARY}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={handlerConfirmNumbers}
                color={Color.COLOR_ACCENT}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartScreenGame;
