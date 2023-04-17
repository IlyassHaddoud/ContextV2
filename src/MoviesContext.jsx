import { createContext, useState } from "react";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([
    { name: "Attack on titans", price: "34$", id: 34 },
    { name: "One piece", price: "27$", id: 65 },
    { name: "Black clover", price: "11$", id: 103 },
  ]);
  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContext;
