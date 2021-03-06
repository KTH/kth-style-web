import React from 'react'
import { render } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../LinksPage'

test('Links page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Links page snapshot', () => {
  const { container } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Links
        </h1>
        <p>
          Read the guidelines for the use of links in the
           
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
                    type="button"
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
              title="Link text - opens in new tab"
            >
              Link text
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
                    type="button"
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
              type="button"
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
                    type="button"
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
                    type="button"
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
                    type="button"
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
              title="Document opens in new tab"
            >
              Document with icon on the left
            </a>
            <p>
              Check icons page for other document icons.
            </p>
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
                    type="button"
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
              class="pdf-post-link"
              href="#"
              target="_blank"
            >
              Document with icon on the right
            </a>
            <p>
              Check icons page for other document icons.
            </p>
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
                    &lt;a class="pdf-post-link" href="#"&gt;Link&lt;/a&gt;
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
