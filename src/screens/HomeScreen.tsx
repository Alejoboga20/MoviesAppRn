import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlayingMovies } = useMovies();

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={200} />
      </View>
    );

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlayingMovies}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        <View style={{ height: 250 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Popular Movies
          </Text>
          <FlatList
            data={nowPlayingMovies}
            renderItem={({ item }) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        <View style={{ height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Popular Movies
          </Text>
          <FlatList
            data={nowPlayingMovies}
            renderItem={({ item }) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </View>
    </ScrollView>
  );
};
