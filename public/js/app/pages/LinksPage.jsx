import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

export const Main = props => {
  return (
    <div className="mainContent">
      <h1>Links</h1>
      <div className="itemContainer">
        <div className="itemBox">
          <a href="#">Link</a>
          <CodeSnippet snippet={`<a href="#">Link</a>`} />
        </div>
        <div className="itemBox">
          <a href="#" target="_blank" className="external-link">
            External link
          </a>
          <CodeSnippet snippet={`<a href="#" target="_blank" class="external-link">External link</a>`} />
        </div>
        <div className="itemBox">
          <button href="#" className="btn-link">
            Button link
          </button>
          <CodeSnippet snippet={`<button href="#" class="btn-link">Button link</button>`} />
        </div>
        <div className="itemBox">
          <a className="link-back" href="#">
            Back link
          </a>
          <CodeSnippet snippet={`<a class="link-back" href="#">Back link</a>`} />
        </div>

        <div className="itemBox">
          <a className="link-to" href="#">
            Link to
          </a>
          <CodeSnippet snippet={`<a class="link-to" href="#">Link</a>`} />
        </div>
        <div className="itemBox">
          <a className="pdf-link" href="#">
            Pdf link
          </a>
          <CodeSnippet snippet={`<a class="pdf-link" href="#">Link</a>`} />
        </div>
      </div>
    </div>
  )
}

export default inject('styleStore')(
  observer(({ styleStore }) => {
    const { message } = styleStore

    return (
      <Fragment>
        <NavBar />
        <Main message={message} />
      </Fragment>
    )
  })
)