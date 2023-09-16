import { Link } from "react-router-dom";
import "./featured.scss";
import { useFetch } from "../../hooks/useFetch";
import { ComponentLoader } from "../loader/Loader";

export const Featured = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const { loading, error, data } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
  );

  if (error) {
    console.log(error);
  }

  const slicedData = data?.results?.slice(0, 10);

  return (
    <>
      <section className="featured">
        {loading ? (
          <ComponentLoader />
        ) : (
          <div className="featured_container">
            <div className="heading_container">
              <h2>Featured Movie</h2>
              <a href="#" className="see_more">
                see more <img src="/images/right.svg" alt="" />
              </a>
            </div>

            <div className="container">
              {slicedData?.map((movie: any) => (
                <div className="movie_list" key={movie.id}>
                  <div className="movie_card" data-testid="movie-card" >
                    <div className="poster" data-testid="movie-poster" >
                      <div
                        className="poster_image"
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                        }}
                      ></div>
                      <div className="movie_category">
                        <div className="movie_type">
                          <h4>Movie</h4>
                        </div>
                        <div className="like_btn">
                          <img src="/images/heart.svg" alt="like btn" />
                        </div>
                      </div>
                    </div>

                    <div className="movie_year">USA, <span data-testid="movie-release-date">{new Date(movie.release_date).getFullYear()}</span></div>
                    <Link to={`/movies/${movie.id}`} className="movie_title" data-testid="movie-title" >
                      {movie.title}
                    </Link>

                    <div className="movie_rating">
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

                    <div className="movie_genre">Action, Adventure, Horror</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
