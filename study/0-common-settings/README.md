# 0. Common Settings

開発してく上でベースになる設定や用意しておいたほうがよさそうなものを以下に記載します。

## 原則として

各種 npm パッケージ等はあまり global にインストールせず、各パッケージにインストールしたほうがよいと思ってる。(個人の意見です)  
例:

```
$ npm install -g hoge // <- -g をしない
```

## linter & formatter

実装していくにあたって、コードのフォーマットが揃ってなかったりすると読みにくかったり、フォーマット揃えるだけで git 上 diff として扱われてしまってめんどうなので、大多数のプロジェクトでリンター、フォーマッターが設定されています。

### 必要なもの

#### eslint

https://eslint.org/

JS の linter。深いところは ↓ を参照  
https://qiita.com/mysticatea/items/f523dab04a25f617c87d

#### prettier

https://prettier.io/

コードを整形してくれるやつ。  
https://qiita.com/soarflat/items/06377f3b96964964a65d

### どうやって使うのか

最終的には VSCode でファイルの save をしたときにフォーマッター走るのが開発体験よくておすすめ。そこを目指すとよい。  
https://zenn.dev/ryusou/articles/nodejs-prettier-eslint2021

↑ とは少し違うかもしれないが、このプロジェクトでも eslint/prettier/VSCode の設定をしている。  
詳細はこのパッケージの root にある各種設定を参照

```
.
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .node-version
├── .prettierignore
├── .prettierrc
├── .vscode
│   └── settings.json
└── package.json
```

## nodejs

直接入れてもいいけど、違うバージョン使いたいとかなるとめんどうなので、最初からバージョン管理できるやつで入れることをおすすめする。

### よさそうなやつ？

- nodenv(ただ windows で使えるかはわかってない)
- volta
- asdf(node 単体のバージョン管理ではないけど)

https://qiita.com/1000ch/items/41ea7caffe8c42c5211c  
https://dev.classmethod.jp/articles/node-version-volta/  
https://typememo.jp/tech/asdf-nodejs/
