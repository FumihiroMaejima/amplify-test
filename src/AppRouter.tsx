import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import { About } from '@/pages/About'
import { Home } from '@/pages/Home'
import { Sample } from '@/pages/Sample'
import { Picsum } from '@/pages/Picsum'

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/sample" component={Sample} />
        <Route exact path="/picsum" component={Picsum} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
