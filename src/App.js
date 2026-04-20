import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Casual from "./pages/Casual";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement/Announcement";

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casual" element={<Casual />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;