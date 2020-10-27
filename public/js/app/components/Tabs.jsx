/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'

export default props => {
  const { items, defaultTab } = props
  if (!items || items.length === 0) {
    return null
  }

  const activeTab = items[defaultTab] !== undefined ? defaultTab : 0

  const [active, setActive] = useState(activeTab)

  const Tabs = ({ list }) => {
    const handleClick = (e, index) => {
      e.preventDefault()
      setActive(index)
    }

    return (
      <div className="tab-bar-container row">
        <div className="col">
          <ul className="nav nav-tabs" role="tablist">
            {list.map((item, index) => {
              const isActive = index === active
              const tabClasses = `nav-link ${isActive ? 'active show' : ''}`

              if (!item.tab) {
                return null
              }

              return (
                <li key={index} className="nav-item" role="presentation">
                  <button type="button" className={tabClasses} role="tab" onClick={e => handleClick(e, index)}>
                    {item.tab}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  const TabContent = ({ list }) => {
    if (list[active] && !list[active].content) {
      return null
    }
    return (
      <div className="tab-content">
        {list.map((item, index) => {
          const isActive = index === active
          const contentClasses = `tab-pane fade ${isActive ? 'active show' : ''}`
          return (
            <div key={index} className={contentClasses} role="tabpanel">
              <div className="tab-container">{item.content}</div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="Tabs">
      <Tabs list={items} />
      <TabContent list={items} />
    </div>
  )
}
