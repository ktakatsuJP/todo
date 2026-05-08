import type { FilterType } from '../types'

interface Props {
  filter: FilterType
  onChange: (f: FilterType) => void
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
}

const LABELS: Record<FilterType, string> = {
  all: 'すべて',
  active: '未完了',
  completed: '完了済み',
}

export function TodoFilter({ filter, onChange, activeCount, completedCount, onClearCompleted }: Props) {
  return (
    <div className="todo-footer">
      <span className="todo-count">{activeCount} 件残り</span>
      <div className="filter-buttons">
        {(Object.keys(LABELS) as FilterType[]).map(f => (
          <button
            key={f}
            className={`btn btn-filter ${filter === f ? 'active' : ''}`}
            onClick={() => onChange(f)}
          >
            {LABELS[f]}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button className="btn btn-clear" onClick={onClearCompleted}>
          完了を削除
        </button>
      )}
    </div>
  )
}
