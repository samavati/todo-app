import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from './../redux/actions';

class Todo extends React.Component {

    render() {
        const { date, checked, title } = this.props;
        return (
            <li className="list-group-item d-flex align-items-center">
                <span>{new Date(date).toLocaleDateString()}</span>
                <input
                    className="form-check-input mx-2"
                    type="checkbox"
                    checked={checked}
                    onChange={() => { this.props.toggleTodo(date) }} />
                <span className={(checked ? 'text-decoration-line-through' : '')}>{title}</span>
                {/* <button type="button" className="btn bg-transparent ms-auto">
                    <i className="far fa-edit"></i>
                </button> */}
            </li>
        );
    }
}

export default connect(null, { toggleTodo })(Todo);