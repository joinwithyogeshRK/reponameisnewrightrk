import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

const TodoApp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-4">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
};

export default TodoApp;
