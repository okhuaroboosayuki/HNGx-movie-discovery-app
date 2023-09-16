import { Suspense, lazy } from "react";
import { Header, Footer } from "./components";
import { useFetch } from "./hooks/useFetch";
import { ComponentLoader } from "./components/loader/Loader";

const Featured = lazy(() =>
  import("./components/featured/Featured").then(({ Featured }) => ({
    default: Featured,
  }))
);

function App() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const { error, data } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  return (
    <>
      <Header error={error} data={data} />
      <Suspense fallback={<ComponentLoader />}>
        <Featured />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
