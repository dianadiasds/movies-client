import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/login';

class LoginFormContainer extends React.Component {
    state = {
        name: '',
        password: ''
    };
    onSubmit = (event) => {
        event.preventDefault();
        this
            .props
            .login(this.state.name, this.state.password);
        this.setState({
            redirect: "redirect"
        });
    };
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    render() {
        return <LoginForm onSubmit={this.onSubmit} onChange={this.onChange}/>
    }
}
export default connect(null, {login})(LoginFormContainer)
