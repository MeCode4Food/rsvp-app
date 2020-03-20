import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

// Component
import App from './App'
import About from './containers/about'
import Lucie from './containers/lucie'
import ErrorPage from './containers/error'
import ScrollToTop from './components/scroll-to-top'

// Helpers
import history from './helpers/history'

// Style
import './index.scss'
import './style/main.scss'

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={About} />
        <Route exact path='/lucie' component={Lucie} />
        <Route component={ErrorPage} />
      </Switch>
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
