import React, { useState } from 'react'
import Amplify, { I18n } from 'aws-amplify'
import awsConfig from '@/aws-exports'
import { Authenticator, View } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

// 日本語化対応
import { translations } from '@aws-amplify/ui'
I18n.putVocabularies(translations)
I18n.setLanguage('ja')

import { AppRouter } from '@/AppRouter'
import { GlobalFooter } from '@/components/_global/GlobalFooter'
// import { GlobalHeader } from '@/components/_global/GlobalHeader'
import { AuthGlobalHeader } from '@/components/_global/AuthGlobalHeader'
import { GlobalBackToPageTopButton } from '@/components/_global/GlobalBackToPageTopButton'

import { queryApi } from '@/graphql/utils'
import { listTodos } from '@/graphql/queries'

// Amplifyの設定を行う
Amplify.configure(awsConfig)

// DynamoDBのデータの取得
// const queryData = queryApi<Record<'id', number>>(listTodos)

function App() {
  const [count, setCount] = useState(0)

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
          {/* <GlobalHeader /> */}
          <GlobalBackToPageTopButton />
          <AuthGlobalHeader signOut={signOut} />
          <div className="app-content">
            <AppRouter />
          </div>
          <GlobalFooter />
        </div>
      )}
    </Authenticator>
  )

  /* return (
    <div className="app">
      <GlobalHeader />
      <div className="app-content">
        <AppRouter />
      </div>
      <GlobalFooter />
    </div>
  ) */
}

export default App

{
  /* <div class="app-content">
      <router-view />
    </div> */
}
