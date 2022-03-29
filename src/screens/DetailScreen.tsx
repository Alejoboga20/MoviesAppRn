import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

export const DetailScreen = ({ route }: DetailScreenProps) => {
  const movie = route.params;

  return (
    <View>
      <Text>{JSON.stringify(movie, null, 4)}</Text>
    </View>
  );
};

interface DetailScreenProps
  extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
