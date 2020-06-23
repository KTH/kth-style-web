import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../LinksPage'

test('Links page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Links page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
        role="main"
      >
        <h1>
          Links
        </h1>
        <div
          class="itemContainer"
        >
          <div
            class="itemBox"
          >
            <a
              href="#"
            >
              Link
            </a>
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
                    &lt;a href="#"&gt;Link&lt;/a&gt;
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
            <a
              class="external-link"
              href="#"
              target="_blank"
            >
              External link
            </a>
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
                    &lt;a href="#" target="_blank" class="external-link"&gt;External link&lt;/a&gt;
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
            <button
              class="btn-link"
              href="#"
            >
              Button link
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
                    &lt;button href="#" class="btn-link"&gt;Button link&lt;/button&gt;
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
            <a
              class="link-back"
              href="#"
            >
              Back link
            </a>
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
                    &lt;a class="link-back" href="#"&gt;Back link&lt;/a&gt;
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
            <a
              class="link-to"
              href="#"
            >
              Link to
            </a>
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
                    &lt;a class="link-to" href="#"&gt;Link&lt;/a&gt;
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
            <a
              class="pdf-link"
              href="#"
            >
              Pdf link
            </a>
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
                    &lt;a class="pdf-link" href="#"&gt;Link&lt;/a&gt;
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
