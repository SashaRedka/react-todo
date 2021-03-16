import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '.5rem',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
};

function ToDoItem ({ todo, index, onChange, deleteTodo }) {
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return(
        <li style={ styles.li }>
            <span className={classes.join(' ')}>
                <input
                    checked={todo.completed}
                    style={ styles.index }
                    type="checkbox"
                    onChange={() => onChange(todo.id)}
                />
                <strong>{ index + 1 }. </strong>
                &nbsp;
                { todo.title }
            </span>

            <button className="rm" onClick={() => deleteTodo(todo.id)}>&times;</button>
        </li>
    );
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default ToDoItem;