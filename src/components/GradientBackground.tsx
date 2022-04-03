import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';
import LinearGradient from 'react-native-linear-gradient';

export const GradientBackground = ({ children }: GradientBackgroundProps) => {
  const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

  const { opactity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.6, y: 0.6 }}
        style={{ ...StyleSheet.absoluteFillObject }}
      />

      <Animated.View
        style={{ ...StyleSheet.absoluteFillObject, opacity: opactity }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.6, y: 0.6 }}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}
