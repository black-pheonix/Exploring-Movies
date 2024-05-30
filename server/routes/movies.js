const express = require('express');
const axios = require('axios');
const Movie = require('../models/MovieModel');
const router = express.Router();

// Search movies by title or genre
router.get('/search', async (req, res) => {
  const { title } = req.query;
  const url = `http://www.omdbapi.com/?s=${title}&apikey=${process.env.OMDB_API_KEY}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from OMDb API' });
  }
});

// Get movie details by IMDb ID and save to MongoDB
router.get('/details/:id', async (req, res) => {
  const { id } = req.params;
  const url = `http://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`;

  try {
    const response = await axios.get(url);
    const movieData = response.data;

    // Save to MongoDB
    // const movie = new Movie({
    //   title: movieData.Title,
    //   year: movieData.Year,
    //   rated: movieData.Rated,
    //   released: movieData.Released,
    //   runtime: movieData.Runtime,
    //   genre: movieData.Genre,
    //   director: movieData.Director,
    //   writer: movieData.Writer,
    //   actors: movieData.Actors,
    //   plot: movieData.Plot,
    //   language: movieData.Language,
    //   country: movieData.Country,
    //   awards: movieData.Awards,
    //   poster: movieData.Poster,
    //   ratings: movieData.Ratings,
    //   metascore: movieData.Metascore,
    //   imdbRating: movieData.imdbRating,
    //   imdbVotes: movieData.imdbVotes,
    //   imdbID: movieData.imdbID,
    //   type: movieData.Type,
    //   dvd: movieData.DVD,
    //   boxOffice: movieData.BoxOffice,
    //   production: movieData.Production,
    //   website: movieData.Website,
    // });

    // await movie.save();

    res.json(movieData);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error fetching data from OMDb API' });
  }
});

module.exports = router;
