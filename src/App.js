import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";

import { CardMapping } from "./components/card";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardMapping />
    </>
  );
};

export default App;
