import React, { useState } from 'react'

export default props => {
  const { snippet } = props

  return (
    <div className="codeSnippet">
      <pre>
        <code className="language-html">{snippet}</code>
      </pre>
    </div>
  )
}
