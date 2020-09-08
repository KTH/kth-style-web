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
          Collapse
        </h1>
        <p>
          Collapse elements show / hides an area with content. Here do we show two examples, one based on a react component and the other based on Bootstrap.
        </p>
        <h2>
          Collapse based on a React component
        </h2>
        <p>
          This example is based on a React component. When the user click on the button to toggle the visibility of the collapse, react uses javascript to toggle the class "open" on the card and the value of the aria-expanded attribute (true/false) on the button tag.
        </p>
        <div
          class="card collapsible blue"
        >
          <div
            class="card-header"
          >
            <button
              aria-controls="collapseBody"
              aria-expanded="false"
              type="button"
            >
              Collapse example (React)
            </button>
          </div>
        </div>
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
                &lt;div class="card collapsible blue"&gt;
      &lt;div class="card-header"&gt;
        &lt;button type="button" aria-expanded="false" aria-controls="collapseBody"&gt;Collapse example (React)&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="card-body" id="collapseBody"&gt;
        &lt;p&gt;This is some text inside the collapse element&lt;/p&gt;
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
        <h2>
          Collapse based on Boostrap
        </h2>
        <p>
          This example is based on bootstrap Collapse. To get the same functionality you have to make sure bootstrap (style and js) is available for functionality and style to work correctly. Bootstrap.js need JQery as well. To toggle the visibility of the collapse, bootstrap uses javascript to toggle the class "show" and also to toggle the value of aria-expanded attribute on the button-tag.
        </p>
        <div
          class="card collapsible blue"
        >
          <button
            aria-controls="collapseExample"
            aria-expanded="false"
            class="card-header"
            data-target="#collapseExample"
            data-toggle="collapse"
            type="button"
          >
            Collapse example (Bootstrap)
          </button>
          <div
            class="collapse card-body"
            id="collapseExample"
          >
            <p>
              This is some text inside the collapse element
            </p>
          </div>
        </div>
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
                &lt;div class="card collapsible blue"&gt;
      &lt;button class="card-header" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseBody"&gt;Collapse example (Bootstrap)&lt;/button&gt;
      &lt;div class="collapse card-body" id="collapseBody"&gt;
        &lt;p&gt;This is some text inside the collapse element&lt;/p&gt;
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
