import Todos from '../todos/Todos';
import AddTodo from '../todos/AddTodo';
import "./styles/home.css";

function Home(props) {
    return (
        <main>
            <AddTodo addTodo={ props.addTodo }/>
            <Todos 
                todos={ props.todos }
                markComplete={ props.markComplete }
                delTodo={ props.deleteTodo } />
        </main>
        
    )
}

export default Home;