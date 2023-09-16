import { Header, Footer, Featured } from "./components";
import { useFetch } from "./hooks/useFetch";

function App() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const { error, data } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  return (
    <>
      <Header error={error} data={data} />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
