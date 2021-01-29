import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1> Olá, mundo</h1>
                <Post titulo="Post sobre o assunto X"></Post>
                <Post titulo="Post sobre o assunto Y"></Post>
                <Post titulo="Post sobre o assunto Z"></Post>
            </div>
        );
    }
}