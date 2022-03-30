import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['blue', 'red', 'pink']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      {children}
    </View>
  );
};

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}
