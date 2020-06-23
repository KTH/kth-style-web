import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../ButtonsPage'

test('Buttons page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Buttons page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
        role="main"
      >
        <h1>
          Buttons
        </h1>
        <div
          class="itemContainer"
        >
          <div
            class="itemBox"
          >
            <h2>
              Primary button
            </h2>
            <button
              class="btn btn-primary"
            >
              Primary button
            </button>
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
                    &lt;button class="btn btn-primary"&gt;Primary button&lt;/button&gt;
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
          </div>
          <div
            class="itemBox"
          >
            <h2>
              Secondary button
            </h2>
            <button
              class="btn btn-secondary"
            >
              Secondary
            </button>
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
                    &lt;button class="btn btn-secondary"&gt;Secondary&lt;/button&gt;
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
          </div>
          <div
            class="itemBox"
          >
            <h2>
              Success button
            </h2>
            <button
              class="btn btn-success"
            >
              Save
            </button>
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
                    &lt;button class="btn btn-success"&gt;Sucess button&lt;/button&gt;
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
          </div>
          <div
            class="itemBox"
          >
            <h2>
              Danger button
            </h2>
            <button
              class="btn btn-danger"
            >
              Delete
            </button>
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
                    &lt;button class="btn btn-danger"&gt;Danger button&lt;/button&gt;
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
          </div>
          <div
            class="itemBox"
          >
            <h2>
              Block level buttons
            </h2>
            <button
              class="btn btn-primary btn-block"
            >
              Block level button
            </button>
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
                    &lt;button class="btn btn-primary btn-block"&gt;Block level button&lt;/button&gt;
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
            <button
              class="btn btn-secondary btn-block"
            >
              Block level button
            </button>
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
                    &lt;button class="btn btn-secondary btn-block"&gt;Block level button&lt;/button&gt;
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
          </div>
          <div
            class="itemBox"
          >
            <h2>
              Disabled buttons
            </h2>
            <button
              class="btn btn-primary"
              disabled=""
            >
              Primary button
            </button>
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
                    &lt;button class="btn btn-primary" disabled&gt;Disabled button&lt;/button&gt;
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
          </div>
        </div>
      </main>
    </div>
  `)
})
