/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Lists</h1>
      <p>
        Read the guidelines for the use of lists in the{' '}
        <a href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/listor-1.1005498">
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>
      <div className="itemContainer">
        <div className="itemBox">
          <h2>Ordered list</h2>

          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
          <CodeSnippet
            snippet={`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}
          />

          <h2>Unordered list</h2>
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
          <CodeSnippet
            snippet={`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`}
          />

          <h2>Link list</h2>
          <ul className="link-list">
            <li>
              <a href="https://www.kth.se">This is a link in a list</a>
            </li>
            <li>
              <a href="https://www.kth.se">This is a link in a list</a>
            </li>
            <li>
              <a href="https://www.kth.se">This is a link in a list</a>
            </li>
            <li>
              <a href="https://www.kth.se">This is a link in a list</a>
            </li>
          </ul>
          <CodeSnippet
            snippet={`<ul class="link-list">
  <li><a href="https://www.kth.se">This is a link in a list</a></li>
  <li><a href="https://www.kth.se">This is a link in a list</a></li>
  <li><a href="https://www.kth.se">This is a link in a list</a></li>
  <li><a href="https://www.kth.se">This is a link in a list</a></li>
</ul>`}
          />
        </div>
      </div>
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
