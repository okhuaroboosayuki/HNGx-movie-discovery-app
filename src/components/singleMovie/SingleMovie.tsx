import { Link, useParams } from "react-router-dom";
import "./single-movie.scss";
import { useFetch } from "../../hooks/useFetch";

export const SingleMovie = () => {
  const params = useParams();

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const { error, data } = useFetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}`
  );

  if (error) {
    console.log(error);
  }

  const movieRunTimeInHours = Math.floor(data?.runtime / 60);

  const movieRunTimeInMins = data?.runtime % 60;

  return (
    <section className="single_movie">
      <aside>
        <nav>
          <Link to={"/"} className="logo">
            <img
              src="/images/logo.svg"
              alt="Movie Discovery Logo"
              loading="lazy"
            />
            <span>MovieBox</span>
          </Link>

          <ul>
            <li className="home">
              <img
                src="/images/home.svg"
                alt="home_icon"
                className="home_icon"
              />
              <p className="home_tag">Home</p>
            </li>
            <li className="movies">
              <img
                src="/images/video.svg"
                alt="video_icon"
                className="video_icon"
              />
              <p className="movies_tag">Movies</p>
            </li>
            <li className="tv_series">
              <img src="/images/tv-box.svg" alt="tv_icon" className="tv_icon" />
              <p className="tv_series_tag">TV Series</p>
            </li>
            <li className="upcoming">
              <img
                src="/images/calendar.svg"
                alt="calendar_icon"
                className="calendar_icon"
              />
              <p className="upcoming_tag">Upcoming</p>
            </li>
          </ul>

          <div className="side_box">
            <p className="top">Play movie quizes and earn free tickets</p>
            <p className="middle">50k people are playing now</p>
            <button className="bottom">Start playing</button>
          </div>

          <div className="logout_box">
            <img
              src="/images/door-out.svg"
              alt="logout_icon"
              className="logout_icon"
            />
            <p className="logout_tag">Log out</p>
          </div>
        </nav>
      </aside>

      <section className="movie_details_wrapper">
        <div
          className="movie_play_box"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        >
          <div className="play_btn">
            <img
              src="/images/play_2.svg"
              alt="play_button"
              className="play_button"
            />
          </div>
        </div>

        <div className="movie_details_container">
          <div className="movie_details_left">
            <div className="title_box_container">
              <div className="title_box">
                <span data-testid="movie-title">{data.title}</span> •{" "}
                <span data-testid="movie-release-date">
                  {new Date(data.release_date).getUTCFullYear()}
                </span>{" "}
                • PG-13 • {movieRunTimeInHours}h{" "}
                <span data-testid="movie-runtime">{movieRunTimeInMins}</span>m
              </div>
              <div className="category">
                <div className="cat_1">{data.genres[0].name}</div>
                <div className="cat_2">
                  {data.genres[1].name ? data.genres[1].name : ""}
                </div>
              </div>
            </div>

            <div className="description" data-testid="movie-overview">
              {data.overview}
            </div>

            <div className="crew">
              <div className="director">
                Director : <span>Joseph Kosinski</span>
              </div>
              <div className="writers">
                Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
              </div>
              <div className="stars">
                Stars : <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
              </div>
            </div>

            <div className="ratings_and_awards_container">
              <div className="ratings_and_awards">
                <div className="rating">Top rated movie #65</div>
                <div className="award">
                  <p>Awards 9 nominations</p>
                </div>
              </div>
              <img
                src="/images/arrow-down.svg"
                alt="arrow_down"
                className="arrow_down_icon"
              />
            </div>
          </div>

          <div className="movie_details_right">
            <div className="num_stars">
              <img src="/images/star.svg" alt="star" className="star_icon" />
              <p>
                <span className="rate">{data.vote_average}</span> |
                <span className="views">350k</span>
              </p>
            </div>
            <div className="showtimes">
              <img
                src="/images/tilt-box.svg"
                alt="showtimes icon"
                className="showtimes_icon"
              />
              See Showtimes
            </div>
            <div className="options">
              <img
                src="/images/stack.svg"
                alt="stack icon"
                className="stack_icon"
              />
              More watch options
            </div>
            <div className="best_show_box"></div>
          </div>
        </div>
      </section>
    </section>
  );
};
