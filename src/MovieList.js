import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

function MovieList() {
    const [movies] = useContext(MovieContext)

    return (
        <div>
            {movies.map((movie, key) => (
                <Movie name={movie.name} price={movie.price} key={key} />
            ))}
        </div>
    );
}
export default MovieList;