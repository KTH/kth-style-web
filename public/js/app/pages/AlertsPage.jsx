import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

export const Main = props => {
  return (
    <main role="main" id="mainContent" className="mainContent">
      <h1>Alerts</h1>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <CodeSnippet
        snippet={`<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>

<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>

<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>`}
      />
    </main>
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
