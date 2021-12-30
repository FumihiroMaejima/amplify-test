import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import { About } from '@/pages/About'
import { Graph } from '@/pages/Graph'
import { Home } from '@/pages/Home'
import { Sample } from '@/pages/Sample'
import { Picsum } from '@/pages/Picsum'
import { Test1 } from '@/pages/Test1'

export const AppRouter = (): JSX.Element => {
  // process.envがdevelopかの判定
  // 開発時用専用のページを用意したい時に設定する
  const isDevelop = import.meta.env.DEV || false

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/graph" component={Graph} />
        <Route exact path="/sample" component={Sample} />
        {isDevelop && <Route exact path="/picsum" component={Picsum} />}
        {isDevelop && <Route exact path="/test1" component={Test1} />}
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
