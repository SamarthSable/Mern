import "./App.css";
import ShowPost from "./pages/ShowPost";
import PostProvider from "./provider/PostProvider";

function App() {
  return (
    <>
      <PostProvider>
        <ShowPost />
      </PostProvider>
    </>
  );
}

export default App;
