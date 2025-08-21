import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
      />
      <Button 
        type="submit" 
        className="todo-add-button bg-primary hover:bg-primary-600 text-primary-foreground"
      >
        <Plus className="h-4 w-4 mr-1" /> Add
      </Button>
    </form>
  );
};

export default TodoInput;
