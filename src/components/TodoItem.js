import React, { useState } from 'react';

function TodoItem({ todo, onEdit, onToggle, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(todo.title);

  const handleSave = () => {
    const trimmed = draftTitle.trim();
    if (trimmed) {
      onEdit(todo.id, trimmed);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setDraftTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            autoFocus
          />
          <button className="btn-save" onClick={handleSave}>Зберегти</button>
          <button className="btn-cancel" onClick={handleCancel}>Скасувати</button>
        </div>
      ) : (
        <div className="view-mode">
          <label className="todo-label">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span>{todo.title}</span>
          </label>
          <div className="actions">
            <button className="btn-edit" onClick={() => setIsEditing(true)}>
              Редагувати
            </button>
            <button className="btn-delete" onClick={() => onDelete(todo.id)}>
              Видалити
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoItem;