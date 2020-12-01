import React from 'react';
import PropTypes from 'prop-types';

import "./style/todo-item.css";
import trashIcon from '../../img/trash-icon.svg';

class TodoItem extends React.Component {
    completedStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div className="item">
                <div className="item__content">
                    { this.props.canMarkComplete && 
                        <input 
                            type="checkbox"
                            defaultChecked={ completed }
                            onChange={ this.props.markComplete.bind(this, id) } />
                    }
                    
                    <p style={ this.completedStyle() }>{ title }</p>
                </div>
                <div>
            
                    <button className="btn btn--icon btn--red">
                        <img src={ trashIcon } alt="del-icon" onClick={ this.props.delTodo.bind(this, id) }/>
                    </button>
                </div>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func,
    delTodo: PropTypes.func.isRequired,
    canMarkComplete: PropTypes.bool,
}

TodoItem.defaultProps = {
    canMarkComplete: true
}

export default TodoItem;