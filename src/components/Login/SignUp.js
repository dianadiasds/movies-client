import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { newLogin } from '../../actions/login'
import { Link } from 'react-router-dom'
import Container from "@material-ui/core/Container";

class SignUpContainer extends React.Component {
    state = {
        name: '',
        password: ''
    };

    onSubmit = (event) => {
        event.preventDefault();
        this
            .props
            .newLogin(this.state.name, this.state.password)
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <Container maxWidth="sm">

                <LoginForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}/>

                <Link to='/login'>Go back and Login!</Link>
            </Container>
        )
    }
}

export default connect(null, {newLogin})(SignUpContainer)
