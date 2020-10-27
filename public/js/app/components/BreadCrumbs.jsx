import React from 'react'
import { useStore } from '../mobx'

const { isNoObject } = require('../util/objects')

function ensureItemsAreValid(items) {
  if (!Array.isArray(items) || items.some(isNoObject)) {
    throw new Error('<Breadcrumbs/> failed - invalid prop "items", expected object[]')
  }
  if (
    items.some(({ label, url }) => typeof label !== 'string' || label === '' || typeof url !== 'string' || url === '')
  ) {
    throw new Error('<Breadcrumbs/> failed - invalid prop "items", expected array of { label, url }')
  }
}

export default props => {
  const store = useStore()
  const { items } = props
  const breadcrumbItems = items || []

  const { basicBreadcrumbs, language } = store

  ensureItemsAreValid(breadcrumbItems)

  if (basicBreadcrumbs.length === 0 && breadcrumbItems.length === 0) {
    return null
  }

  const _turnItemIntoBreadcrumb = (item, index) => {
    return (
      <li key={index} className="breadcrumb-item">
        <a href={item.url}>{item.label}</a>
      </li>
    )
  }

  const ariaLabel = language === 'sv' ? 'Brödsmulor' : 'Breadcrumbs'

  return (
    <div className="container articleNavigation">
      <nav id="breadcrumbs" aria-label={ariaLabel}>
        <ol className="breadcrumb">
          {basicBreadcrumbs.map(_turnItemIntoBreadcrumb)}
          {breadcrumbItems.map(_turnItemIntoBreadcrumb)}
        </ol>
      </nav>
    </div>
  )
}
