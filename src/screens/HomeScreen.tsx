import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={200} />
      </View>
    );

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying!}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
            />
          </View>

          <HorizontalSlider movies={popular!} title="Popular Movies" />
          <HorizontalSlider movies={topRated!} title="Top Rated" />
          <HorizontalSlider movies={upcoming!} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
