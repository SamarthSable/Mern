import "./App.css";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import ItemList from "./pages/ItemList";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/blogdetail/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
