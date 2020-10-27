/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-use-before-define */
import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../mobx'
import i18n from '../../../../i18n'

import { useParams } from 'react-router'
import ButtonsPage from './ButtonsPage'
import TablesPage from './TablesPage'

import Colors from './ColorsPage'
import Icons from './IconsPage'
import Spacing from './SpacingPage'
import Typography from './TypographyPage'
import CollapsePage from './CollapsePage'
import FormsPage from './FormsPage'
import SetupGuidePage from './SetupGuidePage'
import BreadcrumbsPage from './BreadcrumbsPage'
import Alerts from './AlertsPage'
import Tabs from './TabsPage'
import Links from './LinksPage'
import GuidelinesPage from './GuidelinesPage'
import SeparatorPage from './SeparatorPage'
import NavigationPage from './NavigationPage'
import ModalPage from './ModalPage'
import CortinaBlocksPage from './CortinaBlocksPage'
import DeprecationsPage from './DeprecationsPage'

import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/BreadCrumbs'

const ComponentExport = observer(Start)
export default ComponentExport

export function Start() {
  const store = useStore()
  const { proxyPrefixPath } = store.browserConfig
  const { section } = useParams()

  let breadcrumbs = []

  if (section) {
    breadcrumbs = [
      {
        label: section ? i18n.message(`section_${section}`) : '',
        url: `${proxyPrefixPath.uri}/${section}`,
      },
    ]
  }

  const content = getComponentMatchingRoute()
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <NavBar />
      {content}
    </>
  )
}

function getComponentMatchingRoute() {
  const { section, page } = useParams()

  switch (section) {
    case 'basic':
      switch (page) {
        case 'colors':
          return <Colors />
        case 'icons':
          return <Icons />
        case 'spacing':
          return <Spacing />
        case 'typography':
          return <Typography />
        case 'buttons':
          return <ButtonsPage />
        case 'tables':
          return <TablesPage />

        case 'separators':
          return <SeparatorPage />
        case 'links':
          return <Links />

        default:
          return <Colors />
      }

    case 'components':
      switch (page) {
        case 'alerts':
          return <Alerts />
        case 'forms':
          return <FormsPage />
        case 'breadcrumbs':
          return <BreadcrumbsPage />
        case 'collapse':
          return <CollapsePage />
        case 'tabs':
          return <Tabs />
        case 'modals':
          return <ModalPage />
        case 'navigation':
          return <NavigationPage />
        default:
          return <Alerts />
      }

    case 'setup-guide':
      switch (page) {
        case 'guidelines':
          return <GuidelinesPage />
        case 'setup':
          return <SetupGuidePage />
        case 'cortina-blocks':
          return <CortinaBlocksPage />
        case 'deprecations':
          return <DeprecationsPage />

        default:
          return <GuidelinesPage />
      }
    default:
      return (
        <main id="mainContent" className="mainContent">
          <Main />
        </main>
      )
  }
}

function Main() {
  return (
    <>
      <h1>KTH Style app</h1>
      <h2>Syftet med denna webbplats</h2>
      <p>
        Denna applikation kallas <i>kth-style-web</i> och är ett hjälpmedel för oss som jobbar med utveckling av
        webbapplikationer på KTH. Den bygger sitt utseende och form på paketet{' '}
        <a href="https://github.com/KTH/kth-style/" alt="kth-style-paketet på Github">
          kth-style
        </a>
        . Syftet är att snabba upp utvecklingen, skapa enhetlighet mellan applikationer samt underlätta form- och
        UX-arbete.
      </p>
      <p>
        I menyn hittar du ingångar till formelement som färger och typografi samt form för olika komponenter. Tanken är
        att tillhandahålla det som är gemensamt för de flesta av våra applikationer och alltså inte all färg och form
        för alla tänkbara komponenter och applikationsspecifika delar.{' '}
      </p>
      <h3>Relaterade projekt</h3>
      <p>
        Github:{' '}
        <a href="https://github.com/KTH/kth-style-web/" alt="kth-style-paketet på Github">
          kth-style-web
        </a>
        <br />
        Github:{' '}
        <a href="https://github.com/KTH/kth-style/" alt="kth-style-paketet på Github">
          kth-style
        </a>
        <br />
        Github:{' '}
        <a href="https://github.com/KTH/kth-style-react-components" alt="kth-style-react-components-paketet på Github">
          kth-style-react-components
        </a>
      </p>
    </>
  )
}
