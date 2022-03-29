import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { MovieDBNowPlaying } from '../interfaces/Movie';
import movieBD from '../api/movieDB';

export const HomeScreen = () => {
  useEffect(() => {
    movieBD.get<MovieDBNowPlaying>('/now_playing').then(response => {
      console.log(response.data.results[0]);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
