import React, { Component } from "react";

class MovieList extends Component {
  render() {
    return (
      <>
        {this.props.movies.map((movie, index) => (
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
              <div className="card-bod">
                <p>{movie.Title} - {movie.Year}</p>
                <button className="btn btn-sm btn-success"
                onClick={()=> this.props.handleFavouritesClick(movie)}>

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
