import { useEffect } from "react";

export default function BacktoTop() {
  const select = (el: any, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const onscroll = (el: any, listener: any) => {
    el.addEventListener("scroll", listener);
  };
  useEffect(() => {
    let backtotop = select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }
  }, []);

  return (
    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
