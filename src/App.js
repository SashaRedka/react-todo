import React from 'react';
import CreateItem from './ToDo/CreateItem';
import ToDoList from './ToDo/ToDoList';

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1, completed: false, title: 'Test task'
    },
    {
      id: 2, completed: false, title: 'Test task 2'
    },
    {
      id: 3, completed: false, title: 'Test task 3'
    }
  ])

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }))
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const addNewTodo = (title) => {
    setTodos([...todos, { id: new Date().getTime(), completed: false, title }])
  };

  return (
    <div className="wrapper">
      <h1>React</h1>
      <ToDoList todos={todos} onToggle={toggleTodo} deleteTodo={deleteTodo} />
      <CreateItem addNewItem={addNewTodo} />
    </div>
  );
}

export default App;
