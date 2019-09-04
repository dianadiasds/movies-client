import React, {Component} from 'react';
import {getMovies} from '../../actions/movielist';
import {connect} from 'react-redux';
import MovieList from './MovieList';

class MovieListContainer extends Component {

    render() {
        if (!this.props.movielist) return 'Loading...'

        return <div>
            <MovieList movielist={this.props.movielist}/>
        </div>
    }
    componentDidMount() {
        this.props.getMovies()
    }
}
const mapStateToProps = (state) => {
    return {
        movielist: state.movielist,
        jwt: state.jwt
    }
}
export default connect(mapStateToProps, {getMovies})(MovieListContainer)
