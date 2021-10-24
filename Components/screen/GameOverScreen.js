import React from "react";
import { Button, Text, View, Image } from "react-native";
import MainButton from "../UI/Buttons";
import styles from "./style";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screenGameOver}>
      <Text>Game is over</Text>
      <View style={styles.containerImages}>
        <Image
          source={require("../../assets/Img/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text>Number of rounds: {props.roundNumbers}</Text>
        <Text>Number Was : {props.userNumbers}</Text>
        <MainButton onPress={props.restartGame}>NEW GAME!</MainButton>
      </View>
    </View>
  );
};

export default GameOverScreen;
