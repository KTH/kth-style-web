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
      >
        <h1>
          Buttons
        </h1>
        <p>
          Read the guidelines for the use of buttons in the
          <a
            href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/knappar-och-
    lankar-1.952154"
          >
            KTH Style guide
          </a>
           
          at the KTH Intranet (Information in Swedish).
        </p>
        <div
          class="itemContainer"
        >
          <div>
            <h2>
              Primary button
            </h2>
            <button
              class="btn btn-primary"
              type="button"
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
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Primary button
            </h2>
            <button
              class="btn btn-primary next"
              type="button"
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
                    &lt;button class="btn btn-primary next"&gt;Primary button&lt;/button&gt;
                  </code>
                </pre>
                <div
                  class="code-snippet__btn-container"
                >
                  <button
                    class="btn"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Secondary button
            </h2>
            <button
              class="btn btn-secondary"
              type="button"
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
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Secondary button
            </h2>
            <button
              class="btn btn-secondary next"
              type="button"
            >
              Secondary button
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
                    &lt;button class="btn btn-secondary next"&gt;Secondary button&lt;/button&gt;
                  </code>
                </pre>
                <div
                  class="code-snippet__btn-container"
                >
                  <button
                    class="btn"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Secondary button
            </h2>
            <button
              class="btn btn-secondary back"
              type="button"
            >
              Previous
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
                    &lt;button class="btn btn-secondary back"&gt;Previous&lt;/button&gt;
                  </code>
                </pre>
                <div
                  class="code-snippet__btn-container"
                >
                  <button
                    class="btn"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Success button
            </h2>
            <button
              class="btn btn-success"
              type="button"
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
                    &lt;button class="btn btn-success"&gt;Save&lt;/button&gt;
                  </code>
                </pre>
                <div
                  class="code-snippet__btn-container"
                >
                  <button
                    class="btn"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Success button
            </h2>
            <button
              class="btn btn-success next"
              type="button"
            >
              Next
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
                    &lt;button class="btn btn-success next"&gt;Next&lt;/button&gt;
                  </code>
                </pre>
                <div
                  class="code-snippet__btn-container"
                >
                  <button
                    class="btn"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Danger button
            </h2>
            <button
              class="btn btn-danger"
              type="button"
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
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Block level buttons
            </h2>
            <button
              class="btn btn-primary btn-block"
              type="button"
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
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <button
              class="btn btn-secondary btn-block"
              type="button"
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
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              Disabled buttons
            </h2>
            <button
              class="btn btn-primary"
              disabled=""
              type="button"
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
                    type="button"
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
