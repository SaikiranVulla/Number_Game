import { StyleSheet, View, Dimensions } from "react-native";

export default function Card({children}){
  return(
    <View style={styles.body}>
    {children}
    </View>
  );
}

const deviceWidth =Dimensions.get('window').width; 
const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    backgroundColor: "#3b021f",
    marginHorizontal: 24,
    borderRadius: 5,
    elevation: 8,
  },
})