import './App.css';
import TodoList from './components/TodoList';
import Button from './components/Button';

import { useState } from 'react';

const App = () => {
  const initialTodos = ['Make Breakfast', 'Hire Raaya'];
  const [todos, setTodos] = useState(initialTodos);

  const handleTodo = (value) => {
    return value.trim() !== '' && !todos.includes(value);
  };

  const addTodo = () => {
    const newTodo = document.getElementById('to-do-add-input').value;
    if (handleTodo(newTodo)) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  const deleteTodo = (value) => {
    const item = todos.indexOf(value);
    todos.splice(item, 1);
    setTodos([...todos]);
  };

  const updateTodos = (oldValue, newValue) => {
    const newTodoIndex = todos.indexOf(oldValue);
    const updatedTodos = [...todos];
    updatedTodos[newTodoIndex] = newValue;
    if (handleTodo(newValue)) {
      setTodos(updatedTodos);
    }
  };

  return (
    <div className='App'>
      <div className='form-wrapper'>
        <div className='form-container'>
          <div className='input-wrapper'>
            <input className='input' type='text' id='to-do-add-input'></input>
            <Button
              className='add-btn'
              btnValue='Add'
              onClick={() => {
                addTodo();
              }}
            />
          </div>

          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodos={updateTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
