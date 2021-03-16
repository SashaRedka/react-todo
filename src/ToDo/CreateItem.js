import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    form: {
        display: 'block'
    },
    label: {
        display: 'block'
    },
    input: {
        width: '100%',
        height: '30px',
        borderRadius: '2px',
        border: '1px solid #ccc',
        boxSizing: 'border-box'
    },
    button: {
        padding: '0.5rem 1rem',
        border: '1px solid rgb(204, 204, 204)',
        borderRadius: '5px',
        marginTop: '0.5rem',
        cursor: 'pointer'
    },
    error: {
        color: 'red'
    }
};

const CreateItem = ({ addNewItem }) => {
    const [todoTitle, setTitle] = React.useState('');
    const [todoTitleError, setError] = React.useState('');

    const validation = (e) => {
        e.preventDefault();

        if (todoTitle) {
            setTitle('');
            setError('');

            addNewItem(todoTitle);
        } else {
            setError('This field is required');
        }
    };

    const changeInputHandler = (e) => {
        setTitle(e.target.value);
    };

    return (
        <form style={ styles.form } onSubmit={validation}>
            <label style={ styles.label }>
                <input
                    style={ styles.input }
                    type="text"
                    placeholder="Task title"
                    value={todoTitle}
                    onChange={changeInputHandler}
                />
                <span style={styles.error}>{ todoTitleError }</span>
            </label>
            <button type="submit" style={ styles.button }>Add</button>
        </form>
    );
}

CreateItem.propTypes = {
    addNewItem: PropTypes.func.isRequired
}

export default CreateItem;

