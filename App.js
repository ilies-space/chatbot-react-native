import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import Tts from 'react-native-tts';
import LottieView from 'lottie-react-native';
import {Example} from './app/ChatComponent';

export default function App() {
  const [Textinit, setTextinit] = useState('');
  return (
    <View
      style={{
        flex: 1,
        // alignItems: 'center',
        // backgroundColor: 'grey',
      }}>
      {/* //animation */}
      <View
        style={{
          height: 200,
          width: '100%',
          alignItems: 'center',
        }}>
        <LottieView source={require('./asset/siriLoader.json')} />
      </View>

      {/* CHAT VIEW  */}
      <Example />
    </View>
  );
}
