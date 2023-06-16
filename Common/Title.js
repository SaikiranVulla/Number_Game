import { Children } from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

export default function Title(props){
  return(
    <Text style={styles.title}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Platform.select({ios: "#ddd", android: '#fff'}),
    borderWidth: 2,
    borderColor: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    padding: 18,
  }
})