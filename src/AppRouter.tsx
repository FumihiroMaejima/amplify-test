import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import { About } from '@/pages/About'
import { Home } from '@/pages/Home'

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
