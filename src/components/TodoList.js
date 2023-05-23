import Button from './Button';
import './TodoList.css';
import { DndContext, closestCenter } from '@dnd-kit/core';
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

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className='todo-list'>
        <SortableContext
          items={props.todos}
          strategy={verticalListSortingStrategy}
        >
          {props.todos.map((todo) => {
            return <SortableItem key={todo} id={todo} />;
          })}
        </SortableContext>
      </div>
    </DndContext>
  );
};
export default TodoList;
