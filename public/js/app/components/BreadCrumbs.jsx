import React from 'react'
import { useStore } from '../mobx'

const { isNoObject } = require('../../../../server/utils/objects')

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

  const _turnItemIntoBreadcrumb = ({ index, label, url }) => (
    <li key={index} className="breadcrumb-item">
      <a href={url}>{label}</a>
    </li>
  )

  const ariaLabel = language === 'sv' ? 'Brödsmulor' : 'Breadcrumbs'

  return (
    <div className="container articleNavigation">
      <nav id="breadcrumbs" aria-label={ariaLabel}>
        <ol className="breadcrumb">
          {basicBreadcrumbs.map((index, label, url) => _turnItemIntoBreadcrumb(index, label, url))}
          {breadcrumbItems.map((index, label, url) => _turnItemIntoBreadcrumb(index, label, url))}
        </ol>
      </nav>
    </div>
  )
}
