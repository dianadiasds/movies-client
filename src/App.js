import React from 'react';
import {Link, Route} from 'react-router-dom';
import { connect } from "react-redux";
import LoginContainer from './components/Login/LoginFormContainer';
import SignUpContainer from "./components/Login/SignUp";
import MovieListContainer from "./components/Movie/MovieListContainer";
import MovieDetailContainer from "./components/Movie/MovieDetailContainer";
import CommentContainer from "./components/Comments/CommentContainer";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


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
                    <Link to={`/login`} className='linkAccount'><AccountCircleIcon /></Link>
                    <Link to={`/`}>Brazilian Films App</Link>
                </Typography>
            </Toolbar>
        </AppBar>
        <Container fixed>
          <Route exact path="/" component={MovieListContainer}/>
          <Route exact path="/movies/:movieId" component={MovieDetailContainer}/>
          <Route path='/login' component={LoginContainer}/>
          <Route path='/signup' component={SignUpContainer}/>
          <Route path='/comment/:movieId' component={CommentContainer}/>

        </Container>

        </div>
    );
  }
}

const mapDispatchToProps = {
  loginUser
};
export default connect(null, mapDispatchToProps)(App)

