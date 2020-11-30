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
        case 'separators':
          return <SeparatorPage />
        default:
          return <Colors />
      }

    case 'components':
      switch (page) {
        case 'alerts':
          return <Alerts />
        case 'forms':
          return <FormsPage />
        case 'collapse':
          return <CollapsePage />
        case 'buttons':
          return <ButtonsPage />
        case 'links':
          return <Links />
        case 'tables':
          return <TablesPage />
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
      <h1>About KTH Style</h1>
      <p>
        KTH Style is a tool for bringing proper design and UX proof elements to web applications at KTH. The purpose of
        KTH Style is to accelerate development, create consistency between applications and facilitate the work with
        usability and accessibility.
      </p>
      <p>
        This website (of course based on KTH Style) presents the look of basic form elements and specific components
        with code examples, and provides technical guidance on how to implement KTH Style in your application.
      </p>
      <p>
        Instructions for how KTH Style is technically implemented are described in the section{' '}
        <a href="https://app.kth.se/style/setup-guide">Setup guide</a>
      </p>
      <p>
        The content of KTH Style is accompanied by the KTH Style guide. As a developer you need to understand which
        component to use, when they apply and how they should be used. You also need an overall understanding about
        usability and accessibility to make the right design decision for your app.
      </p>
      <p>
        The <a href="https://intra.kth.se/administration/kommunikation/webb/style">KTH Style guide</a> is found at KTH
        Intranet (Information in Swedish).
      </p>
    </>
  )
}
