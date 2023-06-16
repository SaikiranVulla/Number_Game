import { Text, View, Image, StyleSheet, Dimensions, ScrollView, } from "react-native";
import Button from "../Common/Button";
import Title from "../Common/Title";

export default function GameOverScreen({roundNumber, userNumber, onReset}) {
  return (
    <ScrollView>
    <View style={styles.body}>
      <Title>GAME OVER!</Title>
      <View style={styles.image}>
        <Image
          source={require("../assets/success.png")}
          style={styles.innerImage}
        />
      </View>
      <Text style={styles.text}>
        Your Phone took <Text style={styles.innerText}>{roundNumber}</Text>{" "}
        rounds to Guess <Text style={styles.innerText}>{userNumber}</Text>{" "}
        Number
      </Text>
      <Button onPress={onReset}>Start New Again!</Button>
    </View>
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  image: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderColor: "black",
    overflow: "hidden",
    marginTop: 20,
  },
  innerImage: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  innerText: {
    color: "#72035c",
  },
});
