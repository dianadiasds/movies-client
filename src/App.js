import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import LoginContainer from './components/Login/LoginFormContainer';
import SignUpContainer from "./components/Login/SignUp";
import MovieListContainer from "./components/Movie/MovieListContainer";
import MovieDetailContainer from "./components/Movie/MovieDetailContainer";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import { Container } from '@material-ui/core';
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

    return (<div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" >
                    Brazilian Films App
                </Typography>
            </Toolbar>
        </AppBar>
        <Container fixed>
          <Route exact path="/" component={MovieListContainer}/>
          <Route exact path="/movies/:movieId" component={MovieDetailContainer}/>
          <Route path='/login' component={LoginContainer}/>
          <Route path='/signup' component={SignUpContainer}/>
        </Container>
        </div>
    );
  }
}

const mapDispatchToProps = {
  loginUser
};
export default connect(null, mapDispatchToProps)(App)

