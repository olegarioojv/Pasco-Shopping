// Lib
import { Routes, Route } from "react-router-dom";
// Global
import { GlobalStyle } from "./styles/global";
// Pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
