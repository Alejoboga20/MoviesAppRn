import React from 'react';
import { Text, View } from 'react-native';
import { Cast } from '../interfaces/Credits';
import { MovieFull } from '../interfaces/Movie';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

export const MovieDetails = ({ movieFull, cast }: MovieDetailsProps) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text>{movieFull.vote_average}</Text>

          <Text style={{ marginLeft: 5 }}>
            {' '}
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10 }}>
          History
        </Text>

        <Text style={{ fontSize: 16, marginTop: 10 }}>
          {movieFull.overview}
        </Text>

        <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10 }}>
          Budget
        </Text>

        <Text style={{ fontSize: 18, marginTop: 10 }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            marginTop: 10,
            marginHorizontal: 20,
          }}>
          Actors
        </Text>
        <CastItem actor={cast[0]} />
      </View>
    </>
  );
};

interface MovieDetailsProps {
  movieFull: MovieFull;
  cast: Cast[];
}
