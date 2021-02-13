import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import Tts from 'react-native-tts';
import LottieView from 'lottie-react-native';

export default function App() {
  const [Textinit, setTextinit] = useState('');
  return (
    <View
      style={{
        justifyContent: 'center',
        // alignItems: 'center',
      }}>
      {/* //animation */}
      <View
        style={{
          height: 200,
          width: '100%',
          alignItems: 'center',
        }}>
        <LottieView source={require('./asset/siriLoader.json')} autoPlay loop />
      </View>

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
