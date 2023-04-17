import { useContext } from "react";
import Movie from "./Movie";
import MoviesContext from "./MoviesContext";
const MovieList = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
