import { useState } from 'react'
import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoItem } from './components/TodoItem'
import { TodoFilter } from './components/TodoFilter'
import type { FilterType } from './types'

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted, editTodo } = useTodos()
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const activeCount = todos.filter(t => !t.completed).length
  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className="app">
      <h1 className="app-title">TODO</h1>
      <div className="todo-card">
        <TodoInput onAdd={addTodo} />
        {todos.length > 0 ? (
          <>
            <ul className="todo-list">
              {filtered.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              ))}
            </ul>
            {filtered.length === 0 && (
              <p className="empty-message">該当するタスクがありません</p>
            )}
            <TodoFilter
              filter={filter}
              onChange={setFilter}
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          </>
        ) : (
          <p className="empty-message">タスクを追加してください</p>
        )}
      </div>
    </div>
  )
}
