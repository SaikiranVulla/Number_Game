import { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Button from "../Common/Button";
import Card from "../Common/Card";
import Title from "../Common/Title";
import { Entypo } from "@expo/vector-icons";

function generateRandomNumber(min, max, exclude) {
  let rndNumber = Math.floor(Math.random() * (max - min) + min);
  if (rndNumber == exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GamePlayScreen(props) {
  const userNumber = props.userNumber;
  const onGameOver = props.onGameOver;

  const initialNumber = generateRandomNumber(1, 100, userNumber);
  const [randomNumber, setRandomNumber] = useState(initialNumber);
  const [showRandomNumber, setShowRandomNumber] = useState([initialNumber]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (randomNumber == userNumber) {
      console.log("tyty");
      onGameOver(roundNumber);
    }
  }, [randomNumber, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function guessNumber(direction) {
    if (
      (direction === "lower" && randomNumber < userNumber) ||
      (direction === "higher" && randomNumber > userNumber)
    ) {
      Alert.alert(
        "You are Lying",
        "Show Correct Direction According To The Entered Number",
        [{ text: "Okay", style: "cancel" }]
      );

      return;
    }
    if (direction == "lower") {
      maxBoundary = randomNumber;
    } else {
      minBoundary = randomNumber + 1;
    }
    const guessRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      randomNumber
    );
    setRandomNumber(guessRandomNumber);
    setShowRandomNumber((prevshowRandomNumber) => [
      guessRandomNumber,
      ...prevshowRandomNumber,
    ]);
  }

  let content = (
    <>
      <View style={styles.randNumber}>
        <Text style={styles.numberType}>{randomNumber}</Text>
      </View>
      <Card>
        <Text
          style={{
            color: "#ddb52f",
            fontSize: 24,
            fontWeight: "700",
            marginVertical: 8,
          }}
        >
          Higher or Lower?{" "}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Button onPress={guessNumber.bind(this, "higher")}>
              <Entypo name="plus" size={24} color="white" />
            </Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button onPress={guessNumber.bind(this, "lower")}>
              <Entypo name="minus" size={24} color="white" />
            </Button>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.randNumber}>
          <Text style={styles.numberType}>{randomNumber}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Button onPress={guessNumber.bind(this, "higher")}>
              <Entypo name="plus" size={24} color="white" />
            </Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button onPress={guessNumber.bind(this, "lower")}>
              <Entypo name="minus" size={24} color="white" />
            </Button>
          </View>
        </View>
      </>
    );
  }

  const roundNumber = showRandomNumber.length;
 
  let marginSides = width > 500 ? 68 : 24;
  
  return (
    <View style={[styles.container,{marginHorizontal: marginSides}]}>
      <Title>Opponent's Choice</Title>
      {content}
      <FlatList
        data={showRandomNumber}
        renderItem={(itemData) => {
          return (
            <View style={styles.log}>
              <Text style={styles.logItem}>
                #{roundNumber - itemData.index}
              </Text>
              <Text style={styles.logItem}>
                Opponent Guess: {itemData.item}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 24,
  },
  randNumber: {
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    borderRadius: 8,
    marginVertical: deviceWidth > 380 ? 16 : 8,
    padding: deviceWidth > 380 ? 24 : 12,
    width: "50%",
  },
  numberType: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
  },
  log: {
    borderColor: "#A9A9",
    borderWidth: 1,
    borderRadius: 40,
    padding: 20,
    flexDirection: "row",
    elevation: 4,
    justifyContent: "space-around",
    marginTop: 20,
  },
  logItem: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ddd",
  },
});
