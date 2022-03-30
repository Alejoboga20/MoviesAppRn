import React from 'react';
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
  const { opactity, fadeIn, fadeOut } = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          marginBottom: 10,
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opactity,
        }}
      />

      <Button onPress={fadeOut} title="Fade Out" />
      <Button onPress={fadeIn} title="Fade In" />
    </View>
  );
};
