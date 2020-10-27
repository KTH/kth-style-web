import React from 'react'

export default props => {
  const { title, className, children, color } = props

  return (
    <details>
      <summary className={`${color || 'blue'}${className ? ' ' + className : ''}`}>{title}</summary>
      {children}
    </details>
  )
}
