import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import Tts from 'react-native-tts';

export default function App() {
  const [Textinit, setTextinit] = useState('');
  return (
    <View>
      <TextInput
        value={Textinit}
        onChangeText={(value) => {
          setTextinit(value);
        }}
        placeholder={'input text to transfer it to speech'}
      />
      <Button
        title={'Speech'}
        onPress={() => {
          Tts.speak(Textinit);
        }}
      />
    </View>
  );
}
