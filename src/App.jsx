import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { MoviesProvider } from "./MoviesContext";
import Nav from "./Nav";
function App() {
  return (
    <MoviesProvider>
      <div className="App">
        <Nav />
        <div className="main">
          <AddMovie />
          <MovieList />
        </div>
      </div>
    </MoviesProvider>
  );
}

export default App;
