import { useState, useRef, useEffect, type KeyboardEvent } from 'react'
import type { Todo } from '../types'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editing) inputRef.current?.focus()
  }, [editing])

  function commitEdit() {
    onEdit(todo.id, draft)
    setEditing(false)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') commitEdit()
    if (e.key === 'Escape') {
      setDraft(todo.text)
      setEditing(false)
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {editing ? (
        <input
          ref={inputRef}
          className="todo-edit-input"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span
          className="todo-text"
          onDoubleClick={() => {
            setDraft(todo.text)
            setEditing(true)
          }}
        >
          {todo.text}
        </span>
      )}
      <button
        className="btn btn-delete"
        onClick={() => onDelete(todo.id)}
        aria-label="削除"
      >
        ✕
      </button>
    </li>
  )
}
