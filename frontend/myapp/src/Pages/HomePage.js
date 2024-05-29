import React from "react";
import NavBar from "../components/NavBar";

import "./../components/style.css";
import image1 from "../image/book-1.png";
import image2 from "../image/book-2.png";
import image3 from "../image/book-3.png";
import image4 from "../image/book-4.png";
import image5 from "../image/book-5.png";
import image6 from "../image/book-6.png";
import image7 from "../image/stand.png";

import { Link } from "react-router-dom";
const HomePage = () => {
  useEffect(() => {
    searchForm = document.querySelector(".search-form");

    document.querySelector("#search-btn").onclick = () => {
      searchForm.classList.toggle("active");
    };

    let loginForm = document.querySelector(".login-form-container");

    document.querySelector("#login-btn").onclick = () => {
      loginForm.classList.toggle("active");
    };

    document.querySelector("#close-login-btn").onclick = () => {
      loginForm.classList.remove("active");
    };

    window.onscroll = () => {
      searchForm.classList.remove("active");

      if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
      } else {
        document.querySelector(".header .header-2").classList.remove("active");
      }
    };

    window.onload = () => {
      if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
      } else {
        document.querySelector(".header .header-2").classList.remove("active");
      }

      fadeOut();
    };

    function loader() {
      document.querySelector(".loader-container").classList.add("active");
    }

    function fadeOut() {
      setTimeout(loader, 4000);
    }

    var swiper = new Swiper(".books-slider", {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".featured-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });

    var swiper = new Swiper(".arrivals-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".reviews-slider", {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".blogs-slider", {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <>
      <NavBar />
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>upto 75% off</h3>
            <p>
              If you’re an Engineering student and need a books, Books4MU has
              great deals on a wide range of books. Shop for these books from
              top authors and avail hugely discounted prices
            </p>
            <a href="#" className="btn">
              shop now
            </a>
          </div>

          <div className="swiper books-slider">
            <div className="swiper-wrapper">
              <a href="#" className="swiper-slide">
                <img src={image1} alt="" />
              </a>
              <a href="#" className="swiper-slide">
                <img src={image2} alt="" />
              </a>
              <a href="#" className="swiper-slide">
                <img src={image3} alt="" />
              </a>
            </div>
            <img src={image7} className="stand" alt="" />
          </div>
        </div>
      </section>

      <section className="featured" id="featured">
        <h1 className="heading">
          {" "}
          <span>featured books</span>{" "}
        </h1>

        <div className="swiper featured-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <a href="./product.html">
                  {" "}
                  <img src="image/book-1.png" alt="" />{" "}
                </a>
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <a href="./product.html">
                  {" "}
                  <img src="image/book-2.png" alt="" />{" "}
                </a>
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <a href="product.html">
                  <img src="image/book-3.png" alt="" />{" "}
                </a>
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src="image/book-4.png" alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src="image/book-5.png" alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src="image/book-6.png" alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src="image/book-7.png" alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src="image/book-8.png" alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src="image/book-9.png" alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src="image/book-10.png" alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="./cart.html" className="btn">
                  add to cart
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
