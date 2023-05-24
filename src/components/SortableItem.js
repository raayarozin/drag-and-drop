import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Button from './Button';
const SortableItem = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const toggleEditInput = (e, value) => {
    e.preventDefault();
    const currentTodo = document.getElementById(`current-todo-input-${value}`);
    const editInput = document.getElementById(
      `edit-todo-input-container-${value}`
    );
    currentTodo.style.display !== 'none'
      ? (currentTodo.style.display = 'none')
      : (currentTodo.style.display = 'flex');

    editInput.style.display !== 'flex'
      ? (editInput.style.display = 'flex')
      : (editInput.style.display = 'none');
  };

  const markAsDone = (e, value) => {
    e.preventDefault();
    const doneTodo = document.getElementById(`todo-item-container-${value}`);
    doneTodo.style.background = 'rgb(215, 249, 222)';
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        className='todo-item-container'
        id={`todo-item-container-${props.id}`}
        key={props.id}
      >
        <div
          id={`current-todo-input-${props.id}`}
          className='todo-item visible'
        >
          {props.id}
        </div>
        <div
          id={`edit-todo-input-container-${props.id}`}
          className='edit-todo-input-container invisible'
        >
          <input
            type='text'
            className='edit-input'
            defaultValue={props.id}
            id={`edit-todo-input-${props.id}`}
          />
          <Button
            type='submit'
            className='save-btn'
            btnValue='Save'
            onClick={(e) => {
              props.editExistingTodo(
                e,
                props.id,
                document.getElementById(`edit-todo-input-${props.id}`).value
              );
            }}
          />
        </div>
        <div className='todo-item-edit-delete-btns-container'>
          <Button
            className='edit-btn'
            btnValue='🖌'
            onClick={(e) => {
              toggleEditInput(e, props.id);
            }}
          />
          <Button
            className='delete-btn'
            btnValue='x'
            onClick={(e) => {
              props.deleteTodo(e, props.id);
            }}
          />
          <Button
            className='mark-as-done-btn'
            btnValue='✔'
            onClick={(e) => {
              markAsDone(e, props.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default SortableItem;
