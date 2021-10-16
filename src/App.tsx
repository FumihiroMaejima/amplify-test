import React, { useState } from 'react'
import logo from '@/assets/img/logo.svg'
import { AppRouter } from '@/AppRouter'
import { GlobalFooter } from '@/components/_global/GlobalFooter'
import { GlobalHeader } from '@/components/_global/GlobalHeader'
import '@/assets/scss/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <GlobalHeader />
      <div className="app-content">
        <AppRouter />
      </div>
      <GlobalFooter />
    </div>
  )
}

export default App

{
  /* <div class="app-content">
      <router-view />
    </div> */
}
