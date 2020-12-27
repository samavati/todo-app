import React from 'react';

class TodoItemInfo extends React.Component {
    render() {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="todoTitle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDescription" className="form-label">Todo Description</label>
                    <textarea className="form-control" id="todoDescription" rows="3"></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="done" />
                    <label className="form-check-label" htmlFor="done">done</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default TodoItemInfo;