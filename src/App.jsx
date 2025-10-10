import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browser" element={<h1>Load browser page</h1>} />
    </Routes>
  );
}

export default App;
