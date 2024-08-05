import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsBlog } from "./pages/NewsBlog";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<NewsBlog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
