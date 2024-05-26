import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen">
        <Navbar />
        <div className=" hidden xl:flex">
          <Profile />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
