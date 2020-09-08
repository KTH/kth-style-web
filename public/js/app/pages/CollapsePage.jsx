import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import NavBar from '../components/NavBar'

import Collapse from '../components/Collapse'
import CodeSnippet from '../components/CodeSnippet'

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Collapse</h1>
      <p>
        Collapse elements show / hides an area with content. Here do we show two examples, one based on a react
        component and the other based on Bootstrap.
      </p>
      <h2>Collapse based on a React component</h2>
      <p>
        This example is based on a React component. When the user click on the button to toggle the visibility of the
        collapse, react uses javascript to toggle the class "open" on the card and the value of the aria-expanded
        attribute (true/false) on the button tag.
      </p>
      <Collapse title="Collapse example (React)">
        <p>This is some text inside the collapse element</p>
      </Collapse>

      <CodeSnippet
        snippet={`<div class="card collapsible blue">
  <div class="card-header">
    <button type="button" aria-expanded="false" aria-controls="collapseBody">Collapse example (React)</button>
  </div>
  <div class="card-body" id="collapseBody">
    <p>This is some text inside the collapse element</p>
  </div>
</div>`}
      />

      <h2>Collapse based on Boostrap</h2>
      <p>
        This example is based on bootstrap Collapse. To get the same functionality you have to make sure bootstrap
        (style and js) is available for functionality and style to work correctly. (This is included in kth-style) To
        toggle the visibility of the collapse, bootstrap uses javascript to toggle the class "show" and also to toggle
        the value of aria-expanded attribute on the button-tag.
      </p>
      <div className="card collapsible blue">
        <button
          className="card-header"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Collapse example (Bootstrap)
        </button>
        <div className="collapse card-body" id="collapseExample">
          <p>This is some text inside the collapse element</p>
        </div>
      </div>

      <CodeSnippet
        snippet={`<div class="card collapsible blue">
  <button class="card-header" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseBody">Collapse example (Bootstrap)</button>
  <div class="collapse card-body" id="collapseBody">
    <p>This is some text inside the collapse element</p>
  </div>
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
