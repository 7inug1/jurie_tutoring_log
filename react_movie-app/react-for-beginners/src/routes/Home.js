import { useState, useEffect } from 'react';
import Movie from '../components/Movie';


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // // 방법 2:
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );
    // const json = await response.json();
    // setMovies(json.data.movies);
    // setLoading(false);

    // 방법 3:
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    // //방법 1:
    //   fetch(
    //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    //   )
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setMovies(json.data.movies);
    //       // console.log(json.data.movies);
    //       setLoading(false);
    //     });
    getMovies();
  }, []);
  // console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home