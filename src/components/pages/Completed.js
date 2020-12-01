import Todos from '../todos/Todos';

function Completed(props) {
    let completedTodos = () => 
        props.todos.filter(todo => todo.completed === true);

    return (
        <main>
            <Todos
                todos={ completedTodos() }
                delTodo={ props.deleteTodo }
                canMarkComplete={ false }
            />
        </main>
    )
}

export default Completed;