import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import "./style/todos.css";

function Todos(props) {
    const todoItems = props.todos.map(todo => (
        <TodoItem 
            key={ todo.id } 
            todo={ todo }
            delTodo={ props.delTodo }
            canMarkComplete={ props.canMarkComplete }
            markComplete={ props.canMarkComplete 
                ? props.markComplete
                : undefined } />
    ))

    return (
        <section className="container">
            { todoItems }
        </section>
    );
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    canMarkComplete: PropTypes.bool,
    markComplete: PropTypes.func,
    delTodo: PropTypes.func.isRequired
}

Todos.defaultProps = {
    canMarkComplete: true
}

export default Todos;