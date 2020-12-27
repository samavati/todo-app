import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    render() {
        return (
            <ul className="list-group">
                <Todo date="2020/12/31" title="ye chizi" />
                <Todo date="2020/12/31" title="ye chizi" />
                <Todo date="2020/12/31" title="ye chizi" />
                <Todo date="2020/12/31" title="ye chizi" />
                <Todo date="2020/12/31" title="ye chizi" />
                <Todo date="2020/12/31" title="ye chizi" />
            </ul>
        );
    }
}

export default TodoList;