const Movie = (props) => {
  return (
    <div className="movie">
      <h3>{props.movie.name}</h3>
      <p>{props.movie.price}</p>
    </div>
  );
};

export default Movie;
