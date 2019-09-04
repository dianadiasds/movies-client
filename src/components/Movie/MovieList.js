import * as React from 'react';
import {Link} from 'react-router-dom';

export default function MovieList(props) {
    const {movie} = props;

    if (movie) {
        const items = movie
            .map(movie => {
                return <div key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <h1>{movie.title}</h1>
                        <img src={movie.picture} alt={movie.title}/>
                    </Link>
                </div>
            });
        return <div>
            <h1>Movies</h1>
            <div className="eventList">
                {items}
            </div>
        </div>
    }
    return <div>
        <h1>Events</h1>
    </div>
}
