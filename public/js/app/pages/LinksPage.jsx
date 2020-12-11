/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Links</h1>
      <p>
        Read the guidelines for the use of links in the{' '}
        <a
          href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/knappar-och-
lankar-1.952154"
        >
          KTH Style guide
        </a>{' '}
        at the KTH Intranet (Information in Swedish).
      </p>
      <div className="itemContainer">
        <div className="itemBox">
          <a href="#">Link</a>
          <CodeSnippet snippet={`<a href="#">Link</a>`} />
        </div>
        <div className="itemBox">
          <a href="#" target="_blank" title="Link text - opens in new tab" className="external-link">
            Link text
          </a>
          <CodeSnippet snippet={`<a href="#" target="_blank" class="external-link">External link</a>`} />
        </div>
        <div className="itemBox">
          <button type="button" href="#" className="btn-link">
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
          <a className="pdf-link" href="#" title="Document opens in new tab">
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
