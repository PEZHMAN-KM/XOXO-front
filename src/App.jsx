import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Table from "./pages/Table";
import GameDesign from "./pages/GameDesign";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/table" element={<Table />} />
          <Route path="/gamedesign" element={<GameDesign />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
