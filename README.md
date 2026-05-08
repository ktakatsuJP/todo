# TODOアプリ

React + TypeScript + Vite で作成したシンプルな TODO アプリ。

**公開URL:** https://ktakatsujp.github.io/todo/

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | React 19 + TypeScript |
| ビルドツール | Vite 6 |
| データ永続化 | LocalStorage |
| デプロイ | GitHub Pages（GitHub Actions） |

---

## 機能

- タスクの追加・削除
- 完了 / 未完了の切り替え
- ダブルクリックでインライン編集（Enter で確定、Escape でキャンセル、空にすると削除）
- フィルター（すべて / 未完了 / 完了済み）
- 完了済みタスクの一括削除
- ページリロード後もデータを保持（LocalStorage）

---

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:5173 で起動
npm run build    # プロダクションビルド
npm run lint     # ESLint
```

---

## プロジェクト構成

```
src/
├── types.ts                  # Todo 型・FilterType 定義
├── hooks/
│   └── useTodos.ts           # CRUD ロジック・LocalStorage 同期
├── components/
│   ├── TodoInput.tsx         # タスク入力フォーム
│   ├── TodoItem.tsx          # タスク行（編集・削除・完了切替）
│   └── TodoFilter.tsx        # フッター（件数・フィルター・一括削除）
├── App.tsx                   # フィルター状態管理・ルートコンポーネント
├── index.css                 # グローバルスタイル
└── main.tsx                  # エントリーポイント
```

---

## デプロイ

`main` ブランチへの push をトリガーに GitHub Actions が自動でビルド・デプロイします。

```
.github/workflows/deploy.yml
  ↓ push to main
  build  : npm ci → npm run build → upload artifact
  deploy : actions/deploy-pages → GitHub Pages
```
