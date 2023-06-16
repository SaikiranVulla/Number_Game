import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import GameStartScreen from "./Screens/GameStartScreen";
import GamePlayScreen from "./Screens/GamePlayScreen";
import GameOverScreen from "./Screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessNumber, setGuessNumber] = useState(0);

  function showUserNumber(value) {
    setUserNumber(value);
    setGameIsOver(false);
  }

  function onReset() {
    setUserNumber(null);
    setGuessNumber(0);
  }

  function gameOverHandler(number0fRound) {
    setGameIsOver(true);
    setGuessNumber(number0fRound);
  }

  let screen = <GameStartScreen onPickNumber={showUserNumber} />;

  if (userNumber) {
    screen = (
      <GamePlayScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundNumber={guessNumber} onReset={onReset} />;
  }
  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.screen}>
      <ImageBackground
        source={require("./assets/backGround.png")}
        style={styles.screen}
        imageStyle={styles.backGround}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backGround: {
    opacity: 0.2,
  },
});
