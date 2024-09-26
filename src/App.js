import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            {/* You can add more routes for other sections like Projects later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
