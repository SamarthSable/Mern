import "./App.css";
import Box from "./components/box/Box";
import Counter from "./components/Counter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <section className="content">
        <Box size="small" style={{ backgroundColor: "red" }}>
          Box1
        </Box>
        <Box size="medium" style={{ backgroundColor: "green" }}>
          Box2
        </Box>
        <Box size="large" style={{ backgroundColor: "blue" }}>
          Box3
        </Box>
      </section>
      <Counter />
      <Footer />
    </>
  );
}

export default App;
