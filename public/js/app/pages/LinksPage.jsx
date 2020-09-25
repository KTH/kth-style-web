import React from 'react'
import { observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

export const Main = props => {
  return (
    <main id="mainContent" className="mainContent">
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
            Document with icon on the left
          </a>
          <p>Check icons page for other document icons.</p>
          <CodeSnippet snippet={`<a class="pdf-link" href="#">Link</a>`} />
        </div>

        <div className="itemBox">
          <a className="pdf-post-link" target="_blank" href="#">
            Document with icon on the right
          </a>
          <p>Check icons page for other document icons.</p>
          <CodeSnippet snippet={`<a class="pdf-post-link" href="#">Link</a>`} />
        </div>

        <div className="itemBox">
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
      <NavBar />
      <Main />
    </>
  )
})
