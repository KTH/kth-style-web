/* eslint-disable react/no-array-index-key */
import React from 'react'
import { observer } from 'mobx-react'

import { NavLink, useParams } from 'react-router-dom'

export default observer(() => {
  const params = useParams()
  const section = params.section ? params.section : '/'

  const basicPages = {
    title: 'Basics',
    url: '/basics',
    children: [
      { title: 'Colors', url: '/basics/colors' },
      { title: 'Icons', url: '/basics/icons' },
      { title: 'Structure and layout', url: '/basics/spacing' },
      { title: 'Typography', url: '/basics/typography' },
      { title: 'Separators', url: '/basics/separators' },
    ],
  }

  const componentsPages = {
    title: 'Components',
    url: '/components',
    children: [
      { title: 'Alerts', url: '/components/alerts' },
      { title: 'Collapse', url: '/components/collapse' },
      { title: 'Form', url: '/components/forms' },
      { title: 'Links', url: '/components/links' },
      { title: 'Buttons', url: '/components/buttons' },
      { title: 'Tables', url: '/components/tables' },
      { title: 'Modals', url: '/components/modals' },
      { title: 'Navigation', url: '/components/navigation' },
      { title: 'Tabs', url: '/components/tabs' },
    ],
  }

  const setupPages = {
    title: 'Setup guide',
    url: '/setup-guide',
    children: [
      { title: 'Guidlines', url: '/setup-guide/guidlines' },
      { title: 'How to use kth-style in your project', url: '/setup-guide/setup' },
      { title: 'How to fetch html blocks from Cortina', url: '/setup-guide/cortina-blocks' },
      { title: 'Deprecated style / code', url: '/setup-guide/deprecations' },
    ],
  }

  const aboutPage = {
    title: 'About KTH Style',
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
            <span className="nav-item ancestor">KTH Style</span>
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
