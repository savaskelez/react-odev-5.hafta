import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Completed from './components/pages/Completed';

import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://5fa97367c9b4e90016e6a7ec.mockapi.io/api/todos')
      .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    axios.delete(`https://5fa97367c9b4e90016e6a7ec.mockapi.io/api/todos/${id}`)
      .then(res => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }));
  }

  addTodo = (title) => {
    axios.post(`https://5fa97367c9b4e90016e6a7ec.mockapi.io/api/todos`, {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }
  

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" render={ props => (
            <Home 
              todos={ this.state.todos } 
              markComplete={ this.markComplete }
              deleteTodo={ this.deleteTodo }
              addTodo={ this.addTodo } />
          )} />
          
          <Route path="/completed" render={ props => (
            <Completed
              todos={ this.state.todos }
              deleteTodo={ this.deleteTodo } />
          )} />
        </div>
      </Router>
    )
  }
}

export default App;
