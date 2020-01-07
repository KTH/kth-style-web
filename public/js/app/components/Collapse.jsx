import React, { useState } from 'react'

export default props => {
  const { title, className, children, color } = props
  const [open, setOpen] = useState(props.open || false)

  const toggle = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <div className={`card collapsible ${color || 'blue'} ${open ? 'open' : ''} ${className}`}>
      <div className="card-header" onClick={toggle}>
        <a aria-expanded={open} load="false" href="">
          {title}
        </a>
      </div>

      {open && <div className="card-body">{children}</div>}
    </div>
  )
}
