import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends React.Component {

    render() {
        return (
            <ul className="list-group">
                {this.props.todoes.map(todo => <Todo date={todo.id} title={todo.content.title} checked={todo.completed} key={todo.id} />)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(TodoList);