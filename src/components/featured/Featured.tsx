import {Link} from "react-router-dom";

import "./featured.scss";

export const Featured = () => {
  return (
    <>
      <section className="featured">
        <div className="featured_container">
          <div className="heading_container">
            <h2>Featured Movie</h2>
            <a href="#" className="see_more">
              see more <img src="/src/images/right.svg" alt="" />
            </a>
          </div>

          <div className="container">
            <div className="movie_list">
              <div className="movie_card">
                <div className="poster">
                  <div
                    className="poster_image"
                    style={{
                      backgroundImage: "url(/src/images/stranger_things.png)",
                    }}
                  ></div>
                  <div className="movie_category">
                    <div className="movie_type">
                      <h4>TV SERIES</h4>
                    </div>
                    <div className="like_btn">
                      <img src="/src/images/heart.svg" alt="like btn" />
                    </div>
                  </div>
                </div>

                <div className="movie_year">USA, 2016 - Current</div>
                <Link to={"/single"} className="movie_title">Stranger Things</Link>

                <div className="movie_rating">
                  <div className="imdb">
                    <img src="/src/images/imdb.svg" alt="imdb" />
                    <span>86.0/100</span>
                  </div>
                  <div className="rotten_tomatoes">
                    <img
                      src="/src/images/rotten_tomatoes.svg"
                      alt="rotten tomatoes"
                    />
                    <span>97%</span>
                  </div>
                </div>

                <div className="movie_genre">Action, Adventure, Horror</div>
              </div>
            </div>

            <div className="movie_list">
              <div className="movie_card">
                <div className="poster">
                  <div
                    className="poster_image"
                    style={{
                      backgroundImage: "url(/src/images/stranger_things.png)",
                    }}
                  ></div>
                  <div className="movie_category">
                    <div className="movie_type">
                      <h4>TV SERIES</h4>
                    </div>
                    <div className="like_btn">
                      <img src="/src/images/heart.svg" alt="like btn" />
                    </div>
                  </div>
                </div>

                <div className="movie_year">USA, 2016 - Current</div>
                <div className="movie_title">Stranger Things</div>

                <div className="movie_rating">
                  <div className="imdb">
                    <img src="/src/images/imdb.svg" alt="imdb" />
                    <span>86.0/100</span>
                  </div>
                  <div className="rotten_tomatoes">
                    <img
                      src="/src/images/rotten_tomatoes.svg"
                      alt="rotten tomatoes"
                    />
                    <span>97%</span>
                  </div>
                </div>

                <div className="movie_genre">Action, Adventure, Horror</div>
              </div>
            </div>

            <div className="movie_list">
              <div className="movie_card">
                <div className="poster">
                  <div
                    className="poster_image"
                    style={{
                      backgroundImage: "url(/src/images/stranger_things.png)",
                    }}
                  ></div>
                  <div className="movie_category">
                    <div className="movie_type">
                      <h4>TV SERIES</h4>
                    </div>
                    <div className="like_btn">
                      <img src="/src/images/heart.svg" alt="like btn" />
                    </div>
                  </div>
                </div>

                <div className="movie_year">USA, 2016 - Current</div>
                <div className="movie_title">Stranger Things</div>

                <div className="movie_rating">
                  <div className="imdb">
                    <img src="/src/images/imdb.svg" alt="imdb" />
                    <span>86.0/100</span>
                  </div>
                  <div className="rotten_tomatoes">
                    <img
                      src="/src/images/rotten_tomatoes.svg"
                      alt="rotten tomatoes"
                    />
                    <span>97%</span>
                  </div>
                </div>

                <div className="movie_genre">Action, Adventure, Horror</div>
              </div>
            </div>

            <div className="movie_list">
              <div className="movie_card">
                <div className="poster">
                  <div
                    className="poster_image"
                    style={{
                      backgroundImage: "url(/src/images/stranger_things.png)",
                    }}
                  ></div>
                  <div className="movie_category">
                    <div className="movie_type">
                      <h4>TV SERIES</h4>
                    </div>
                    <div className="like_btn">
                      <img src="/src/images/heart.svg" alt="like btn" />
                    </div>
                  </div>
                </div>

                <div className="movie_year">USA, 2016 - Current</div>
                <div className="movie_title">Stranger Things</div>

                <div className="movie_rating">
                  <div className="imdb">
                    <img src="/src/images/imdb.svg" alt="imdb" />
                    <span>86.0/100</span>
                  </div>
                  <div className="rotten_tomatoes">
                    <img
                      src="/src/images/rotten_tomatoes.svg"
                      alt="rotten tomatoes"
                    />
                    <span>97%</span>
                  </div>
                </div>

                <div className="movie_genre">Action, Adventure, Horror</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured_container">
          <div className="container">
            <div className="movie_list">
              <div className="movie_card">
                <div className="poster">
                  <div
                    className="poster_image"
                    style={{
                      backgroundImage: "url(/src/images/stranger_things.png)",
                    }}
                  ></div>
                  <div className="movie_category">
                    <div className="movie_type">
                      <h4>TV SERIES</h4>
                    </div>
                    <div className="like_btn">
                      <img src="/src/images/heart.svg" alt="like btn" />
                    </div>
                  </div>
                </div>

                <div className="movie_year">USA, 2016 - Current</div>
                <div className="movie_title">Stranger Things</div>

                <div className="movie_rating">
                  <div className="imdb">
                    <img src="/src/images/imdb.svg" alt="imdb" />
                    <span>86.0/100</span>
                  </div>
                  <div className="rotten_tomatoes">
                    <img
                      src="/src/images/rotten_tomatoes.svg"
                      alt="rotten tomatoes"
                    />
                    <span>97%</span>
                  </div>
                </div>

                <div className="movie_genre">Action, Adventure, Horror</div>
              </div>
            </div>

            <div className="movie_list">
              <div className="movie_card">
                <div className="poster">
                  <div
                    className="poster_image"
                    style={{
                      backgroundImage: "url(/src/images/stranger_things.png)",
                    }}
                  ></div>
                  <div className="movie_category">
                    <div className="movie_type">
                      <h4>TV SERIES</h4>
                    </div>
                    <div className="like_btn">
                      <img src="/src/images/heart.svg" alt="like btn" />
                    </div>
                  </div>
                </div>

                <div className="movie_year">USA, 2016 - Current</div>
                <div className="movie_title">Stranger Things</div>

                <div className="movie_rating">
                  <div className="imdb">
                    <img src="/src/images/imdb.svg" alt="imdb" />
                    <span>86.0/100</span>
                  </div>
                  <div className="rotten_tomatoes">
                    <img
                      src="/src/images/rotten_tomatoes.svg"
                      alt="rotten tomatoes"
                    />
                    <span>97%</span>
                  </div>
                </div>

                <div className="movie_genre">Action, Adventure, Horror</div>
              </div>
            </div>

            <div className="movie_list">
              <div className="movie_card">
                <div className="poster">
                  <div
                    className="poster_image"
                    style={{
                      backgroundImage: "url(/src/images/stranger_things.png)",
                    }}
                  ></div>
                  <div className="movie_category">
                    <div className="movie_type">
                      <h4>TV SERIES</h4>
                    </div>
                    <div className="like_btn">
                      <img src="/src/images/heart.svg" alt="like btn" />
                    </div>
                  </div>
                </div>

                <div className="movie_year">USA, 2016 - Current</div>
                <div className="movie_title">Stranger Things</div>

                <div className="movie_rating">
                  <div className="imdb">
                    <img src="/src/images/imdb.svg" alt="imdb" />
                    <span>86.0/100</span>
                  </div>
                  <div className="rotten_tomatoes">
                    <img
                      src="/src/images/rotten_tomatoes.svg"
                      alt="rotten tomatoes"
                    />
                    <span>97%</span>
                  </div>
                </div>

                <div className="movie_genre">Action, Adventure, Horror</div>
              </div>
            </div>

            <div className="movie_list">
              <div className="movie_card">
                <div className="poster">
                  <div
                    className="poster_image"
                    style={{
                      backgroundImage: "url(/src/images/stranger_things.png)",
                    }}
                  ></div>
                  <div className="movie_category">
                    <div className="movie_type">
                      <h4>TV SERIES</h4>
                    </div>
                    <div className="like_btn">
                      <img src="/src/images/heart.svg" alt="like btn" />
                    </div>
                  </div>
                </div>

                <div className="movie_year">USA, 2016 - Current</div>
                <div className="movie_title">Stranger Things</div>

                <div className="movie_rating">
                  <div className="imdb">
                    <img src="/src/images/imdb.svg" alt="imdb" />
                    <span>86.0/100</span>
                  </div>
                  <div className="rotten_tomatoes">
                    <img
                      src="/src/images/rotten_tomatoes.svg"
                      alt="rotten tomatoes"
                    />
                    <span>97%</span>
                  </div>
                </div>

                <div className="movie_genre">Action, Adventure, Horror</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
