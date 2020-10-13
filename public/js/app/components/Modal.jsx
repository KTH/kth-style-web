/* eslint-disable no-use-before-define */
import React, { useEffect, useRef } from 'react'
import i18n from '../../../../i18n'

export default props => {
  const node = useRef()
  const close = useRef()

  const { isOpen, closeModal, lang, children, title } = props

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode)
      return listener && listener(e)
    }
    if (isOpen) {
      close.current.focus()
      document.addEventListener('keydown', keyListener)
      document.addEventListener('mousedown', handleClick)
    }
    return () => {
      document.removeEventListener('keydown', keyListener)
      document.removeEventListener('mousedown', handleClick)
    }
  })

  function handleClick(e) {
    if (node.current.contains(e.target)) {
      return
    }
    closeModal()
  }

  function handleEscape(e) {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  const handleTabKey = e => {
    const focusableModalElements = node.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )

    const firstElement = focusableModalElements[0]
    const lastElement = focusableModalElements[focusableModalElements.length - 1]

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus()
      return e.preventDefault()
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus()
      e.preventDefault()
    }
  }

  const keyListenersMap = new Map([
    [27, handleEscape],
    [9, handleTabKey],
  ])

  const isClientSide = typeof window !== 'undefined'

  if (isClientSide) {
    const { body } = document
    body.style.overflowY = isOpen ? 'hidden' : 'scroll'

    if (isOpen) {
      body.classList.add('modal-open')
    } else {
      body.classList.remove('modal-open')
    }
  }

  const modalStyle = { display: isOpen ? 'block' : 'none' }

  return (
    <>
      <div
        className={`modal fade ${isOpen ? 'show' : ''}`}
        style={modalStyle}
        id="feedbackModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="feedbackModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-mg" role="document" ref={node}>
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                aria-label={i18n.message('modal_close_button_label', lang)}
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h3>{title}</h3>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                aria-label={i18n.message('modal_close_button_label', lang)}
                onClick={closeModal}
                ref={close}
              >
                {i18n.message('modal_close_button_label', lang)}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <div className={`modal-backdrop fade ${isOpen ? 'show' : ''}`} />}
    </>
  )
}
