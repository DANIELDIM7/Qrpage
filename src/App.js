import Container from "./components/Container";
import InputDesign from "./components/InputDesign";
import Home from "./pages/Home";
import QrPage from "./pages/QrPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Qrpage" element={<QrPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
