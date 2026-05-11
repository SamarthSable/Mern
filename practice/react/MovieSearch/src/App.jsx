import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/MovieList";
import MovieDeatils from "./pages/MovieDeatils";
import MyMovies from "./pages/MyMovies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/moviedetail/:id" element={<MovieDeatils />} />
        <Route path="/favmovie" element={<MyMovies />} />
      </Routes>
    </>
  );
}

export default App;
