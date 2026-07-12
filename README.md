# Aqua Tuning UI Showcase

Aqua Tuningコミュニティポータルの比較用UIです。

- `/guild/` — Soft Guild：薄いブルーを基調にしたDiscord型の左ナビゲーション
- `/ripple/` — Ripple Studio：水面の流れを使ったオーガニックな左ナビゲーション
- `/` — 2案の比較ページ

両案とも、トーク、スレッド選択、検索、投稿、リアクション、コンテンツ一覧、講座・理念紹介を操作できます。

## Deploy

```sh
wrangler pages deploy . --project-name aquatuning-ui-showcase --branch main
```
