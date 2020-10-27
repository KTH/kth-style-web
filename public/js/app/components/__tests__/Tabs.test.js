import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import Tabs from '../Tabs'

const itemList = [
  { tab: 'Tab1', content: 'Lorem Ipsum' },
  { tab: 'Tab2', content: 'Lorem Ipsum 2' },
  { tab: 'Tab3', content: 'Lorem Ipsum 3' },
]

test('Navbar component complies to axe accesibility', async () => {
  const { container } = render(<Tabs items={itemList} defaultTab={0} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Navbar component snapshot', () => {
  const { container } = render(<Tabs items={itemList} defaultTab={0} />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="Tabs"
      >
        <div
          class="tab-bar-container row"
        >
          <div
            class="col"
          >
            <ul
              class="nav nav-tabs"
              role="tablist"
            >
              <li
                class="nav-item"
                role="presentation"
              >
                <button
                  class="nav-link active show"
                  role="tab"
                  type="button"
                >
                  Tab1
                </button>
              </li>
              <li
                class="nav-item"
                role="presentation"
              >
                <button
                  class="nav-link "
                  role="tab"
                  type="button"
                >
                  Tab2
                </button>
              </li>
              <li
                class="nav-item"
                role="presentation"
              >
                <button
                  class="nav-link "
                  role="tab"
                  type="button"
                >
                  Tab3
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="tab-content"
        >
          <div
            class="tab-pane fade active show"
            role="tabpanel"
          >
            <div
              class="tab-container"
            >
              Lorem Ipsum
            </div>
          </div>
          <div
            class="tab-pane fade "
            role="tabpanel"
          >
            <div
              class="tab-container"
            >
              Lorem Ipsum 2
            </div>
          </div>
          <div
            class="tab-pane fade "
            role="tabpanel"
          >
            <div
              class="tab-container"
            >
              Lorem Ipsum 3
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
})
