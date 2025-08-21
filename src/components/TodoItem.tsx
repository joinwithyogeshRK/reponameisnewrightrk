import { X } from 'lucide-react';
import { useTodo } from '../context/TodoContext';
import { Checkbox } from '@/components/ui/checkbox';

type TodoItemProps = {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <li className={`todo-item group ${todo.completed ? 'todo-item-completed' : ''}`}>
      <div className="flex items-center">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
          className="h-5 w-5"
        />
        <span className={`todo-item-text ${todo.completed ? 'todo-item-completed-text' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="todo-delete-button opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Delete task"
      >
        <X className="h-5 w-5" />
      </button>
    </li>
  );
};

export default TodoItem;
