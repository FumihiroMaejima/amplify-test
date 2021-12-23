import React, { useState } from 'react'
import Amplify, { I18n, API, graphqlOperation } from 'aws-amplify'
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

import { createTodo, updateTodo, deleteTodo } from '@/graphql/mutations'
import { listTodos } from '@/graphql/queries'
import { onCreateTodo } from '@/graphql/subscriptions'
import Observable from 'zen-observable-ts'

// Amplifyの設定を行う
Amplify.configure(awsConfig)

// GraphQL設定
// ------------------------------------------------

const todo = { name: 'My first todo', description: 'Hello world!' }
const todoId = 1

// mutation

// create
await API.graphql(graphqlOperation(createTodo, { input: todo }))

// update
await API.graphql(
  graphqlOperation(updateTodo, {
    input: { id: todoId, name: 'Updated todo info' },
  })
)

// delete
await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }))

// queries
const todos = await API.graphql(graphqlOperation(listTodos))

// subscriptions
// Subscribe to creation of Todo
const subscribeResult = API.graphql(
  graphqlOperation(onCreateTodo)
) as Observable<typeof todo>
const subscription = subscribeResult.subscribe({
  next: (todoData) => {
    console.log(todoData)
    // Do something with the data
  },
})

// Stop receiving data updates from the subscription
subscription.unsubscribe()

// ------------------------------------------------

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
