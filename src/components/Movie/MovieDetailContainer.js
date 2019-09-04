import React, {Component} from 'react';
import MovieDetail from './MovieDetail';
import {getMovieByID} from '../../actions/movie';
import {getComments} from '../../actions/comments';
import {connect} from 'react-redux';

class MovieDetailContainer extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        this.props.getMovieByID(movieId);
        this.props.getComments(movieId);
    }

    render() {
        if (!this.props.movie) return 'Loading';
        return <div>
            <MovieDetail
                movie={this.props.movie}
                comments={this.props.comments}
            />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie,
        comments: state.comments,
    }
};

export default connect(mapStateToProps, {getMovieByID, getComments})(MovieDetailContainer)
