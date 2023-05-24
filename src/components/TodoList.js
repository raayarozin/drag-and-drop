import './TodoList.css';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem';

const TodoList = (props) => {
  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      props.setTodos((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className='todo-list'>
        <SortableContext
          items={props.todos}
          strategy={verticalListSortingStrategy}
        >
          {props.todos.map((todo) => {
            return (
              <SortableItem
                key={todo}
                id={todo}
                deleteTodo={props.deleteTodo}
                editExistingTodo={props.editExistingTodo}
              />
            );
          })}
        </SortableContext>
      </div>
    </DndContext>
  );
};
export default TodoList;
