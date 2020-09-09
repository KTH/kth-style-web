import React, { useState } from 'react'

export default props => {
  const { title, className, children, color } = props
  const [open, setOpen] = useState(props.open || false)

  const toggle = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <details>
      <summary className={`${color || 'blue'}${className ? ' ' + className : ''}`}>{title}</summary>
      {children}
    </details>
  )
}
