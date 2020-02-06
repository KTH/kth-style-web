import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import NavBar from '../components/NavBar'

import Collapse from '../components/Collapse'
import CodeSnippet from '../components/CodeSnippet'

export const Main = props => {
  return (
    <div className="itemContainer">
      <div className="itemBox">
        <h1>Collapse with hooks</h1>
        <p>
          This example is based on bootstrap Collapse. To get the same functionality you have to install bootstrap and
          jquery. To toggle the visibility of the collapse, bootstrap uses jquery toggle the class "show" and also to
          toggle the value of aria-expanded attribute on the a-tag. If you dont want to use jquery in your project you
          have to add your own javascript to handle the visibility.
        </p>
        <Collapse title="hooks-test">
          <div>Lorem ipsum</div>
        </Collapse>
        <h2>With bootstrap and jquery:</h2>
        <CodeSnippet
          snippet={`<div class="card collapsible blue undefined">
  <div class="card-header">
    <a aria-expanded="false" href="#collapseExample" aria-controls="collapseExample" load="false" data-toggle="collapse">hooks-test</a>
  </div>
  <div class="collapse" id="collapseExample">
    <div class="card-body">
      <div>Lorem ipsum</div>
    </div>
  </div>
</div>`}
        />
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
