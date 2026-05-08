# CLAUDE.md

このファイルは、リポジトリで作業する Claude Code (claude.ai/code) へのガイダンスを提供します。

## コマンド

```bash
npm run dev       # 開発サーバー起動 http://localhost:5173
npm run build     # 型チェック + プロダクションビルド
npm run lint      # ESLint
npm run preview   # プロダクションビルドのプレビュー
```

## アーキテクチャ

React 19 + TypeScript + Vite で構築したシングルページの TODO アプリ。データは `localStorage` のキー `"todos"` に永続化される。

**データフロー:**
- `src/types.ts` — `Todo` 型・`FilterType` ユニオン定義
- `src/hooks/useTodos.ts` — CRUD ロジックと `localStorage` への同期
- `src/App.tsx` — フィルター状態を管理し、算出した値とコールバックを子に渡す
- `src/components/` — `TodoInput`・`TodoItem`・`TodoFilter` の3つのコンポーネント

**インライン編集:** タスク名をダブルクリックで編集モードに入る。Enter で確定、Escape でキャンセル、空にすると削除。

## デプロイ

- **GitHub リポジトリ:** https://github.com/ktakatsuJP/todo
- **公開 URL:** https://ktakatsujp.github.io/todo/
- `main` ブランチへの push をトリガーに GitHub Actions (`.github/workflows/deploy.yml`) が自動デプロイ
- Vite の `base` を `/todo/` に設定（GitHub Pages のサブパスに合わせるため）
