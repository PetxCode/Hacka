import React from "react";
import About from "./About/About";
import GetStarted from "./Header/GetStarted";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

const HomeSreeen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <GetStarted />
      <About />
    </div>
  );
};

export default HomeSreeen;
