import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {
  const opactity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callback?: () => void) => {
    Animated.timing(opactity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = () => {
    Animated.timing(opactity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    opactity,
    fadeIn,
    fadeOut,
  };
};
