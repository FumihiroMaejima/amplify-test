# amplify-test

my amplify test.

---

# 構成

| 名前 | バージョン |
| :--- | :---: |
| npm | 6.14.8 |
| node | 12.20.0 |
| react | 17.0.0 |
| TypeScript | 4.1.3 |

---

## Update Yarn

```Shell-session
$ yarn -v
1.22.4

$ npm uninstall yarn -g
$ npm install yarn -g

$ yarn --version
1.22.10
```

## TypeScriptのインストール

### グローバルにインストールする

```Shell-session
$ npm install -g typescript
$ tsc -v
Version 4.1.3
```

### プロジェクトにインストールする

＊Vue-cliのプロジェクト作成時にもインストール出来る。

```Shell-session
$ yarn add typescript
```

---


## Make Projet

### gitリポジトリそのものをフロントエンドのリポジトリにしたい場合
一度rootに新規プロジェクトディレクトリを作成し、
node_modules以外をrootディレクトリに移すことでプロジェクトを作ることが出来る。

```Shell-session
$ yarn create vite
$ mv sample/* ./ // エディターを使ってコピペして来た方が良い
$ rm -rf sample
$ yarn install
```


## プロジェクト作成時のコンソール内容

`React`+`TypeScript`の構成が前提

```Shell-session
$ yarn create vite
yarn create v1.22.10

success Installed "create-vite@2.6.6" with binaries:
      - create-vite
      - cva
✔ Project name: … vite-test
✔ Select a framework: › react
✔ Select a variant: › react-ts

Scaffolding project in /Users/userName/path/vite-test...

Done. Now run:

  cd vite-test
  yarn
  yarn dev

✨  Done in 22.98s.

```

## Project setup
```Shell-session
yarn install
```

### Compiles and hot-reloads for development(default port is 3000)
```Shell-session
yarn dev
```

### Compiles and hot-reloads for development(vite preview)
```Shell-session
yarn serve
```

### Compiles and minifies for production
```Shell-session
yarn build
```

### Run your unit tests
```Shell-session
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```Shell-session
yarn lint
```

---

# 環境構築

yarn crete viteでプロジェクト作成時は必要最低限のパッケージがインストールされている為随時インストールする。

## envファイルの設定

「.env.example」をリネームして環境ごとの環境変数を設定する

```
.env.local
.env.development
.env.prod

# .env.local
NODE_ENV='local'
VUE_APP_API_BASE_URL='http://localhost:8080/api/v1/xxx'

# .env.development
# NODE_ENV='development'
# VUE_APP_API_BASE_URL='https://development/api/v1/xxx'

# .env.prod
# NODE_ENV='production'
# VUE_APP_API_BASE_URL='https://production/api/v1/xxx'
```

## .editorconfigの設定

```config
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

## アセットディレクトリの作成

/src/assets/下に
「css」、「img」ディレクトリ作成

## パッケージの追加

下記のライブラリを追加

### sass

```Shell-session
$ yarn add --dev sass
```

下記のcssファイルの拡張子を`scss`に変更する

```Shell-session
- /src/App.css
- /src/index.css
```

元々のcssファイルをインポートしていた箇所も修正する

```Shell-session
- /src/App.tsx
- /src/main.tsx
```

### axios

```Shell-session
$ yarn add axios
$ yarn add --dev stylelint
```

### stylelint

```Shell-session
$ yarn add --dev stylelint
```

`package.json`の`scripts`に設定を追記

```json
  "scripts": {
    ...
    "lint:css": "stylelint src/**/*.scss"
  },
```

### eslint

```Shell-session
$ yarn add --dev eslint
$ yarn add --dev @typescript-eslint/eslint-plugin
$ yarn add --dev @typescript-eslint/parser
// 一括
$ yarn add --dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

`package.json`の`scripts`に設定を追記

```json
  "scripts": {
    ...
    "lint": "eslint --ext .ts,.js,.tsx,.jsx --ignore-path .gitignore . --fix"
  },
```

### prettier

```Shell-session
$ yarn add --dev prettier
// eslint連携用のパッケージ
$ yarn add --dev eslint-config-prettier eslint-plugin-prettier
```

---

## パッケージのscriptsの設定

package.jsonの編集

```Json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "lint": "eslint --ext .ts,.js,.tsx,.jsx --ignore-path .gitignore . --fix",
    "lint:css": "stylelint src/**/*.scss"
  },
```

---

## パッケージの設定ファイルの設定

### /.eslintrc.jsの作成と編集

`prettier`と`typescript-eslint`の設定を追加する

```TypeScript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    'no-unused-components': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/e2e/**/*.spec.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}

```

### .prettierrcの作成と編集

```Json
{
  "semi": false,
  "arrowParens": "always",
  "singleQuote": true
}
```

### .stylelintrcの作成と編集

```Json
{
  "rules": {
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "custom-property-no-outside-root": true,
    "indentation": 2,
    "length-zero-no-unit": true,
    "media-feature-name-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "selector-root-no-composition": true,
    "string-quotes": "single"
  }
}
```

---

## jestのインストール

確認中。
まだ出来る様になっていない。

```Shell-session
$ yarn add --dev jest ts-jest @types/jest
```

`package.json`の設定

```Json
  "scripts": {
    ...
    "test:unit": "jest --config jest.config.js",
    "test:e2e": "cypress open --browser chrome"
  },
```

`jest.config.js`の設定

```JavaScript
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  testMatch: ['<rootDir>/tests/unit/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json'],
  testURL: 'http://localhost/',
  collectCoverage: false, // no check coverage
}

```

`@testing-library/react`のインストール

```Shell-session
$ yarn add --dev @testing-library/react
```


---

## tsconfig.jsonの設定

デフォルトのtsconfig.jsonの設定は下記

```Json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": ["./src"],
  "exclude": [
    "node_modules"
  ]
}
```

production build の為に`skipLibCheck`は`true`を設定する。

```Json
{
  "compilerOptions": {
    "skipLibCheck": true,
  }
}
```

---

## vite.config.tsの設定

必要最低限の設定は下記の通り

```Shell-session
$ yarn add --dev @vitejs/plugin-react-refresh
```

```TypeScript
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  root: './src',
  build: {
    target: 'esnext',
    outDir: '../dist',
    emptyOutDir: true,
  },
  base: '/',
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/'),
    },
  },
  server: {
    open: true,
    port: 8080, //default 3000
    // Configure custom proxy rules for the dev server.
    proxy: {
      // '/api': 'http://localhost:8000/api',
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

```

---

## routerの設定

```Shell-session
yarn add react-router-dom
yarn add --dev @types/react-router-dom
```

### pageコンポーネント

```TypeScript
export const Home: React.VFC = () => {
  return (
    <div>
      <div className="board-row">
        <p>Hello Home!</p>
      </div>
    </div>
  )
}

export default Home
```

### Router.tsx

```TypeScript
import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import { Home } from '@/pages/Home'
import { Sample } from '@/pages/Sample'

export const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sample" component={Sample} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router

```

---

## Cypressの設定

### Cypressのインストール


```Shell-session
yarn add --dev cypress @types/jest
```

### tsconfig.jsonにtypesの設定を追加

`tsconfig.json`の`compilerOptions`に`types`の設定を追加する。

```Json
{
  "compilerOptions": {
    ...
    "jsx": "react",
    "types": [
      "@types/jest",
      "cypress"
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}
```

### package.jsonの設定

`package.json`の`scripts`の設定を追加

```Json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "lint": "eslint --ext .ts,.js,.tsx,.jsx --ignore-path .gitignore . --fix",
    "lint:css": "stylelint src/**/*.scss",
    "test:e2e": "cypress open --browser chrome"
  },
```
### cypress.jsonの設定

`package.json`の`scripts`の設定を追加

```Json
{
  "baseUrl": "http://localhost:8080",
  "pluginsFile": "tests/e2e/plugins/index.js"
}
```

### e2eディレクトリの設定

vue-cliの設定を踏襲して、`tests/e2e`ディレクトリで実行させる。

`cypress`ディレクトリ = `e2e`ディレクトリ

`tests/e2e/plugins/index.js`の設定を修正(ファイルの出力先の設定)

```JavaScript
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/integrations',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js'
  })
}
```

---

## husky,lint-stagedの設定

huskyが設定されていなければ追加する

v5系から設定方法が変わっている。

```Shell-session
$ yarn add --dev husky lint-staged
```

package.jsonの`srcripts`に`prepare`が追記されている為下記の通り修正する。(モノレポ用の設定)

`frontend/.huskyディレクトリ`を作成する為に`yarn prepare`と`yarn create-precommit`をそれぞれ実行する。

```Shell-session
$ yarn prepare
$ yarn create-precommit
```

```json
  "scripts": {
    ...
    "prepare": "cd .. && husky install frontend/.husky",
    "create-precommit": "cd .. && husky add frontend/.husky/pre-commit \"cd frontend && yarn lint-staged\"",
    "lint-staged": "lint-staged"
  },
```

また、自分のホームディレクトリに`~/.huskyrc`を作成してnvmの設定しないと`yarn`コマンドが使えなくなる為設定する。

```Shell-session
$ touch ~/.huskyrc
$ vim ~/.huskyrc
```

```Shell-session
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# 現在利用しているnodeバージョンをuseする
nvm use stable
```


## Componentsディレクトリの設定

```Shell-session
parts
modules
views
```

---

## aws-cliの設定

`pyenv`のインストール

```Shell-session
$ git clone https://github.com/pyenv/pyenv.git ~/.pyenv

~ $ pyenv --version
pyenv 2.2.0-5-g54889eb8
```
`v2`から`~/.bashrc`に記載する推奨内容が変更されている。

### ~/.bash_profile

```Shell-session
# pyenv
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
```

### ~/.bashrc

```Shell-session
# pyenv
eval "$(pyenv init -)"
```

### 読み込み

```Shell-session
$ source ~/.bash_profile
```


### インストールバージョンのリスト

```Shell-session
$ pyenv versions
* system (set by $HOME/.pyenv/version)

$ pyenv install --list
```

### 指定したバージョンのインストール

```Shell-session
$ pyenv install 3.9.7
```

```Shell-session
$ pyenv global 3.9.7
$ pyenv local 3.9.7

$ python --version
Python 3.9.7
$ which python
$HOME/.pyenv/shims/python
```

### pipでaws-cliのインストール

```Shell-session
$ aws --version
aws-cli/1.21.7 Python/3.9.7 Darwin/19.6.0 botocore/1.22.7
```

PC再起動後にインストールしたバージョンを反映させる為に、dotfilesの設定を必ずする事。


### .awsの確認

*既にプロファイルが作成済みの場合

*プロファイル未作成の場合.awsのディレクトリの作成とパーミッションを付与する。

```Shell-session
$ mkdir .aws
$ chmod 766 .aws
$ cd ~/.aws
$ touch credentials
```

```Shell-session
$ cat ~/.aws/credentials
[default]
aws_access_key_id=xxxxxxxxxxxxxxxxxxxx
aws_secret_access_key=xxxxxxxxxxxxxxxxxxxx

[profile_name]
aws_access_key_id=xxxxxxxxxxxxxxxxxxxx
aws_secret_access_key=xxxxxxxxxxxxxxxxxxxx

$ cat ~/.aws/config
[default]
region=xxxxxxxxxxxxxxxxxxxx
output=json

[profile profile_name]
region=xxxxxxxxxxxxxxxxxxxx
```


### プロファイルの確認

```Shell-session
$ aws configure list
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile                <not set>             None    None
access_key     ****************XXXX shared-credentials-file
secret_key     ****************XXXX shared-credentials-file
    region           xx-xxxxxxxxx-1      config-file    ~/.aws/config
```

プロファイル名の指定

```Shell-session
$ aws configure list --profile profile_name
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile          　　profile_name           manual    --profile
access_key     ****************XXXX shared-credentials-file
secret_key     ****************XXXX shared-credentials-file
    region           xx-xxxxxxxxx-1      config-file    ~/.aws/config
```

### プロファイルの切り替え

`~/.bash_profile`に下記を追記

```Shell-session
$ vim ~/.bash_profile

# aws-cli
export AWS_PROFILE=profile_name

$ source ~/.bash_profile
```

### オプションの指定無しでプロファイルの確認

```Shell-session
$ aws configure list
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile          　　profile_name           manual    --profile
access_key     ****************XXXX shared-credentials-file
secret_key     ****************XXXX shared-credentials-file
    region           xx-xxxxxxxxx-1      config-file    ~/.aws/config
```

amplifyを使用する場合はamplify用のプロファイルを設定しておく事。

### IAMユーザーやグループの確認

```Shell-session
$ aws iam list-users
$ aws iam list-groups
```

### S3の確認

```Shell-session
$ aws s3 ls
```

### cloudfrontのディストリビューションの設定確認

```Shell-session
$ aws cloudfront get-distribution-config --id ${DISTRIBUTION_ID}
```

### cloudformationのスタックの確認

```Shell-session
$ aws cloudformation list-stacks
```


---

## amplify-cliの設定

### amplify-cliのインストール

```Shell-session
$ npm install -g @aws-amplify/cli

$ amplify -v
6.3.1
```

### configureの設定(AWSアカウントの紐付け)

```Shell-session
$ amplify configure
```

AWSのマネジメントコンソールを開きつつ新しいIAMユーザーを作成する。

ユーザー詳細の設定、AWSアクセスの種類の設定、アクセス権限の設定、タグの設定を行う。

- AWSアクセスの種類→`プログラムによるアクセス`のみを選択する。
- アクセス権限の設定→`AdministratorAccess`や`AdministratorAccess-Amplify`を設定する。
- タグは任意

作成後にaccess_keyなどをローカルに設定してプロファイル情報を保存する。

`.aws/config`、`.aws/credentials`が更新される。

```Shell-session
$ amplify configure
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  ap-northeast-1
Specify the username of the new IAM user:
? user name:  amplify-test-user
Complete the user creation using the AWS console
xxxxxxxxxx
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
This would update/create the AWS Profile in your local machine
? Profile Name:  profile_name

Successfully set up the new user.
```

---

## アプリケーションへのamplifyの設定

初期化コマンド

*実行後に作成される`amplify`ディレクトリに秘匿情報が含まれるている為、必ず`gitignore`に入れる事。


```Shell-session
$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project amplifytest
The following configuration will be applied:

Project information
| Name: amplifytest
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? No
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation

? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use profile_name
Adding backend environment dev to AWS Amplify Console app: xxxxxxxxxxx
⠼ Initializing project in the cloud...

Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

```

この時点でクラウド上に`Amplify`にアプリケーションが、`CloudFormation`にスタックが、`S3`にバックエンド用のバケットが作成される。

各スタックに設定されている`テンプレート`を`デザイナー`で確認する事が出来る。


`amplify init`で行った設定はプロジェクトフォルダ内の`amplify/.config/local-env-info.json`と`amplify/.config/project-config.json`で確認出来る。


```Shell-session
$ cat amplify/.config/local-env-info.json
{
  "projectPath": "/path/amplify-test",
  "defaultEditor": "vscode",
  "envName": "dev"
}
```

```Shell-session
$ cat amplify/.config/project-config.json
{
  "projectName": "amplifytest",
  "version": "3.1",
  "frontend": "javascript",
  "javascript": {
    "framework": "react",
    "config": {
      "SourceDir": "src",
      "DistributionDir": "dist",
      "BuildCommand": "npm run-script build",
      "StartCommand": "npm run-script start"
    }
  },
  "providers": [
    "awscloudformation"
  ]
}
```

---

## reactアプリケーションにamplifyを適用する


下記のパッケージを追加する。

認証関連を扱わない場合は`aws-amplify`のみで良い。

```Shell-session
$ yarn add aws-amplify aws-amplify-react
```

`amplify init`後に作成される、`/src/aws-exports.js`をts拡張子に変更する(`gitignore`にも追加)。


### App.tsxに設定の追加

```TypeScript
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import awsConfig from '@/aws-exports'

// Amplifyの設定を行う
Amplify.configure(awsConfig)
```


---

## amplify-cliコマンド一覧

### ステータスの確認

```Shell-session
$ amplify status

    Current Environment: dev

┌──────────┬───────────────┬───────────┬─────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin │
└──────────┴───────────────┴───────────┴─────────────────┘

```


### サイトの公開(ホスティングの追加)

下記のコマンドでS3での静的ウェブホスティングを有効にする。
バケット名に何も指定しない場合はデフォルトでユニークなバケットを作成する。


```Shell-session
$ amplify add hosting
? Select the plugin module to execute Amazon CloudFront and S3
? Select the environment setup: PROD (S3 with CloudFront using HTTPS)
? hosting bucket name bucket_name
Static webhosting is disabled for the hosting bucket when CloudFront Distribution is enabled.

You can now publish your app using the following command:
Command: amplify publish

```

```Shell-session
$ amplify status

    Current Environment: dev

┌──────────┬─────────────────┬───────────┬───────────────────┐
│ Category │ Resource name   │ Operation │ Provider plugin   │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Hosting  │ S3AndCloudFront │ Create    │ awscloudformation │
└──────────┴─────────────────┴───────────┴───────────────────┘

```

この時点でクラウド上のS3,CloudFrontに影響は無い。

`Select the plugin module to execute`の質問の際に`amplify`の選択肢がある。

恐らく、これを選ぶとamplifyコンソール側(バックエンドをデプロイしたアプリ)にフロントエンドととしてホストされる。(未検証)


### アプリケーションのデプロイ

下記のコマンドでS3での静的ウェブホスティングを有効にする。
バケット名に何も指定しない場合はデフォルトでユニークなバケットを作成する。

事前に`amplify add hosting`を実行しておく必要がある。


```Shell-session
$ amplify add publish
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev

┌──────────┬─────────────────┬───────────┬───────────────────┐
│ Category │ Resource name   │ Operation │ Provider plugin   │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Hosting  │ S3AndCloudFront │ No Change │ awscloudformation │
└──────────┴─────────────────┴───────────┴───────────────────┘

? Are you sure you want to continue? Yes
⠦ Updating resources in the cloud. This may take a few minutes...

> amplify-test@0.0.0 build /path/amplify-test
> tsc && vite build

vite v2.6.7 building for production...
✓ 2049 modules transformed.
../dist/assets/favicon.17e50649.svg   1.49 KiB
../dist/index.html                    0.64 KiB
../dist/assets/index.55884c9b.js      13.36 KiB / gzip: 3.21 KiB
../dist/assets/index.20a02549.css     17.60 KiB / gzip: 3.41 KiB
../dist/assets/vendor.50132193.js     688.03 KiB / gzip: 188.47 KiB

(!) Some chunks are larger than 500 KiB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/guide/en/#outputmanualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
frontend build command exited with code 0
Publish started for S3AndCloudFront
✔ Uploaded files successfully.
Your app is published successfully.
https://xxxxxxxxxx.cloudfront.net

```


```Shell-session
$ amplify status

    Current Environment: dev

┌──────────┬─────────────────┬───────────┬───────────────────┐
│ Category │ Resource name   │ Operation │ Provider plugin   │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Hosting  │ S3AndCloudFront │ No Change │ awscloudformation │
└──────────┴─────────────────┴───────────┴───────────────────┘

Hosting endpoint: https://xxxxxxxxxx.cloudfront.net

```

Hosting endpointにアクセスするとビルドしたファイルにアクセスする事が出来る。


`production mode`でビルドがされていない。

`Environment: dev`の影響と思われる。→devtoolは反応するがprofilingが出来ないので問題無いと思われる。



---

## 認証機能の追加

下記のコマンドでローカルに認証機能を追加する。

認証方法ははユーザー名、電話番号、emailなどから選択出来る。

```Shell-session
$ amplify add auth

Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configurati
on? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
✅ Successfully added auth resource ${resouce_name} locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

認証機能をcloudに追加(push)する。

```Shell-session
$ amplify push
⠦ Fetching updates to backend environment: dev from the cloud.⠋ Buildin✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev

┌──────────┬─────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name       │ Operation │ Provider plugin   │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Auth     │ resource_name       │ Create    │ awscloudformation │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Hosting  │ S3AndCloudFront     │ No Change │ awscloudformation │
└──────────┴─────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS ${project_name} AWS::CloudFormation::Stack Thu Dec 16 2021 00:22:50 GMT+0900 (日本標準時) User Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

```

push後はcloudのS3などの各サービスが更新されている。
また、下記のサービスに設定が新規追加されている

`Lambda`: 関数が2つ追加されている。

`Cognite`: ユーザープール、IDプールが作成される。


statusは下記の通りに変わる。

```Shell-session
$ amplify status

    Current Environment: dev

┌──────────┬─────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name       │ Operation │ Provider plugin   │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Hosting  │ S3AndCloudFront     │ No Change │ awscloudformation │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Auth     │ resource_name       │ No Change │ awscloudformation │
└──────────┴─────────────────────┴───────────┴───────────────────┘
```

`aws-amplify-react`を追加する。(`aws-amplify`をインストールしていない場合は一緒にインストールする。)

認証関連を扱わない場合は`aws-amplify`のみで良い。

```Shell-session
$ yarn add aws-amplify aws-amplify-react
```

2021年12月現在、`aws-amplify-react`はregacy扱いになっている...。

新規の`@aws-amplify/ui-react`を代わりに使う。

[Amplify Docs](https://docs.amplify.aws/ui/q/framework/react/)

[Amplify UI](https://ui.docs.amplify.aws/)

[aws-amplify/amplify-ui](https://github.com/aws-amplify/amplify-ui)


yarn addして使おうとしたが、cssの読み込みが上手く行かなかった。

`@aws-amplify/ui-react`は親の`@aws-amplify/ui`を参照しているのでこちらもインストールする必要がある。(viteだけ？)

```Shell-session
$ yarn add @aws-amplify/ui
```

結局下記の３つをインストールすることになる。

```Shell-session
$ yarn add aws-amplify @aws-amplify/ui-react @aws-amplify/ui
```


### App.tsxに設定の追加

最小限の設定としては下記の様な形

```TypeScript
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import awsConfig from '@/aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

// Amplifyの設定を行う
Amplify.configure(awsConfig)

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="app">
          <!-- main contents -->
        </div>
      )}
    </Authenticator>
  )
}
```


---

### デフォルトの機能の修正

- 日本語設定
- sign out機能ハンドラー設定
- sign up機能の非表示化
- password reset機能の非表示化

最小限の設定としては下記の様な形

```TypeScript
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import awsConfig from '@/aws-exports'
import { Authenticator, View } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

// 日本語化対応
import { translations } from '@aws-amplify/ui'
I18n.putVocabularies(translations)
I18n.setLanguage('ja')

import { AppRouter } from '@/AppRouter'
import { GlobalFooter } from '@/components/_global/GlobalFooter'
import { AuthGlobalHeader } from '@/components/_global/AuthGlobalHeader'

// Amplifyの設定を行う
Amplify.configure(awsConfig)

function App() {
  // 認証フォームコンポーネントの拡張設定
  const components = {
    // パスワードリセットフォームでの入力を防ぐ
    SignIn: {
      Footer() {
        return <View textAlign="center">*パスワードリセットは出来ません。</View>
      },
    },
    // sign up コンポーネントのフォームを設定しない事で入力を防ぐ
    SignUp: {
      FormFields() {
        return <View textAlign="center"></View>
      },
    },
  }

  return (
    <Authenticator variation="modal" components={components}>
      {({ signOut, user }) => (
        <div className="app">
          <AuthGlobalHeader signOut={signOut} />
          <div>
            <!-- main contents -->
          </div>
        </div>
      )}
    </Authenticator>
  )
}

export default App

```

signIn & signUpのタブを非表示にする為に下記のCSS設定を追加する。

```scss
.amplify-tabs {
  display: none !important;
}
```

---

## APIの追加

```Shell-session
$ amplify add api

? Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create. Select a setting to edit
 or continue Continue
? Choose a schema template: Single object with fields (e.g., “Todo” wit
h ID, name, description)

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Todo
Learn more about @auth here: https://docs.amplify.aws/cli-legacy/graphql-transformer/auth

GraphQL schema compiled successfully.

Edit your schema at /path/project/amplify/backend/api/amplifytest/schema.graphql or place .graphql files in a directory at /path/project/amplify/backend/api/amplifytest/schema
✔ Do you want to edit the schema now? (Y/n) · no
✅ Successfully added resource ${project_name} locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

```

statusの確認

```Shell-session
$ amplify status

    Current Environment: dev

┌──────────┬─────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name       │ Operation │ Provider plugin   │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Api      │ project_name        │ Create    │ awscloudformation │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Hosting  │ S3AndCloudFront     │ No Change │ awscloudformation │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Auth     │ project_name_id     │ No Change │ awscloudformation │
└──────────┴─────────────────────┴───────────┴───────────────────┘

Hosting endpoint: https://xxxxxxxxxx.cloudfront.net

```

### backendのpush


```Shell-session
$ amplify push
⠦ Fetching updates to backend environment: dev from the cloud.⠋ Buildin⠙ Building resource api/project_name

    Current Environment: dev

┌──────────┬─────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name       │ Operation │ Provider plugin   │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Api      │ project_name        │ Create    │ awscloudformation │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Hosting  │ S3AndCloudFront     │ No Change │ awscloudformation │
├──────────┼─────────────────────┼───────────┼───────────────────┤
│ Auth     │ project_name_id     │ No Change │ awscloudformation │
└──────────┴─────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target typescript
? Enter the file name pattern of graphql queries, mutations and subscri
ptions src/graphql/**/*.ts
? Do you want to generate/update all possible GraphQL operations - quer
ies, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema i
s deeply nested] 2
? Enter the file name for the generated code src/API.ts
⠼ Updating resources in the cloud. This may take a few minutes...


GraphQL endpoint: https://xxxxxxxxx.appsync-api.ap-northeast-1.amazonaws.com/graphql
GraphQL API KEY: xxxxxxxxxxxxxxx

```

cloud上ではAppSyncとDynamoDBに当プロジェクトの設定が追加される。

ちなみ、`amplify push`をしただけではフロントエンドの設定(新規追加した認証機能など)は最新に更新されない。

`amplify publish`をしないとビルドされないっぽい。


---

## 初回publishした段階の状態

1. `amplify/backend`ディレクトリに`hosting/S3AndCloudFront`ディレクトリが作成される。
2. `S3AndCloudFront`ディレクトリに内には`parameters.json`や`template.json`などs3のバケット情報やcloudformantionのスタックのテンプレートが記載されている。
3. `aws-exports.js`に`aws_content_delivery_bucket`や`aws_content_delivery_bucket_region`、`aws_content_delivery_url`が追記される。
4. `aws-exports.ts`には上書きされないので要注意が必要か。
5. cloud上のamplifyコンソールにはbackendのみがデプロイされている状態である。
6. ビルドしたフロントエンドファイルはS3&cloudfrontに置かれている為完全に別れている。(s3は別バケットになっている。cloudformationのスタックはネストされている。)


```Shell-session

```



---

## amplifyプロジェクトのリポジトリをcloneした後の対応

`amplify`ディレクトリなどはソース管理していない、かつ`amplify/config`などはソース管理されない様になっている為別途コマンドを打ってプロジェクト情報を取得する必要がある。

```Shell-session
$ amplify pull ${AMPLIFY_APP_ID}
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use profile_name
? Which app are you working on? amplify_app_id
Backend environment 'dev' found. Initializing...
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm run-script build
? Start Command: npm run-script start
? Do you plan on modifying this backend? Yes
✔ Successfully pulled backend environment dev from the cloud.


Successfully pulled backend environment dev from the cloud.
Run 'amplify pull' to sync future upstream changes.
```

.gitignoreが更新されてしまうので元に戻しておくこと。


---

## amplify-cliを用いた開発の流れ

1. `amplify add xxx`でアプリケーションに必要なAWSのサービスを追加する。
2. `amplify push`で追加した機能を有効化させる(CloudFrontのテンプレートファイルを更新)。
3. `amplify publish`で静的リソースを`S3/CloudFront`にデプロイする。
4. `amplify delete`でinitで作成した環境を全て削除。
5. `amplify pull`で最新の状態の更新。


```Shell-session

```


---

## troubleshooting

2021/11/02 現在

viteでamplifyを使うと、
下記の様な現象が見られる為


[aws/aws-sdk-js/issues/3673](https://github.com/aws/aws-sdk-js/issues/3673)
[getting-started/installation?platform=vue#troubleshooting](https://ui.docs.amplify.aws/ui/getting-started/installation?platform=vue#troubleshooting)


```Shell-session

```



---

#
