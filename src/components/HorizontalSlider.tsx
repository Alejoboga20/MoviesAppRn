import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/Movie';
import { MoviePoster } from './MoviePoster';

export const HorizontalSlider = ({ title, movies }: HorizontalSliderProps) => {
  return (
    <View style={{ height: !!title ? 260 : 220 }}>
      {title && (
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

interface HorizontalSliderProps {
  title?: string;
  movies: Movie[];
}
