# Todolist Frontend only

ひとまずフロントエンド、とくに react × typescript をベースに、関連するライブラリ等も含めてある程度触れるようになるとよさそう

## 1-1 simple frontend

シンプルに react と typescript と css の知識があれば作れるようなものを作ってみた。

特にメインはここ  
https://github.com/maroon8021/web-app-study/blob/master/study/1-todolist-frontend-only/src/pages/Page1.tsx

### 仕様

- シンプルな todo list
- 入力部分
  - todo を入力できる input がある
  - 上記 input と連動した button を用意。その button をクリックすると、input に入力された文字が todo としてリストに表示される
  - button を押したあとには input に入力された文字は clear される
- リスト部分
  - 上記入力で追加された todo を表示していく
  - 「入力」で追加されたものはどんどん下に追加される
  - リストの左側に「☓」ボタンを用意し、それをクリックするとリストから消えるようにする

## メモ

- `WebVitals`
  - https://qiita.com/ozaki25/items/6139cbc70cf988d1c870
- emotion の設定
  - https://qiita.com/282Haniwa/items/243f00c39ee7c992d7f7
  - https://codedaily.io/tutorials/Customize-Create-React-App-without-Ejecting
