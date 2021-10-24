import React, { useState, useRef, useEffect } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import styles from "./style";
import NumberContainer from "../UI/NumberContainer";
import MainButton from "../UI/Buttons";
import Card from "../UI/Card/Card";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice)
  const { onGameOver, userChoice } = props;
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastguess, setPastguess] = useState ([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastguess.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!!", style: "Cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumbers = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumbers);
    // setRound((curRound) => curRound + 1);
    setPastguess(curPastGuess => [nextNumbers, ...curPastGuess])
  };

  const renderListItem = (value, numOfRound) => {
    return (
      <View key={value} style={styles.listItems}>
        <Text>#{numOfRound}</Text>
        <Text>{value}</Text>
      </View>
    )
  }

  return (
    <View style={styles.screenGames}>
      <Text>Oppnent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainerGameScreen}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white"/>
          LOWER
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
        <Ionicons name="md-add" size={24} color="white"/>
          GREATER
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {
            pastguess.map((item, index) => renderListItem(item, pastguess.length - index))
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default GameScreen;
