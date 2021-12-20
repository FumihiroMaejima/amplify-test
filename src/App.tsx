import React, { useState } from 'react'
import Amplify, { I18n } from 'aws-amplify'
import awsConfig from '@/aws-exports'
import { Authenticator, View } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

// 日本語化対応
import { translations } from '@aws-amplify/ui'
I18n.putVocabularies(translations)
I18n.setLanguage('ja')

// import logo from '@/assets/img/logo.svg'
import { AppRouter } from '@/AppRouter'
import { GlobalFooter } from '@/components/_global/GlobalFooter'
// import { GlobalHeader } from '@/components/_global/GlobalHeader'
import { AuthGlobalHeader } from '@/components/_global/AuthGlobalHeader'
// import '@/assets/scss/App.scss'

// Amplifyの設定を行う
Amplify.configure(awsConfig)

function App() {
  const [count, setCount] = useState(0)

  // 認証フォームコンポーネントの拡張設定
  const components = {
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
