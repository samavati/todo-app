import React from 'react';
import { connect } from 'react-redux';
import { EMPTY_TODO } from '../redux/reducer';
import { selectTodo, addTodo, updateTodo } from './../redux/actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoItemInfo = (props) => {

    const { todo } = props;

    const todoForm = useFormik({
        enableReinitialize:true,
        initialValues: {
            title: todo.content.title,
            description: todo.content.description
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            description: Yup.string().required('Required')
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            onSubmit();
        }
    });

    const onSubmit = () => {
        if (todo.id) {
            props.updateTodo(todo.id, todo.content);
        } else {
            props.addTodo(todo.content)
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <button type="button" className="btn btn-primary" onClick={() => { props.selectTodo(EMPTY_TODO) }}>
                    <i className="fas fa-plus"></i> Add Todo
                </button>
            </div>
            <div className="card-body">
                <form onSubmit={todoForm.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text"
                            className={'form-control ' + (todoForm.errors.title && todoForm.touched.title ? 'is-invalid' : '')}
                            id="title"
                            name="title"
                            onChange={todoForm.handleChange}
                            onBlur={todoForm.handleBlur}
                            value={todoForm.values.title}
                        />
                        {todoForm.errors.title && todoForm.touched.title ? <div>{todoForm.errors.title}</div> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Todo Description</label>
                        <textarea
                            className={'form-control ' + (todoForm.errors.description && todoForm.touched.description ? 'is-invalid' : '')}
                            id="description"
                            name="description"
                            rows="3"
                            onChange={todoForm.handleChange}
                            onBlur={todoForm.handleBlur}
                            value={todoForm.values.description}
                        ></textarea>
                        {todoForm.errors.description && todoForm.touched.description ? <div>{todoForm.errors.description}</div> : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = ({ selectedTodo }) => {
    return { todo: selectedTodo }
}

export default connect(mapStateToProps, { selectTodo, addTodo, updateTodo })(TodoItemInfo);