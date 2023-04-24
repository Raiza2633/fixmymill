import React from "react";
import Booknow from "../components/Booknow/Booknow";
import Clients from "../components/Clients/Clients";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Whychoose from "../components/Whychoose/Whychoose";

const HomePage = () => {
  return (
    <>
    <Navbar />
      <Home />
      <Services />
      <Booknow />
      <Whychoose />
      <Clients />
    </>
  );
};

export default HomePage;
