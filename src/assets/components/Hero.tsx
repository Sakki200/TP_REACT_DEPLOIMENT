import { useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  const select = (el: any, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  useEffect(() => {
    const typed = select(".typed");
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      const instance = new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });

      return () => {
        instance.destroy();
      };
    }
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Brandon Johnson</h1>
        <p>
          I'm&ensp;
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
