import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../AlertsPage'

test('Alerts page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Alerts page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Alerts
        </h1>
        <p>
          Read the guidelines for the use of alerts in the
           
          <a
            href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/alerts-och-
    tooltips-1.952153"
          >
            KTH Style guide
          </a>
           
          at the KTH Intranet (Information in Swedish).
        </p>
        <div
          class="alert alert-success"
          role="alert"
        >
          This is a success alert—check it out!
        </div>
        <div
          class="alert alert-danger"
          role="alert"
        >
          This is a danger alert—check it out!
        </div>
        <div
          class="alert alert-info"
          role="alert"
        >
          This is a info alert—check it out!
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
                &lt;div class="alert alert-success" role="alert"&gt;
      This is a success alert—check it out!
    &lt;/div&gt;

    &lt;div class="alert alert-danger" role="alert"&gt;
      This is a danger alert—check it out!
    &lt;/div&gt;

    &lt;div class="alert alert-info" role="alert"&gt;
      This is a info alert—check it out!
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
