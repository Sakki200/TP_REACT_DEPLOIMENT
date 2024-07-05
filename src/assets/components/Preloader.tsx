import { useEffect } from "react";

export default function Preloader() {
  const select = (el: any, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  useEffect(() => {
    let preloader = select("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
  }, []);

  return <div id="preloader"></div>;
}
