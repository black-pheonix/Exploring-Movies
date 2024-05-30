const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  rated: String,
  released: String,
  runtime: String,
  genre: String,
  director: String,
  writer: String,
  actors: String,
  plot: String,
  language: String,
  country: String,
  awards: String,
  poster: String,
  ratings: [{ source: String, value: String }],
  metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: { type: String, unique: true },
  type: String,
  dvd: String,
  boxOffice: String,
  production: String,
  website: String,
});

module.exports = mongoose.model('Movie', movieSchema);
