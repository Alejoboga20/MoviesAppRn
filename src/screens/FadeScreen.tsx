import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

export const FadeScreen = () => {
  const opactity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opactity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

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
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opactity,
        }}
      />
    </View>
  );
};
