import React, {Component} from 'react';
import {getMovies} from '../../actions/movie';
import {connect} from 'react-redux';
import MovieList from './MovieList';

class MovieListContainer extends Component {

    render() {
        if (!this.props.movie) return 'Loading...'

        return <div>
            <MovieList movie={this.props.movie}/>
        </div>
    }
    componentDidMount() {
        this.props.getMovies()
    }
}
const mapStateToProps = (state) => {
    return {
        movie: state.movie,
        jwt: state.jwt
    }
}
export default connect(mapStateToProps, {getMovies})(MovieListContainer)
