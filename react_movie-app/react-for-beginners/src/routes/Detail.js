import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    console.log(json)
    setLoading(false);
  };
  // console.log(id)

  useEffect(() => {
    getMovie();
  }, [])

  return (
    <div>
      {
        loading ?
          <h1>Loading...</h1> :
          <div>Helo {movie.data.movie.id}</div>
          
      }
    </div>
  )
}

export default Detail;