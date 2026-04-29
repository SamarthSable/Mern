// import { useState } from "react";
// import ChildParet from "./ChildParet";
// import Modal from "./modal";

import UserDetail from "./UserDetail";

// import FetchPost from "./FetchPost";

// import { useState } from "react";
// import Task from "./Task";

// import FromData from "./FromData";
// import SearchFilter from "./components/SearchFilter";
function App() {
  // const [data, setData] = useState("");
  // const [value, setValue] = useState(true);

  // function handleValue(data) {
  //   setValue(data);
  // }

  // if (!value) {
  //   return null;
  // }

  // function handleChild(value) {
  //   setData(value);
  // }
  // const [list, setList] = useState([]);

  // function handleList(data) {
  //   setList([...list, data]);
  // }

  return (
    <>
      {/* <Modal sendvalue={handleValue} /> */}
      {/* <h1>{data}</h1> */}
      {/* <ChildParet sendData={handleChild}></ChildParet> */}
      {/* <FromData /> */}
      {/* <Task sendData={handleList} />
      {list.length === 0 ? (
        <h2>No Tasks Available</h2>
      ) : (
        list.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <button>Delete</button>
            </div>
          );
        })
      )} */}
      {/* <h1>App</h1>
      <SearchFilter /> */}
      {/* <FetchPost /> */}
      <UserDetail />
    </>
  );
}

export default App;
