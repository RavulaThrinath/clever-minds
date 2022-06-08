import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
import Careers from "./Pages/Careers/Careers";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Footer from "./Components/Footer/Footer";
import ScrollTop from "./Components/ScrollTop";
// import Scrollup from "./Components/Scrollup";
// import Navigation from "./Components/Navigation/Navigation";
import MainNavbar from "./Components/Navigation/MainNavbar";
import NavElements from "./Components/Navigation/NavigationElements/NavElements";
import { Helmet } from "react-helmet";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Clever minds technologies</title>
          <meta
            name="description"
            content="Clever minds technologies delivers digital transformation and technology services from ideation to execution, enabling clients to outperform the competition"
          />
          <meta
            name="keywords"
            content="Software, IT, Consultancy, Cloud, Development, Cyber Security"
          />
        </Helmet>
        <NavElements isOpen={isOpen} toggle={toggle} />
        <MainNavbar toggle={toggle} />
        <ScrollTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About title="About Us" />}></Route>
          <Route
            path="/services"
            element={<Services title="Our Services" />}
          ></Route>
          <Route path="/careers" element={<Careers title="Join Us" />}></Route>
          <Route
            path="/contact"
            element={<Contact title="Get in Touch" />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
