import React from 'react';
import { Cast } from '../interfaces/Credits';
import { Image, StyleSheet, Text, View } from 'react-native';

export const CastItem = ({ actor }: CastItemProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            marginHorizontal: 5,
          }}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    height: 50,
    marginRight: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.24,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});

interface CastItemProps {
  actor: Cast;
}
