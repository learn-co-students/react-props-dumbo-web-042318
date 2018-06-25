import React from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt="Mad Max: Fury Road" />
        <h2>Mad Max: Fury Road</h2>
        <small>Genres: Action, Adventure, Science Fiction, Thriller</small>
      </div>
    );
  }
}
const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
const title = "Mad Max: Fury Road"
const poster = "http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"

ReactDOM.render(
  <MovieCard
    title={title}
    poster={poster}
    genres={madMaxGenres}
  />,
  document.getElementById('root')
);
