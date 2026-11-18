import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введіть нове завдання..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default TodoForm;