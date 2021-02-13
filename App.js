import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Tts from 'react-native-tts';

export default function App() {
  useEffect(() => {
    Tts.speak('Hello, world ! this is a text to speech Test');
  }, []);
  return (
    <View>
      <Text>CHATBOT</Text>
    </View>
  );
}
