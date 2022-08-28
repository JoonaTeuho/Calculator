import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  function Sum(){
    setResult(parseInt(number1) + parseInt(number2));
  }

  function Subraction(){
    setResult(number1 - number2);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput
      keyboardType='numeric'
      style={styles.input}
      onChangeText={number1 => setNumber1(number1)}  
      value={number1}
      />

    <TextInput
      keyboardType='numeric'
      style={styles.input}
      onChangeText={number2 => setNumber2(number2)}  
      value={number2}
      />
      <Button onPress={Sum} title="+" />
      <Button onPress={Subraction} title="-" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:200 ,
    borderColor: 'gray',
    borderWidth:1
  }
});
