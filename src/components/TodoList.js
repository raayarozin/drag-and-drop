import Button from './Button';
import './TodoList.css';

const TodoList = (props) => {
  const toggleEditInput = (value) => {
    const currentTodo = document.getElementById(`current-todo-input-${value}`);
    const editInput = document.getElementById(
      `edit-todo-input-container-${value}`
    );
    currentTodo.style.display !== 'none'
      ? (currentTodo.style.display = 'none')
      : (currentTodo.style.display = 'block');

    editInput.style.display !== 'block'
      ? (editInput.style.display = 'block')
      : (editInput.style.display = 'none');
  };

  const markAsDone = (value) => {
    const doneTodo = document.getElementById(`todo-item-container-${value}`);
    doneTodo.style.background = 'rgb(215, 249, 222)';
  };
  return (
    <div>
      <div className='todo-list'>
        {props.todos.map((todo) => {
          return (
            <div
              className='todo-item-container'
              id={`todo-item-container-${todo}`}
              key={todo}
            >
              <div
                id={`current-todo-input-${todo}`}
                className='todo-item visible'
              >
                {todo}
              </div>
              <div
                id={`edit-todo-input-container-${todo}`}
                className='edit-todo-input-container invisible'
              >
                <input
                  type='text'
                  className='input'
                  defaultValue={todo}
                  id={`edit-todo-input-${todo}`}
                />
                <Button
                  className='save-btn'
                  btnValue='Save'
                  onClick={() => {
                    props.updateTodos(
                      todo,
                      document.getElementById(`edit-todo-input-${todo}`).value
                    );
                  }}
                />
              </div>
              <div className='todo-item-edit-delete-btns-container'>
                <Button
                  className='edit-btn'
                  btnValue='🖌'
                  onClick={() => {
                    toggleEditInput(todo);
                  }}
                />
                <Button
                  className='delete-btn'
                  btnValue='x'
                  onClick={() => {
                    props.deleteTodo(todo);
                  }}
                />
                <Button
                  className='mark-as-done-btn'
                  btnValue='✔'
                  onClick={() => {
                    console.log('done');
                    markAsDone(todo);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
