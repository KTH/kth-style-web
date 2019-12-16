import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StaticRouter } from 'react-router'
import { Provider } from 'mobx-react'

// Sass
import '../../css/kth-style-web.scss'

// Store
import { styleStore } from './stores/StyleStore'

// Pages
import Start from './pages/Start'

function appFactory() {
  if (typeof window !== 'undefined') {
    styleStore.initializeStore('styleStore')
  }

  return (
    <Provider styleStore={styleStore}>
      <Switch>
        <Route exact path="/style" component={Start} />
      </Switch>
    </Provider>
  )
}

function staticRender(context, location) {
  return (
    <StaticRouter location={location} context={context}>
      {appFactory()}
    </StaticRouter>
  )
}

if (typeof window !== 'undefined') {
  ReactDOM.render(<BrowserRouter>{appFactory()}</BrowserRouter>, document.getElementById('app'))
}

export { appFactory, staticRender }
