import React from 'react';
import {connect} from 'react-redux';
import {createComment} from '../../actions/comments';
import CreateComment from './CreateComment';

class CommentContainer extends React.Component {
    state = {
        comment: ''
    };
    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        this.setState({
            movieId: movieId
        });

    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.createComment(this.state);

        this.setState({
            comment: '',
        })
    };

    render() {
        return (<CreateComment
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        jwt: state.jwt,
    }
}
export default connect(mapStateToProps, {createComment})(CommentContainer)
