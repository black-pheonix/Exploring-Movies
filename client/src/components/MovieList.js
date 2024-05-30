import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.imdbID} className="col-md-4 mb-4">
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title} ({movie.Year})</h5>
                <p className="card-text">{movie.Type}</p>
                <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
