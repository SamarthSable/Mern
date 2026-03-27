import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import Settings from "./components/Settings";
import UserSeetings from "./components/UserSeetings";
import AdminSettings from "./components/AdminSettings";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<UserSeetings />} />
            <Route path="admin/:id" element={<AdminSettings />} />
          </Route>
          <Route path="product/:id" element={<Products />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
