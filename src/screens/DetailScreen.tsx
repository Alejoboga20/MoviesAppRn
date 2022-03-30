import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { ActivityIndicator } from 'react-native';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route, navigation }: DetailScreenProps) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.title}</Text>
        <Text style={styles.title}>{movie.original_title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" color="white" size={40} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 10,
    top: 60,
    left: 20,
  },
});

interface DetailScreenProps
  extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
