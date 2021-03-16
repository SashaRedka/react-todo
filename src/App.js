import React from 'react';
import Storage from './utils/Storage'

import CreateItem from './ToDo/CreateItem';
import ToDoList from './ToDo/ToDoList';

function App() {
  const [todos, setTodos] = React.useState(Storage.get('todos') || [])

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    
    setTodos(updatedTodos);

    Storage.save('todos', updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);

    Storage.save('todos', updatedTodos);
  };

  const addNewTodo = (title) => {
    const updatedTodos = [...todos, { id: new Date().getTime(), completed: false, title }];
 
    setTodos(updatedTodos);

    Storage.save('todos', updatedTodos);
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
