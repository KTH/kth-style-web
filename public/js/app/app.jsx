import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
        <Route exact path="/basic/">
          <Redirect to="/basic/colors" />
        </Route>
        <Route exact path="/basic/colors" component={Colors} />
        <Route exact path="/basic/icons" component={Icons} />
        <Route exact path="/basic/spacing" component={Spacing} />
        <Route exact path="/basic/typography" component={Typography} />
        <Route exact path="/basic/buttons" component={ButtonsPage} />
        <Route exact path="/basic/tables" component={TablesPage} />
        <Route exact path="/basic/separators" component={SeparatorPage} />
        <Route exact path="/basic/links" component={Links} />
        <Route exact path="/components/">
          <Redirect to="/components/forms" />
        </Route>
        <Route exact path="/components/forms" component={FormsPage} />
        <Route exact path="/components/breadcrumbs" component={Breadcrumbs} />
        <Route exact path="/components/alerts" component={Alerts} />
        <Route exact path="/components/collapse" component={CollapsePage} />
        <Route exact path="/components/tabs" component={Tabs} />
        <Route exact path="/components/modals" component={ModalPage} />
        <Route exact path="/components/navigation" component={NavigationPage} />
        <Route exact path="/setup-guide/">
          <Redirect to="/setup-guide/setup" />
        </Route>
        <Route exact path="/setup-guide/setup" component={SetupGuidePage} />
        <Route exact path="/setup-guide/guidelines" component={GuidelinesPage} />
        <Route exact path="/setup-guide/cortina-blocks" component={CortinaBlocksPage} />
        <Route exact path="/setup-guide/deprecations" component={DeprecationsPage} />
      </Switch>
    </MobxStoreProvider>
  )
}
