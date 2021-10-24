import React, {useState} from 'react';
import { View } from 'react-native';
import Header from './Components/UI/Header';
import StartScreenGame from './Components/screen/StartScreenGame';
import GameScreen from './Components/screen/GameScreen';
import GameOverScreen from './Components/screen/GameOverScreen';
import styles from './style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumbers, setUserNumbers] = useState()
  const [guessRound, setGuessRound] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  
  const handlerGameStart = (selectedNumber) => {
    setUserNumbers(selectedNumber)
  }

  const handlerGameOver = numbOfRounds  => {
    setGuessRound(numbOfRounds)
  }

  const configureNewGame = () => {
    setGuessRound(0)
    setUserNumbers(null)
  }

  let content = <StartScreenGame 
    onStartGame={handlerGameStart}
  />

  if (userNumbers && guessRound <= 0) {
    content = <GameScreen userChoice={userNumbers} onGameOver={handlerGameOver}/>
  } else if (guessRound > 0) {
    content = <GameOverScreen 
      roundNumbers={guessRound} 
      userNumbers={userNumbers}
      restartGame={configureNewGame}
    />
  }

  return (
    <View style={styles.container}>
      <Header title="Guess Numbers"/>
      {content}
    </View>
  );
}

