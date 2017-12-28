import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from  './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {movies:[
        {title: 'Mean Girls', runtime: '150 minutes', year: 2005},
        {title: 'Hackers', runtime: '107 minutes', year: 1995},
  	    {title: 'The Grey', runtime: '112 minutes', year: 2000},
  	    {title: 'Sunshine', runtime: '92 minutes', year: 1984},
  	    {title: 'Ex Machina', runtime: '84 minutes', year: 2014},
	  ], watchedMoviesShown: 'neither'
	}
  }

  onSubmitClick(searchVal) {
  	var searchMovs = [];
  	for (var i = 0; i < this.state.movies.length; i++) {
  	  if (this.state.movies[i].title.toLowerCase().includes(searchVal)) {
  	  	searchMovs.push(this.state.movies[i]);
  	  }

  	if (searchMovs.length <= 0) {
  		this.setState({
  		  movies: [
	        {title: 'No movies found'},
		  ]
  		});
  	} else {
  	    this.setState({
  	      movies: searchMovs
  	    });
      }
    }
  }

  onAddClick(addVal) {
  	this.setState((prevState) => {
  		return {movies: prevState.movies.concat([{title: addVal}]), watchedMoviesShown: prevState.watchedMoviesShown}
  	});
  }

  onWatchedClick() {
    // display only those movies where button classname is equal to not watched
    // if this movie's isWatched is true, render
    // movielist component only displays movie depending on whether the user has watched or not
    this.setState((prevState) => {
    	return {movies: prevState.movies, watchedMoviesShown: 'yes'}
    })
  }

  onNotWatchedClick() {
    this.setState((prevState) => {
      return {movies: prevState.movies, watchedMoviesShown: 'no'}
    })	
  }

  render() {
    return (
      <div>
      	<AddMovie onAddClick = {this.onAddClick.bind(this)}/>
      	<Search onSubmitClick = {this.onSubmitClick.bind(this)}/>
      	<div className = 'toggleDiv'>
      	  <button className = 'toggle' onClick = {() => this.onWatchedClick()}> Watched </button>
      	  <button className = 'toggle' onClick = {() => this.onNotWatchedClick()}> To Watch </button> 
      	</div>

    	{this.state.movies.map(movie => <Movie movie = {movie} watchedMoviesShown = {this.state.watchedMoviesShown}/>)}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
