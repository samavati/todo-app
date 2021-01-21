import React from 'react';
import { connect } from 'react-redux';
import { EMPTY_TODO } from '../redux/reducer';
import { selectTodo, addTodo, updateTodo } from './../redux/actions';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

const TodoItemInfo = (props) => {

    const { todo } = props;

    const onSubmit = (values) => {
        if (todo.id) {
            props.updateTodo(todo.id, values);
        } else {
            props.addTodo(values)
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
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        title: todo.content.title,
                        description: todo.content.description
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('Required'),
                        description: Yup.string().required('Required')
                    })}
                    onSubmit={(values) => {
                        onSubmit(values);
                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="title">Todo Title</label>
                                <Field
                                    name="title"
                                    type="text"
                                    className={
                                        'form-control ' +
                                        (errors.title && touched.title ? 'is-invalid ' : '') +
                                        (!errors.title && touched.title ? 'is-valid' : '')
                                    } />
                                <div className="invalid-feedback">
                                    <ErrorMessage name="title" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Todo Description</label>
                                <Field
                                    name="description"
                                    as="textarea"
                                    className={
                                        'form-control ' +
                                        (errors.description && touched.description ? 'is-invalid' : '') +
                                        (!errors.description && touched.description ? 'is-valid' : '')
                                    } />
                                <div className="invalid-feedback">
                                    <ErrorMessage name="description" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    );
}

const mapStateToProps = ({ selectedTodo }) => {
    return { todo: selectedTodo }
}

export default connect(mapStateToProps, { selectTodo, addTodo, updateTodo })(TodoItemInfo);