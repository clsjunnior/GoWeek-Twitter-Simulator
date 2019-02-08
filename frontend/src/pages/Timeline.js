import React, { Component } from 'react';
import logo from '../twitter.svg'
import './Timeline.css'

import api from '../services/api'

import socket from 'socket.io-client'

import Tweet from '../components/Tweet.js'

export default class Timeline extends Component {

    state = {
        tweets: [],
        newTweet: ''
    };

    // metodo utilizado para trazer informações assim que a pagina recarregar
    async componentDidMount(){
        const response = await api.get('tweets');
        // array de tweets
        this.setState({ tweets: response.data })
        this.subscribeToEvents();
    }

    // listen o socket.io
    subscribeToEvents = () =>{
        const io = socket('http://localhost:3000');

        io.on('tweet', data =>{
            //imutabilidade - nunca altera a variavel, cria uma nova com as infos
            // que precisam ser alteradas
            this.setState({
                // pega a variavel e seta a resposta primeiro no objeto //#endregion
                // e depois adiciona o restante existe com o "..."
                tweets: [data, ...this.state.tweets]
            })
        });

        io.on('like', data =>{
            this.setState({
                tweets: this.state.tweets.map(tweet => (
                    // se for igual ao tweet inserido ele preenche o numero
                    tweet._id === data._id ? data : tweet
                ))
            })
        });
    }

    handleInputChange = e => {
        this.setState({ newTweet: e.target.value })
    }

    handleNewTweet = async e => {
        if(e.keyCode !== 13) return;

        const content = this.state.newTweet;
        const author = localStorage.getItem("@GoTwitter:username");

        await api.post('tweets', {content, author});
        
        this.setState({ newTweet: ''})
    }

  render() {
    return (
        <div className="timeline-wrapper">
            <img height={24} src={logo} alt="logo" />

            <form>
                <textarea 
                value={this.state.newTweet} 
                onChange={this.handleInputChange} 
                onKeyDown={this.handleNewTweet} placeholder="O que está acontecendo?" />
            </form>
            <ul className="tweet-list">
                {this.state.tweets.map(tweet => (
                    <Tweet key={tweet._id} tweet={tweet} ></Tweet>   
                ))}
            </ul>
        </div>
    );
  }
}
