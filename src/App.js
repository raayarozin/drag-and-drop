import './App.css';
import TodoList from './components/TodoList';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {
  const initialTodos = ['Make Breakfast', 'Hire Raaya'];
  const [todos, setTodos] = useState(initialTodos);

  const validateNewTodo = (value) => {
    return value.trim() !== '' && !todos.includes(value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = document.getElementById('to-do-add-input');
    if (validateNewTodo(newTodo.value)) {
      setTodos((prevTodos) => [...prevTodos, newTodo.value]);
      newTodo.value = '';
    }
  };

  const editExistingTodo = (e, oldValue, newValue) => {
    e.preventDefault();
    const newTodoIndex = todos.indexOf(oldValue);
    const updatedTodos = [...todos];
    updatedTodos[newTodoIndex] = newValue;
    if (validateNewTodo(newValue)) {
      setTodos(updatedTodos);
    }
  };

  const deleteTodo = (e, value) => {
    e.preventDefault();
    const item = todos.indexOf(value);
    todos.splice(item, 1);
    setTodos([...todos]);
  };

  return (
    <div className='App'>
      <div className='form-wrapper'>
        <form className='form-container'>
          <div className='input-wrapper'>
            <input className='add-input' type='text' id='to-do-add-input' />
            <Button
              className='add-btn'
              btnValue='Add'
              type='submit'
              onClick={(e) => {
                addTodo(e);
              }}
            />
          </div>

          <TodoList
            todos={todos}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
            editExistingTodo={editExistingTodo}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
