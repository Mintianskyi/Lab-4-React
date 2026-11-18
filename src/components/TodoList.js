import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onEdit, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="status-msg">Список завдань порожній.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;