import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

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
      <h1>Buttons</h1>
      <div className="itemBox">
        <h2>Primary button</h2>
        <Button type="primary">Primary button</Button>
        <CodeSnippet snippet={'<button type="button" class="btn btn-primary">Primary button</button>'} />
      </div>

      <div className="itemBox">
        <h2>Secondary button</h2>
        <Button type="secondary">Secondary</Button>
        <CodeSnippet snippet={'<button type="button" class="btn btn-primary">Secondary</button>'} />
      </div>

      <div className="itemBox">
        <h2>Success button</h2>
        <Button type="success">Save</Button>
        <CodeSnippet snippet={'<button type="button" class="btn btn-success">Sucess button</button>'} />
      </div>

      <div className="itemBox">
        <h2>Danger button</h2>
        <Button type="danger">Delete</Button>
        <CodeSnippet snippet={'<button type="button" class="btn btn-danger">Danger button</button>'} />
      </div>

      <div className="itemBox">
        <h2>Block level buttons</h2>
        <Button type="primary" block>
          Block level button
        </Button>
        <CodeSnippet snippet={'<button type="button" class="btn btn-primary btn-block">Block level button</button>'} />

        <Button type="secondary" block>
          Block level button
        </Button>
        <CodeSnippet
          snippet={'<button type="button" class="btn btn-secondary btn-block">Block level button</button>'}
        />
      </div>

      <div className="itemBox">
        <h2>Disabled buttons</h2>
        <Button type="primary" disabled>
          Primary button
        </Button>
        <CodeSnippet snippet={'<button type="button" class="btn btn-primary" disabled>Disabled button</button>'} />
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
