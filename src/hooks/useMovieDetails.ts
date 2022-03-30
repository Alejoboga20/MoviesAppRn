import { useEffect, useState } from 'react';
import { MovieFull } from '../interfaces/Movie';
import { Cast, CreditsResponse } from '../interfaces/Credits';
import movieBD from '../api/movieDB';

export const useMovieDetails = (movieId: number): MovieDetails => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieBD.get<MovieFull>(`/${movieId}`);
    const castPromise = movieBD.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return { ...state };
};

interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull?: MovieFull;
}
