import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Casual from "./pages/Casual";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casual" element={<Casual />} />
      </Routes>
    </Router>
  );
}

export default App;