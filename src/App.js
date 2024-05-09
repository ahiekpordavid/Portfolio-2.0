import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import './index.css';
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen">
        <Navbar />
        <Profile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
        </Routes>
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
