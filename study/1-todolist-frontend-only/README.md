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

## 1-2 simple frontend with emotion & frontend architecture

CSS in JS のライブラリを入れたり、少し構成を変えてみた。
振る舞いは `1-1` のものと変わらない

### emotion

CSS in JS ライブラリの一種
https://emotion.sh/docs/introduction
https://zenn.dev/irico/articles/d0b2d8160d8e63#emotion

#### 個人的によく使う理由

素の html の記述と css の記述に近い形でかける

### emotion 導入前にやったこと

- `yarn eject` して `create-react-app` から卒業
  - babel の設定を書き換える必要があった
    - 参考
      - https://qiita.com/282Haniwa/items/243f00c39ee7c992d7f7
      - https://codedaily.io/tutorials/Customize-Create-React-App-without-Ejecting
    - package.json の中の `babel` のところを書き換えた

### frontend architecture

#### container と component

- ロジック部分と view 部分を分離する
  - container にロジック部分をもたせるようにする
    - API による通信/データの取得
  - component に view 部分をもたせるようにする
    - props で渡された値をもとにただ表示するだけ
- component でロジックや state を持っていい場合
  - 見た目に関するデータ
    - モーダルの表示/非表示の切り替えフラグ
  - form の入力情報など
    - input の value など
  - ページを去っても揮発していい一時情報

#### Atomic Design

https://bradfrost.com/blog/post/atomic-web-design/

component の粒度に関するもの。  
再利用性や責任領域を分離するためにお約束的なもの。
一旦以下で組んでいる

- atoms

  - 複数のページで利用
  - 複雑ならロジックなどは持たない
  - container がつかない
  - molecules との明確な分け方がむずいので一旦 atoms によせる

- organisms

  - 特定のページでしか使わない
  - atoms を組み合わせて特定の操作や view が表示できる単位のもの
  - container がつくことがある(必ずしもつくわけではない)

詳細:  
https://qiita.com/takano-h/items/8731d8e7413d7b1f6d7b

## 1-3 frontend with useContext + useReducer

ここまでで単一なページでいろいろやることは把握したかもしれないが、単一ページだとしてもより大きなアプリケーションの場合や、そもそも別ページの state を共有したい場合はどうしよっか、というところがあるので、それを解決するための方法を書いていく。

※あえて redux については触れません。興味があったら勉強してみてください。

### useContext & useReducer

詳細: https://panda-program.com/posts/react-usecontext-usereducer

#### useContext

state のバケツリレーを簡素化してくれる  
https://ja.reactjs.org/docs/hooks-reference.html#usecontext
https://ja.reactjs.org/docs/context.html

## メモ

- `WebVitals`
  - https://qiita.com/ozaki25/items/6139cbc70cf988d1c870
