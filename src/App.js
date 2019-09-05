import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import LoginContainer from './components/Login/LoginFormContainer';
import SignUpContainer from "./components/Login/SignUp";
import MovieListContainer from "./components/Movie/MovieListContainer";
import MovieDetailContainer from "./components/Movie/MovieDetailContainer";
import CommentContainer from "./components/Comments/CommentContainer";
import { AUTH_TOKEN_KEY, loginUser } from "./actions/login";
class App extends React.Component {

  componentDidMount() {
    this.getAuthToken();
  }
  getAuthToken() {
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
    console.log('App token', token);
    if (token) {
      this.props.loginUser(token);
    }
  }
  render() {
    return (
        <div className="App">
          <Route exact path="/" component={MovieListContainer}/>
          <Route exact path="/movies/:movieId" component={MovieDetailContainer}/>
          <Route path='/login' component={LoginContainer}/>
          <Route path='/signup' component={SignUpContainer}/>
          <Route path='/comment' component={CommentContainer}/>
        </div>
    );
  }
}

const mapDispatchToProps = {
  loginUser
};
export default connect(null, mapDispatchToProps)(App)

