import React, { Component } from "react";

class MovieList extends Component {
  render() {
    const { movies, btnClass, btnText, handleFavouritesClick } = this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img
                src={
                  movie.Poster === "N/A"
                    ? "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
                    : movie.Poster
                }
                className="card-img-top"
              />

              <div className="card-body">
                <p>
                  {movie.Title} - {movie.Year}
                </p>

                <button
                  className={`btn btn-sm ${btnClass}`}
                  onClick={() => handleFavouritesClick(movie)}
                >
                  {btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default MovieList;

