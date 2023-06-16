import { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Button from "../Common/Button";
import Card from "../Common/Card";
import Title from "../Common/Title";

export default function GameStartScreen(props) {
  const [enterNumber, setEnteredNumber] = useState("");
  const onPickNumber = props.onPickNumber;

  function changeHandler(values) {
    setEnteredNumber(values);
  }

  const { width, height } = useWindowDimensions();

  function pressResetHandler() {
    setEnteredNumber("");
  }

  function pressConfirmHandler() {
    const showNumber = parseInt(enterNumber);
    if (isNaN(showNumber) || showNumber <= 0 || showNumber > 99) {
      Alert.alert("Invalid", "Entered number must be between 0 and 99", [
        { text: "Ok", style: "destructive", onPress: pressResetHandler },
      ]);
    } else {
      onPickNumber(enterNumber);
    }
  }

  const marginTopDistance = height < 500 ? 60 : 100;

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.mainContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <Text style={styles.text}>Enter a Number</Text>
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              style={styles.input}
              onChangeText={changeHandler}
              value={enterNumber}
            />
            <View style={styles.buttonContainer}>
              <View style={{ flex: 1 }}>
                <Button onPress={pressResetHandler}>Reset</Button>
              </View>
              <View style={{ flex: 1 }}>
                <Button onPress={pressConfirmHandler}>Confirm</Button>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
  text: {
    color: "#ddb52f",
    fontSize: 24,
    fontWeight: "700",
  },
  input: {
    height: 50,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    fontSize: 30,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
