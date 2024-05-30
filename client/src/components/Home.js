import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const Home = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);

  const searchMovies = async () => {
    if (search.trim() === '') {
      setMovies([]);
      setSearched(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/movies/search?title=${search}`);
      setMovies(response.data.Search);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]);
      setSearched(true);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchMovies();
    }
  };

  return (
    <div className={`container ${searched ? 'searched' : ''}`}>
      <h1>Movie Explorer</h1>
      <div className="input-group mb-3">
        <input
          id= "search"
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for movies..."
        />
        <button className="btn btn-primary" onClick={searchMovies}>Search</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
