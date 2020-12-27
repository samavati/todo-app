import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends React.Component {

    render() {
        return (
            <ul className="list-group">
                {this.props.todoes.map(todo => <Todo todo={todo} key={todo.id} />)}
            </ul>
        );
    }
}

const mapStateToProps = ({ todoes }) => {
    return { todoes }
}

export default connect(mapStateToProps)(TodoList);