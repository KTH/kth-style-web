import React, { useState, useRef } from 'react'
import useHover from '../hooks/useHover'

export default props => {
  const { snippet } = props
  const [copySuccess, setCopyStatus] = useState(false)
  const [hoverRef, isHovered] = useHover()

  const Tooltip = () => {
    return (
      <div className="tooltip bs-tooltip-bottom code-snippet__tooltip">
        <div className="arrow"></div>
        <div className="tooltip-inner">{copySuccess ? 'Copied!' : 'Copy to clipboard'}</div>
      </div>
    )
  }

  const copyCodeToClipboard = () => {
    // Creating a temporary textarea element to be able to copy text to clipboard.
    let el = document.createElement('textarea')
    el.value = snippet.replace('$', '')
    el.setAttribute('readonly', '')
    el.style = { position: 'absolute', left: '-9999px' }
    document.body.appendChild(el)

    // Select the element and copy to clipboard
    el.select()
    document.execCommand('copy')

    setCopyStatus(true)

    // Remove temporary element
    document.body.removeChild(el)
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
          <button className="btn" onClick={copyCodeToClipboard}>
            Copy
          </button>
          {isHovered ? <Tooltip /> : null}
        </div>
      </div>
    </div>
  )
}
