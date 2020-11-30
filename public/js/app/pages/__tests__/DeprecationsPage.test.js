import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../DeprecationsPage'

test('Deprecations page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Deprecations page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Deprecated
        </h1>
        <p>
          This page contains information regarding what's deprecated and will be removed i future versions in KTH Styel. E.g what we should stop use or change for other components or code.
        </p>
        <p>
          The deprecated code will work until the next major release of KTH Style is released. We will also inform each team at the IT department in advance. By doing this we will get a controlled phase out of parts that should not be used any more.
        </p>
        <h2>
          Major release 6.0.0
        </h2>
        <p>
          This major will include the following chages which include breaking changes and requires an overview or action.
        </p>
        <ul
          class="deprecatedList"
        >
          <li>
            Collapse with button or achor tags will not be supported as . Styling for these variants is phased out and is replaces by styling for details and summary tags instead. Example code can be seen here::
             
            <a
              alt="Exempel på Collapse-komponent"
              href="/style/components/collapse"
            >
              Collapse componet exemple
            </a>
          </li>
          <li>
            The following icons are phased out from KTH Style:
            <ul>
              <li>
                back-link-pill.svg
              </li>
              <li>
                back-link.svg
              </li>
              <li>
                white-arrow.svg
              </li>
              <li>
                clock_grey_25.svg
              </li>
              <li>
                clock_grey_50.svg
              </li>
              <li>
                clock_grey_100.svg
              </li>
              <li>
                Clock_three_quarter.svg
              </li>
              <li>
                canvas.svg
              </li>
              <li>
                icon-from-canvas-blue.svg
              </li>
              <li>
                pill-back-white.svg
              </li>
              <li>
                pill-back.svg
              </li>
              <li>
                select-arrow.png
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </div>
  `)
})
