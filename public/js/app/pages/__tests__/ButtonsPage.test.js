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
      <div
        class="itemContainer"
      >
        <div
          class="itemBox"
        >
          <p>
            Primary button
          </p>
          <button
            class="btn btn-primary"
          >
            Primary button
          </button>
          <button
            class="btn btn-primary"
            disabled=""
          >
            Primary button
          </button>
          <div
            class="codeSnippet"
          >
            <pre>
              <code
                class="language-html"
              >
                &lt;button type="primary"&gt;Primary button&lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
        <div
          class="itemBox"
        >
          <p>
            Secondary button
          </p>
          <button
            class="btn btn-secondary"
          >
            Secondary
          </button>
          <button
            class="btn btn-secondary"
            disabled=""
          >
            Disabled Button
          </button>
        </div>
        <div
          class="itemBox"
        >
          <p>
            Success button
          </p>
          <button
            class="btn btn-success"
          >
            Save
          </button>
        </div>
        <div
          class="itemBox"
        >
          <p>
            Danger button
          </p>
          <button
            class="btn btn-danger"
          >
            Delete
          </button>
        </div>
        <div
          class="itemBox"
        >
          <p>
            Block level buttons
          </p>
          <button
            class="btn btn-primary btn-block"
          >
            Block level button
          </button>
          <button
            class="btn btn-secondary btn-block"
          >
            Block level button
          </button>
        </div>
      </div>
    </div>
  `)
})
