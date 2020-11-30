import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../ModalPage'

test('Modal page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Modal page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Modals
        </h1>
        <p>
          Read the guidelines for the use of modals in the
           
          <a
            href="
    https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/modaler-
    1.952157"
          >
            KTH Style guide
          </a>
           
          at the KTH Intranet (Information in Swedish).
        </p>
        <h2>
          Modals based on React
        </h2>
        <p>
          This modal is based on a React component and require React.
        </p>
        <button
          class="btn btn-primary"
          type="button"
        >
          Open modal
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="feedbackModalLabel"
          class="modal fade "
          id="feedbackModal"
          role="dialog"
          style="display: none;"
          tabindex="-1"
        >
          <div
            class="modal-dialog modal-mg"
            role="document"
          >
            <div
              class="modal-content"
            >
              <div
                class="modal-header"
              >
                <button
                  aria-label="Close"
                  class="close"
                  type="button"
                >
                  <span
                    aria-hidden="true"
                  >
                    ×
                  </span>
                </button>
                <h3>
                  Titel
                </h3>
              </div>
              <div
                class="modal-body"
              >
                <p>
                  This is content in a React based modal.
                </p>
              </div>
              <div
                class="modal-footer"
              >
                <button
                  aria-label="Close"
                  class="btn btn-secondary"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
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
                &lt;button onClick={openModal} type="button" class="btn btn-primary"&gt;
      Open modal
    &lt;/button&gt;
    &lt;Modal isOpen={isOpen} closeModal={closeModal} lang={lang} title="Title"&gt;
      &lt;p&gt;This is content in a react based modal..&lt;/p&gt;
    &lt;/Modal&gt;
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
        <h2>
          Modal based on Bootstrap
        </h2>
        <p>
          This modal is based on Bootstrap and require Bootstrap CSS and JS in the project.
        </p>
        <button
          class="btn btn-primary"
          data-target="#exampleModal"
          data-toggle="modal"
          type="button"
        >
          Open modal
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="exampleModalLabel"
          class="modal fade"
          id="exampleModal"
          role="dialog"
          tabindex="-1"
        >
          <div
            class="modal-dialog"
            role="document"
          >
            <div
              class="modal-content"
            >
              <div
                class="modal-header"
              >
                <button
                  aria-label="Close"
                  class="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <span
                    aria-hidden="true"
                  >
                    ×
                  </span>
                </button>
                <h3
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Title
                </h3>
              </div>
              <div
                class="modal-body"
              >
                This is content in a modal based on Bootstrap.
              </div>
              <div
                class="modal-footer"
              >
                <button
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
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
                &lt;button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"&gt;
      Öppna modalfönster
    &lt;/button&gt;

    &lt;div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"&gt;
      &lt;div class="modal-dialog" role="document"&gt;
        &lt;div class="modal-content"&gt;
          &lt;div class="modal-header"&gt;
            &lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;
              &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
            &lt;/button&gt;
            &lt;h3 class="modal-title" id="exampleModalLabel"&gt;Title&lt;/h3&gt;
          &lt;/div&gt;
          &lt;div class="modal-body"&gt;This is content in a modal based on Bootstrap.&lt;/div&gt;
          &lt;div class="modal-footer"&gt;
            &lt;button type="button" class="btn btn-secondary" data-dismiss="modal"&gt;Close&lt;/button&gt;
          &lt;/div&gt;
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
                type="button"
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
