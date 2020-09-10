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
          Collapse elements show / hides an area with content. Here do we show three examples, one based on a react component and the other two are based on native HTML.
        </p>
        <h2>
          Collapse based on a React component
        </h2>
        <p>
          This example is based on a React component. The component takes the following properties: title, className, children and color.
        </p>
        <details>
          <summary
            class="blue"
          >
            Collapse example (React)
          </summary>
          <p>
            This is some text inside the collapse element
          </p>
        </details>
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
                &lt;details&gt;
      &lt;summary class="blue"&gt;Collapse example (React)&lt;/summary&gt;
      &lt;p&gt;This is some text inside the collapse element&lt;/p&gt;
    &lt;/details&gt;
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
          Collapse example blue (Native HTML)
        </h2>
        <details>
          <summary
            class="blue"
          >
            Collapse example blue (Native HTML)
          </summary>
          <ul
            class="link-list"
          >
            <li>
              <a
                href="https://www.kth.se"
              >
                This is a link in a list
              </a>
            </li>
            <li>
              <a
                href="https://www.kth.se"
              >
                This is a link in a list
              </a>
            </li>
            <li>
              <a
                href="https://www.kth.se"
              >
                This is a link in a list
              </a>
            </li>
            <li>
              <a
                href="https://www.kth.se"
              >
                This is a link in a list
              </a>
            </li>
          </ul>
          <p>
            This is some text inside the collapse element
          </p>
        </details>
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
                &lt;details&gt;
      &lt;summary class="blue"&gt;Collapse example (Native HTML)&lt;/summary&gt;
      &lt;p&gt;This is some text inside the collapse element&lt;/p&gt;
    &lt;/details&gt;
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
          Collapse example white (Native HTML)
        </h2>
        <details>
          <summary
            class="white"
          >
            Collapse example white (Native HTML)
          </summary>
          <p>
            This is some text inside the collapse element
          </p>
        </details>
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
                &lt;details&gt;
      &lt;summary class="white"&gt;Collapse example (Native HTML)&lt;/summary&gt;
      &lt;p&gt;This is some text inside the collapse element&lt;/p&gt;
    &lt;/details&gt;
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
