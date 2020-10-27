/* eslint-disable react/no-array-index-key */
import React from 'react'
import { observer } from 'mobx-react'

import { NavLink, useParams } from 'react-router-dom'

export default observer(() => {
  const params = useParams()
  const section = params.section ? params.section : '/'

  const basicPages = {
    title: 'Grundform',
    url: '/basic',
    children: [
      { title: 'Färger', url: '/basic/colors' },
      { title: 'Ikoner', url: '/basic/icons' },
      { title: 'Avstånd', url: '/basic/spacing' },
      { title: 'Typografi', url: '/basic/typography' },
      { title: 'Länkar', url: '/basic/links' },
      { title: 'Knappar', url: '/basic/buttons' },
      { title: 'Tabeller', url: '/basic/tables' },
      { title: 'Avskiljare', url: '/basic/separators' },
    ],
  }

  const componentsPages = {
    title: 'Komponenter',
    url: '/components',
    children: [
      { title: 'Meddelanderutor (Alerts)', url: '/components/alerts' },
      { title: 'Brödsmulor', url: '/components/breadcrumbs' },
      { title: 'Collapse', url: '/components/collapse' },
      { title: 'Formulär', url: '/components/forms' },
      { title: 'Modaler', url: '/components/modals' },
      { title: 'Navigation', url: '/components/navigation' },
      { title: 'Tabbar', url: '/components/tabs' },
    ],
  }

  const setupPages = {
    title: 'Bra att veta för utvecklare',
    url: '/setup-guide',
    children: [
      { title: 'Riktlinjer', url: '/setup-guide/guidelines' },
      { title: 'Använda kth-style i sitt projekt', url: '/setup-guide/setup' },
      { title: 'Hur man hämtar html-block från Cortina', url: '/setup-guide/cortina-blocks' },
      { title: 'Deprikerad style / kod', url: '/setup-guide/deprecations' },
    ],
  }

  const aboutPage = {
    title: 'Om KTH Style app',
    url: '/',
  }

  const ChildItems = props => {
    const { children } = props
    const list = children.map((page, index) => {
      const navClass = !params.page && index === 0 ? ' active' : ''

      return (
        <li key={index} className="nav-item leaf">
          <NavLink className={`nav-link${navClass}`} to={page.url}>
            {page.title}
          </NavLink>
        </li>
      )
    })

    return (
      <ul id="leftmenu-div-1" className="nav nav-list">
        {list}
      </ul>
    )
  }

  const NavItem = ({ navItem }) => {
    const { title, url, children } = navItem
    const isExpanded = `/${section}` === url

    const classes = `nav-item ${children ? 'node' : 'leaf'} ${isExpanded ? 'selected expanded' : ''}`

    return (
      <li className={classes}>
        <NavLink className="nav-link" to={url} exact={url === '/'}>
          {title}
        </NavLink>

        {isExpanded && children && <ChildItems>{children}</ChildItems>}
      </li>
    )
  }

  return (
    <nav id="mainMenu" aria-label="Sub menu" className="col navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav">
          <li className="parentLink">
            <a href="/">KTH</a>
          </li>
        </ul>

        <ul className="nav nav-ancestor">
          <li>
            <span className="nav-item ancestor">KTH Style app</span>
          </li>
        </ul>
        <ul className="nav nav-list expandable">
          <NavItem navItem={aboutPage} />
          <NavItem navItem={basicPages} />
          <NavItem navItem={componentsPages} />
          <NavItem navItem={setupPages} />
        </ul>
      </div>
    </nav>
  )
})
