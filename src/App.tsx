import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import awsConfig from '@/aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

// import logo from '@/assets/img/logo.svg'
import { AppRouter } from '@/AppRouter'
import { GlobalFooter } from '@/components/_global/GlobalFooter'
import { GlobalHeader } from '@/components/_global/GlobalHeader'
// import '@/assets/scss/App.scss'

// Amplifyの設定を行う
Amplify.configure(awsConfig)

function App() {
  const [count, setCount] = useState(0)

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="app">
          <GlobalHeader />
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
