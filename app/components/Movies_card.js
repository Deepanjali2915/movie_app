"use client"
import Link from 'next/link';
import AverageRating from './Average';

function Movies_card({ movies }) {

	return (
		<div className='container'>
			<div className='row'>
				<h1 className="detailsText-h1"> Movies </h1>

				{movies.map(function (movie) {
					return (
						<div className="box col-sm-4" key={movie.imdbID}>
							<div className="movie-image">
								<img className="card-image" src={movie.Poster} alt={movie.Title} />
							</div>
							<div className="movie-text">Movie name: {movie.Title}</div>
							<div className="movie-text">Year: {movie.Year}</div>
							<div className="movie-text">
								<AverageRating productId={movie.imdbID} />
							</div>
							<Link href={`/details/${movie.imdbID}`}>
								<button className="movie-button">Full details</button>
							</Link>
						</div>
					);
				})}
				
			</div>
			{movies.length === 0 && <h2 className="detailsText-h1"> Data not found</h2>}

		</div>
	);
}
export default Movies_card;
