import React from 'react';
import './style/add-todo.css';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    updateTitle = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <section className="add-todo container">
                <form onSubmit={ this.onSubmit } className="form-add-todo">
                    <input
                        type="text"
                        name="title"
                        placeholder="Add todo..."
                        className="form-add-todo__input"
                        value={ this.state.title }
                        onChange={ this.updateTitle } />
                    <button className="btn btn--ok form-add-todo__btn">EKLE</button>
                </form>
            </section>
        )
    }
}

export default AddTodo;