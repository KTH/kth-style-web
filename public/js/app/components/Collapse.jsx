import React, { useState } from 'react'

export default props => {
  const { title, className, children, color } = props
  const [open, setOpen] = useState(props.open || false)

  const toggle = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <div className={`card collapsible ${color || 'blue'}${open ? ' open' : ''}${className ? ' ' + className : ''}`}>
      <div className="card-header" onClick={toggle}>
        <button type="button" aria-expanded={open} aria-controls="collapseBody">
          {title}
        </button>
      </div>

      {open && (
        <div className="card-body" id="collapseBody">
          {children}
        </div>
      )}
    </div>
  )
}
