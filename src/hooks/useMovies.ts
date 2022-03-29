import { useEffect, useState } from 'react';
import { Movie, MoviesResponse } from '../interfaces/Movie';
import movieBD from '../api/movieDB';

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const nowPlaying = movieBD.get<MoviesResponse>('/now_playing');
    const popular = movieBD.get<MoviesResponse>('/popular');
    const topRated = movieBD.get<MoviesResponse>('/top_rated');
    const upcoming = movieBD.get<MoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { isLoading, ...moviesState };
};

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
