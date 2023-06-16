import { StyleSheet,View, Text, TouchableOpacity } from "react-native";

export default function Button(props) {
  const onPress = props.onPress;


  return (
   
    <View style={styles.Button}>
     <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
   
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#72063c',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  }
})