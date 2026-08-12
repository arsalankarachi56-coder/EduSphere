import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Instructors from "./pages/Instructors";
import InstructorDetails from "./pages/InstructorDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<CourseDetails />}/>
        <Route path="/instructors/:id"element={<InstructorDetails />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App; 