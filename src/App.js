import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (

    // Navigate different conponets

    <Router>
      {/* each page with have the Nav bar, put on top of Routes. element will link to different pages*/}
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/About" element={<About />} />

        {/* Nested Route here*/}
        <Route path="/Menu" element={<Menu />} >
        </Route>



        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
