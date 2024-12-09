import { Route, Routes } from "react-router";
import Detail from "./Detail";
import List from "./List";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
