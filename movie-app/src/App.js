import React, { Component } from "react";
import MovieList from "./components/movieList";
import SearchBox from "./components/searchBox";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      favourites: [],
      searchValue: "",
      filterValue: ""
    };
  }

  // called once on mount
  componentDidMount() {
    this.fetchMovies();
  }

  // called on each state or props change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const url = `http://www.omdbapi.com?s=${this.state.searchValue}&apikey=bf3b1333`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) this.setState({ movies: data.Search });
      });
  };

  setSearchValue = (value) => {
    this.setState({ searchValue: value });
  };
  addFavouriteMovie = (movie) =>{
    const newFavList = [...this.state.favourites, movie]
    this.setState({favourites: newFavList})
  }

  render() {
    return (
      <div className="container">
        <h3>Movies App</h3>

        <div className="row">
          <SearchBox setSearchValue={this.setSearchValue} />
        </div>

        <div className="row">
          <MovieList movies={this.state.movies} 
          handleFavouritesClick={this.addFavouriteMovie}/>
        </div>
      </div>
    );
  }
}

export default App;
