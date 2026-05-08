import { useState, type FormEvent } from 'react'

interface Props {
  onAdd: (text: string) => void
}

export function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="新しいタスクを入力..."
        autoFocus
      />
      <button className="btn btn-primary" type="submit">追加</button>
    </form>
  )
}
