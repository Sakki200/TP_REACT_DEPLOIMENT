import { useEffect } from "react";

export default function Portfolio() {
  const url = "details";

  const select = (el: any, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type: any, el: any, listener: any, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e: any) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("load", () => {
      let portfolioContainer = select(".portfolio-container");
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: ".portfolio-item",
        });

        let portfolioFilters = select("#portfolio-flters li", true);

        on(
          "click",
          "#portfolio-flters li",
          function (e: any) {
            e.preventDefault();
            portfolioFilters.forEach(function (el) {
              el.classList.remove("filter-active");
            });
            this.classList.add("filter-active");

            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            portfolioIsotope.on("arrangeComplete", function () {
              AOS.refresh();
            });
          },
          true
        );
      }
    });

    const portfolioLightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });

    const portfolioDetailsLightbox = GLightbox({
      selector: ".portfolio-details-lightbox",
      width: "90%",
      height: "90vh",
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="../public/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="../public/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="details"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
