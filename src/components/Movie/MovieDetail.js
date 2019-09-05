import React from 'react';
import {Link} from "react-router-dom";

export default function MovieDetail(props) {
    const { comments, movie} = props;
    const items = comments
        .map(comment => {
            return <tr key={comment.id}>
                <td>
                    <p><strong>COMMENT:</strong></p>
                </td>
                <td>
                    <p>{comment.comment}</p>
                </td>
                <td>
                    <p><strong>AUTHOR:</strong></p>
                </td>
                <td>
                    <p>{comment['user.name']}</p>
                </td>
            </tr>

        });
    if ( movie ) {
       console.log(movie.title)
    }
    return <div>
        <h1>{movie.title}</h1>
        <p>{movie.director}</p>
        <p>{movie.yearOfRelease}</p>
        <p>{movie.synopsis}</p>
        <img src={movie.picture} alt={movie.title}/>
        <Link to={`/comment/${movie.id}`}>create comment</Link>
        {items}
    </div>
}
