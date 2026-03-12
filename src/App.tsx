// Lib
import { Routes, Route } from "react-router-dom";
// Global
import { GlobalStyle } from "./styles/global";
// Pages
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
