import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
  const { isLoading, nowPlayingMovies } = useMovies();

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={200} />
      </View>
    );

  return (
    <View>
      <Text>{nowPlayingMovies[0]?.title}</Text>
      <Text>{nowPlayingMovies[1]?.title}</Text>
      <Text>{nowPlayingMovies[2]?.title}</Text>
    </View>
  );
};
