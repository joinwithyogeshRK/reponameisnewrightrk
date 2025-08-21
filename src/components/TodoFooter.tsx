import { useTodo } from '../context/TodoContext';
import { Button } from '@/components/ui/button';

const TodoFooter = () => {
  const { todos, filter, setFilter } = useTodo();
  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="todo-footer">
      <span>{activeCount} {activeCount === 1 ? 'item' : 'items'} left</span>
      <div className="todo-filters">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilter('all')}
          className={`todo-filter-button ${filter === 'all' ? 'todo-filter-active' : ''}`}
        >
          All
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilter('active')}
          className={`todo-filter-button ${filter === 'active' ? 'todo-filter-active' : ''}`}
        >
          Active
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilter('completed')}
          className={`todo-filter-button ${filter === 'completed' ? 'todo-filter-active' : ''}`}
        >
          Completed
        </Button>
      </div>
    </footer>
  );
};

export default TodoFooter;
