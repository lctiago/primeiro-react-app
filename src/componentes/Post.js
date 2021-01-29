import React from 'react';
import Comentario from './Comentario';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comentarios: [],
            novoComentario: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            comentarios: [
                ...this.state.comentarios,
                { texto: this.state.novoComentario }
            ],
            novoComentario: ''
        });
        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState({ novoComentario: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>{this.props.titulo}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleTextChange} value={this.state.novoComentario}></input>
                    <button type="submit">Comentar</button>
                </form>
                { this.state.comentarios.map((comentario, index) => {
                    return <Comentario key={index} texto={comentario.texto}></Comentario>
                })}
            </div>
        );
    }
}