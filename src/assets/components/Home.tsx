import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import "../css/style.css";
import Header from "./Header";
import Hero from "./Hero.tsx";
import About from "./About.tsx";
import Facts from "./Facts.tsx";
import Footer from "./Footer.tsx";
import Skills from "./Skills.tsx";
import Resume from "./Resume.tsx";
import Portfolio from "./Portfolio.tsx";
import Services from "./Services.tsx";
import Testimonials from "./Testimonials.tsx";
import Contact from "./Contact.tsx";
import BacktoTop from "./BacktoTop.tsx";
import Preloader from "./Preloader.tsx";

export default function Home() {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Preloader />
      <BacktoTop />
    </>
  );
}
