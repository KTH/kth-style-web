import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main as Icons } from '../Icons'

test('Icons component snapshot', () => {
  const { container, getByText, debug } = render(<Icons />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="mainContent"
      >
        <h1>
          Icons
        </h1>
        <div
          class="itemContainer"
        >
          <div>
            <div
              class="itemBox"
              style="background-image: url(/style/static/kth-style/img/kth-style/icons/alert-attention.svg); background-size: 30px 30px; background-repeat: no-repeat;"
            />
            <div>
              Alert-Attention.svg
            </div>
            <div>
               
              icons/alert-attention.svg
            </div>
          </div>
          <div>
            <div
              class="itemBox"
              style="background-image: url(/style/static/kth-style/img/kth-style/icons/alert-info.svg); background-size: 30px 30px; background-repeat: no-repeat;"
            />
            <div>
              Alert-info.svg
            </div>
            <div>
               
              icons/alert-info.svg
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
})

test('Icons component complies to axe accesibility', async () => {
  const { container } = render(<Icons />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
