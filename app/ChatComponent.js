import React, {useState, useCallback, useEffect} from 'react';
import {View, Button} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

export function Example() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const response = [
    {
      text: 'HI',
      user: {_id: 1},
      createdAt: '2021-02-14T15:16:24.555Z',
      _id: '6c05212f-3e2c-4cdc-832d-bb75a052e9b6',
    },
  ];
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Button
        title={'RESPONS'}
        onPress={() => {
          setMessages((previousMessage) => {
            GiftedChat.append(previousMessage, messages);
          });
        }}
      />
      <GiftedChat
        messages={messages}
        onSend={(messages) => {
          console.log(JSON.stringify(messages));
          onSend(messages);
        }}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
