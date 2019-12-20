import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'

const Button = ({ type, disabled, children, block, title }) => {
  let buttonClass = block ? `btn btn-${type} btn-block` : `btn btn-${type}`
  return (
    <button className={buttonClass} disabled={disabled}>
      {children}
    </button>
  )
}

export const Main = props => {
  return (
    <div className="itemContainer">
      <div className="itemBox">
        <p>Primary button</p>
        <Button type="primary">Primary button</Button>
        <Button type="primary" size="lg" disabled>
          Primary button
        </Button>
        <div className="codeSnippet">
          <pre>
            <code className="language-html">{'<button type="primary">Primary button</button>'}</code>
          </pre>
        </div>
      </div>

      <div className="itemBox">
        <p>Secondary button</p>
        <Button type="secondary">Secondary</Button>
        <Button type="secondary" size="lg" disabled>
          Disabled Button
        </Button>
      </div>

      <div className="itemBox">
        <p>Success button</p>
        <Button type="success">Save</Button>
      </div>

      <div className="itemBox">
        <p>Danger button</p>
        <Button type="danger">Delete</Button>
      </div>

      <div className="itemBox">
        <p>Block level buttons</p>
        <Button type="primary" size="lg" block>
          Block level button
        </Button>
        <Button type="secondary" size="lg" block>
          Block level button
        </Button>
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
