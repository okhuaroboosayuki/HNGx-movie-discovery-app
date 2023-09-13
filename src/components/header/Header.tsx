import { useState } from "react";
import "./header.scss";

export const Header = () => {
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

  return (
    <header>
      <div
        className="bg_image"
        style={{
          backgroundImage: "url(/src/images/john_wick.svg)",
        }}
      ></div>

      <div className="container">
        <nav>
          <a href="https//" className="logo">
            <img
              src="/src/images/logo.svg"
              alt="Movie Discovery Logo"
              loading="lazy"
            />
            <span>MovieBox</span>
          </a>

          <div className="search">
            <input
              type="search"
              placeholder="What do you want to watch?"
              className="search_input"
            />
            <img
              src="/src/images/Search.svg"
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
            <h2>John Wick 3 : Parabellum</h2>
            <div className="rating">
              <div className="imdb">
                <img src="/src/images/imdb.svg" alt="imdb" />
                <span>86.0/100</span>
              </div>

              <div className="rotten_tomatoes">
                <img src="/src/images/rotten_tomatoes.svg" alt="rotten tomatoes" />
                <span>97%</span>
              </div>
            </div>

            <p className="description">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>

            <button>
              <img src="/src/images/Play.svg" alt="play" />
              watch trailer
            </button>
          </div>
          <div className="pagination">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </div>
    </header>
  );
};
