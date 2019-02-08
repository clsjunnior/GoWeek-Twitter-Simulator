import React, { Component } from 'react';
import './Login.css'
import logo from '../twitter.svg'

export default class Login extends Component {
    // pode salvar dados no cache
    state = {
        username: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username } = this.state;
        if (!username.length) return;

        localStorage.setItem("@GoTwitter:username", username);

        this.props.history.push('./timeline');
    };

    handleInputChange = (e) => {
        // passando o objeto q vem do input
        this.setState({
            // utilizando eventos
            username: e.target.value
        })
    }

    render() {
        return (
            <div className="login-wrapper">
                <img src={logo} alt="logo" />
                <form onSubmit={this.handleSubmit}> 
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Nome de Usuário" />
                    <button type="submit">Entrar</button>
                </form>
            </div>        
        );
    }
}
