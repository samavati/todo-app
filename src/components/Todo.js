import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, selectTodo } from './../redux/actions';

class Todo extends React.Component {

    render() {
        const { todo } = this.props;
        return (
            <li className="list-group-item d-flex align-items-center">
                <span>{new Date(todo.id).toLocaleDateString()}</span>
                <input
                    className="form-check-input mx-2"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => { this.props.toggleTodo(todo.id) }} />
                <span className={(todo.completed ? 'text-decoration-line-through' : '')}>{todo.content.title}</span>
                <button type="button" className="btn bg-transparent ms-auto" onClick={() => { this.props.selectTodo(todo) }}>
                    <i className="far fa-edit"></i>
                </button>
            </li>
        );
    }
}

export default connect(null, { toggleTodo, selectTodo })(Todo);