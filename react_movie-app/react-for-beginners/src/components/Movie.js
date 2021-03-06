import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <li>
      <img src={coverImg} alt={title}/>
      <h2>
        <Link to={`/movie/${id}`}>

        {/* <a href="/movie"> */}

        {title}
        {/* </a> */}
        </Link>
      </h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </li>);
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;