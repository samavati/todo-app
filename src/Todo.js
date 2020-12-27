import React from 'react';

class Todo extends React.Component {

    render() {
        return (
            <li className="list-group-item d-flex align-items-center">
                <span>{this.props.date}</span>
                <input className="form-check-input mx-2" type="checkbox" value="" aria-label="..." />
                {this.props.title}
                <button type="button" className="btn bg-transparent ms-auto">
                    <i className="far fa-edit"></i>
                </button>
            </li>
        );
    }
}

export default Todo;