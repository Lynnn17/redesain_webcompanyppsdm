import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Sejarah from "./components/Sejarah";
import Pengertian from "./components/Pengertian";
import Berita from "./components/Berita";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Pengertian />
      <Sejarah />
      <Service />
      <Berita />
    </>
  );
}

export default App;
