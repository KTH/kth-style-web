import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../CollapsePage'

test('Collapse page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Collapse page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Collapse with hooks
        </h1>
        <p>
          This example is based on bootstrap Collapse. To get the same functionality you have to install bootstrap and jquery. To toggle the visibility of the collapse, bootstrap uses jquery toggle the class "show" and also to toggle the value of aria-expanded attribute on the a-tag. If you dont want to use jquery in your project you have to add your own javascript to handle the visibility.
        </p>
        <div
          class="card collapsible blue  undefined"
        >
          <div
            class="card-header"
          >
            <a
              aria-expanded="false"
              href=""
              load="false"
            >
              hooks-test
            </a>
          </div>
        </div>
        <h2>
          With bootstrap and jquery:
        </h2>
        <div
          class="code-snippet"
        >
          <div
            class="code-snippet__container"
          >
            <pre>
              <code
                class="language-html"
              >
                &lt;div class="card collapsible blue undefined"&gt;
      &lt;div class="card-header"&gt;
        &lt;a aria-expanded="false" href="#collapseExample" aria-controls="collapseExample" load="false" data-toggle="collapse"&gt;hooks-test&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="collapse" id="collapseExample"&gt;
        &lt;div class="card-body"&gt;
          &lt;div&gt;Lorem ipsum&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
            <div
              class="code-snippet__btn-container"
            >
              <button
                class="btn"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `)
})
