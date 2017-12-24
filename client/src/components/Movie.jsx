import React from 'react';
import MovieDetails from './MovieDetails.jsx';

const Movie = (props) => {
	return (
		<div>
			<div>
				<div>
					{props.movies.map((movie, index) => <MovieDetails movie={movie} key={index} toggleWatched={props.toggleWatched}/>)}
				</div>
			</div>
		</div>
	);
};

export default Movie;