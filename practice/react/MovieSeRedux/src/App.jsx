import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/MovieList";
import MyFav from "./pages/MyFav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="myfavmovie" element={<MyFav />} />
      </Routes>
    </>
  );
}

export default App;
