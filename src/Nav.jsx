import { useContext } from "react";
import MoviesContext from "./MoviesContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  return (
    <div className="nav">
      <p>
        <b>Movies</b>
      </p>
      <p>list of movies : {movies.length} </p>
    </div>
  );
};

export default Nav;
