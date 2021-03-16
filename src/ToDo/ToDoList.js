import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from './ToDoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    span: {
        display: 'inline-block',
        marginBottom: '.5rem'
    }
};

function ToDoList (props) {
    return (
        <div>
            {
                props.todos.length
                ? <ul style={styles.ul}>
                    { props.todos.map((todo, i) => {
                        return <ToDoItem 
                                    todo={todo}
                                    key={todo.id}
                                    index={i}
                                    onChange={props.onToggle}
                                    deleteTodo={props.deleteTodo}
                                />
                    }) }
                </ul>
                : <span style={styles.span}>You doesn't have todo yet.</span>
            }
        </div>
    );
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default ToDoList;