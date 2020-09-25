import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Provider } from 'mobx-react'

import { MobxStoreProvider, uncompressStoreInPlaceFromDocument } from './mobx'
import createApplicationStore from './stores/createApplicationStore'

// Sass
import '../../css/kth-style-web.scss'

// Pages
import Start from './pages/Start'
import Colors from './pages/ColorsPage'
import Icons from './pages/IconsPage'
import Spacing from './pages/SpacingPage'
import Typography from './pages/TypographyPage'
import ButtonsPage from './pages/ButtonsPage'
import CollapsePage from './pages/CollapsePage'
import TablesPage from './pages/TablesPage'
import FormsPage from './pages/FormsPage'
import SetupGuidePage from './pages/SetupGuidePage'
import Breadcrumbs from './pages/BreadcrumbsPage'
import Alerts from './pages/AlertsPage'
import Tabs from './pages/TabsPage'
import Links from './pages/LinksPage'
import GuidelinesPage from './pages/GuidelinesPage'
import SeparatorPage from './pages/SeparatorPage'
import NavigationPage from './pages/NavigationPage'
import ModalPage from './pages/ModalPage'
import CortinaBlocksPage from './pages/CortinaBlocksPage'
import DeprecationsPage from './pages/DeprecationsPage'

export default appFactory

_renderOnClientSide()

function _renderOnClientSide() {
  const isClientSide = typeof window !== 'undefined'
  if (!isClientSide) {
    return
  }

  // @ts-ignore
  const basename = window.config.proxyPrefixPath.uri

  const applicationStore = createApplicationStore()
  uncompressStoreInPlaceFromDocument(applicationStore)

  const app = <BrowserRouter basename={basename}>{appFactory(applicationStore)}</BrowserRouter>

  const domElement = document.getElementById('app')
  ReactDOM.hydrate(app, domElement)
}

function appFactory(applicationStore) {
  return (
    <MobxStoreProvider initCallback={() => applicationStore}>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/colors" component={Colors} />
        <Route exact path="/icons" component={Icons} />
        <Route exact path="/spacing" component={Spacing} />
        <Route exact path="/typography" component={Typography} />
        <Route exact path="/buttons" component={ButtonsPage} />
        <Route exact path="/collapse" component={CollapsePage} />
        <Route exact path="/tables" component={TablesPage} />
        <Route exact path="/forms" component={FormsPage} />
        <Route exact path="/setup-guide" component={SetupGuidePage} />
        <Route exact path="/breadcrumbs" component={Breadcrumbs} />
        <Route exact path="/alerts" component={Alerts} />
        <Route exact path="/tabs" component={Tabs} />
        <Route exact path="/links" component={Links} />
        <Route exact path="/guidelines" component={GuidelinesPage} />
        <Route exact path="/separators" component={SeparatorPage} />
        <Route exact path="/navigation" component={NavigationPage} />
        <Route exact path="/modals" component={ModalPage} />
        <Route exact path="/cortina-blocks" component={CortinaBlocksPage} />
        <Route exact path="/deprecations" component={DeprecationsPage} />
      </Switch>
    </MobxStoreProvider>
  )
}
