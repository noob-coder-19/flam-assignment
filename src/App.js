import { Route, Routes } from "react-router-dom";
import Interact from "./components/Interact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/interact" element={<Interact />}></Route>
      </Routes>
    </>
  );
}

export default App;
