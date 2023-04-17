import { useContext, useState } from "react";
import MoviesContext from "./MoviesContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addMovie = () => {
    setMovies((movies) => [...movies, { id, name, price }]);
  };

  return (
    <div className="add">
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addMovie}>Add</button>
    </div>
  );
};

export default AddMovie;
