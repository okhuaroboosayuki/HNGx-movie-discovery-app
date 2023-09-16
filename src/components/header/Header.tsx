import { useState } from "react";
import { A11y, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import "./header.scss";
// import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export const Header = ({error, data}: any) => {

  const [burgerBarClass, setBurgerBarClass] = useState("burger_bar unclicked");
  const [menuToggle, setMenuToggle] = useState(false);

  const showMenu = () => {
    if (!menuToggle) {
      setBurgerBarClass("burger_bar clicked");
      setMenuToggle(true);
    } else {
      setBurgerBarClass("burger_bar unclicked");
      setMenuToggle(false);
    }
    setMenuToggle(!menuToggle);
  };

  if (error) {
    console.log(error);
  }

  const slicedData = data?.results?.slice(0, 5);

  const pagination = {
    el: ".pagination",
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <header>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        pagination={pagination}
        speed={1000}
        allowTouchMove={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
      >
        {slicedData?.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <div
              className="bg_image"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            ></div>

            <div className="wrapper">
              <div className="container">
                <nav>
                  <Link to={"/"} className="logo">
                    <img
                      src="/images/logo.svg"
                      alt="Movie Discovery Logo"
                      loading="lazy"
                    />
                    <span>MovieBox</span>
                  </Link>

                  <div className="search">
                    <input
                      type="search"
                      placeholder="What do you want to watch?"
                      className="search_input"
                    />
                    <img
                      src="/images/Search.svg"
                      alt="search icon"
                      className="search_icon"
                    />
                  </div>

                  <div className="auth_and_mobileMenu">
                    <a href="#">Sign In</a>
                    <div
                      className="responsive_menu_icon"
                      onClick={() => {
                        showMenu();
                      }}
                    >
                      <div className={burgerBarClass}></div>
                      <div className={burgerBarClass}></div>
                    </div>
                  </div>
                </nav>

                <div className="description_container">
                  <div className="description_box">
                    <h2>
                      <Link to={`/movies/${movie.id}`}>
                      {movie.title}
                      </Link>
                    </h2>
                    <div className="rating">
                      <div className="imdb">
                        <img src="/images/imdb.svg" alt="imdb" />
                        <span>86.0/100</span>
                      </div>

                      <div className="rotten_tomatoes">
                        <img
                          src="/images/rotten_tomatoes.svg"
                          alt="rotten tomatoes"
                        />
                        <span>97%</span>
                      </div>
                    </div>

                    <p className="description">
                      {movie.overview}
                    </p>

                    <Link to={`/movies/${movie.id}`} className="link" >
                      <img src="/images/Play.svg" alt="play" />
                      watch trailer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="pagination_wrapper">
          <div className="pagination"></div>
        </div>
      </Swiper>
    </header>
  );
};
