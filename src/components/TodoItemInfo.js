import React from 'react';
import { connect } from 'react-redux';
import { EMPTY_TODO } from '../redux/reducer';
import { selectTodo, addTodo, updateTodo } from './../redux/actions';

class TodoItemInfo extends React.Component {

    onSubmit = (e) => {
        const { todo } = this.props;
        e.preventDefault();
        if (!todo.content.title) {
            return;
        }
        if (todo.id) {
            this.props.updateTodo(todo.id, todo.content);
        } else {
            this.props.addTodo(todo.content)
        }
    }

    render() {
        const { todo } = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    <button type="button" class="btn btn-primary" onClick={() => { this.props.selectTodo(EMPTY_TODO) }}>
                        <i class="fas fa-plus"></i> Add Todo
                    </button>
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => { this.onSubmit(e) }}>
                        <div className="mb-3">
                            <label htmlFor="todoTitle" className="form-label">Todo Title</label>
                            <input type="text"
                                className="form-control"
                                id="todoTitle"
                                value={todo.content.title}
                                onChange={(e) => { this.props.selectTodo({ ...todo, content: { ...todo.content, title: e.target.value } }) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="todoDescription" className="form-label">Todo Description</label>
                            <textarea
                                className="form-control"
                                id="todoDescription"
                                rows="3"
                                value={todo.content.description}
                                onChange={(e) => { this.props.selectTodo({ ...todo, content: { ...todo.content, description: e.target.value } }) }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ selectedTodo }) => {
    return { todo: selectedTodo }
}

export default connect(mapStateToProps, { selectTodo, addTodo, updateTodo })(TodoItemInfo);