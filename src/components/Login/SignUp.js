import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { newLogin } from '../../actions/login'
import { Link } from 'react-router-dom'

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
            <div>
                <h3>New user</h3>
                <LoginForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}/>
                <hr/>
                <Link to='/'>Go back and Login!</Link>
            </div>
        )
    }
}

export default connect(null, {newLogin})(SignUpContainer)
