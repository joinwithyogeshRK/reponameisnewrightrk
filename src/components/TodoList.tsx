import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { filteredTodos } = useTodo();

  if (filteredTodos.length === 0) {
    return (
      <div className="todo-list py-8 text-center text-muted">
        <p>No tasks found</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
