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
import Colors from './pages/ColorsPage'
import Icons from './pages/IconsPage'
import Spacing from './pages/SpacingPage'
import Typography from './pages/TypographyPage'
import ButtonsPage from './pages/ButtonsPage'
import CollapsePage from './pages/CollapsePage'
import TablesPage from './pages/TablesPage'

function appFactory() {
  if (typeof window !== 'undefined') {
    styleStore.initializeStore('styleStore')
  }

  return (
    <Provider styleStore={styleStore}>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/colors" component={Colors} />
        <Route exact path="/icons" component={Icons} />
        <Route exact path="/spacing" component={Spacing} />
        <Route exact path="/typography" component={Typography} />
        <Route exact path="/buttons" component={ButtonsPage} />
        <Route exact path="/collapse" component={CollapsePage} />
        <Route exact path="/tables" component={TablesPage} />
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
  const basename = window.config.proxyPrefixPath.uri
  ReactDOM.render(<BrowserRouter basename={basename}>{appFactory()}</BrowserRouter>, document.getElementById('app'))
}

export { appFactory, staticRender }
