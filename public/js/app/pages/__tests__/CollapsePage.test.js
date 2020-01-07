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
      <div
        class="itemContainer"
      >
        <div
          class="itemBox"
        >
          <h1>
            Collapse with hooks
          </h1>
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
        </div>
      </div>
    </div>
  `)
})
