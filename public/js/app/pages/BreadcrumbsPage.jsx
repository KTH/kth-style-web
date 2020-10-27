/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Breadcrumbs</h1>
      <p>
        Breadcrumbs help the user to navigate up and down in the structure. This component is places above the main
        content on most of our regular pages.
      </p>

      <p>
        Remember that the aria-label attribute should be based on the current language of the page. For the primary menu
        it should be "Breadcrumbs" or "Brödsmulor"
      </p>
      <p>An example of the code can be seen below:</p>

      <nav id="breadcrumbs" aria-label="Breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Library</a>
          </li>
        </ol>
      </nav>

      <CodeSnippet
        snippet={`<nav id="breadcrumbs" aria-label="Breadcrumbs">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Library</a>
    </li>
  </ol>
</nav>`}
      />
    </main>
  )
}

export default observer(() => {
  return (
    <>
      <Main />
    </>
  )
})
