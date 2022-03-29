import { useEffect, useState } from 'react';
import { Movie, MovieDBNowPlaying } from '../interfaces/Movie';
import movieBD from '../api/movieDB';

export const useMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const response = await movieBD.get<MovieDBNowPlaying>('/now_playing');
    setNowPlayingMovies(response.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { isLoading, nowPlayingMovies };
};
