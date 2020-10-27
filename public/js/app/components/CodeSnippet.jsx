import React, { useState } from 'react'
import useHover from '../hooks/useHover'

export default props => {
  const { snippet } = props
  const [copySuccess, setCopyStatus] = useState(false)
  const [hoverRef, isHovered] = useHover()

  if (!snippet) {
    return null
  }

  const Tooltip = () => {
    return (
      <div className="tooltip bs-tooltip-bottom code-snippet__tooltip">
        <div className="arrow" />
        <div className="tooltip-inner">{copySuccess ? 'Copied!' : 'Copy to clipboard'}</div>
      </div>
    )
  }

  const copyToClipBoard = () => {
    document.oncopy = function (e) {
      const formattedSnippet = snippet.replace(/^\$/g, '')
      e.clipboardData.setData('text/plain', formattedSnippet)
      e.preventDefault()
      document.oncopy = undefined
    }
    document.execCommand('copy')
    setCopyStatus(true)
  }

  if (!isHovered && copySuccess) {
    // Reset copy status on mouse out
    setCopyStatus(false)
  }

  return (
    <div className="code-snippet">
      <div className="code-snippet__container">
        <pre>
          <code className="language-html">{snippet}</code>
        </pre>
        <div className="code-snippet__btn-container" ref={hoverRef}>
          <button type="button" className="btn" onClick={copyToClipBoard}>
            Copy
          </button>
          {isHovered ? <Tooltip /> : null}
        </div>
      </div>
    </div>
  )
}
