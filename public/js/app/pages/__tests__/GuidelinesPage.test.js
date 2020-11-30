import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../GuidelinesPage'

test('Guidelines page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Guidelines page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Guidelines for usability and accessibility
        </h1>
        <p>
          First of all. When KTH Style is implemented you also need to know when and how its components should be used. For this you have to consult the KTH Style guide. It is recommended that you start with the page
           
          <a
            href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/design-av-app-
    utifran-kth-style-1.1002797"
          >
            Design av app utifrån KTH Style
          </a>
           
          and then look further into the guidelines for the specific components. (Information in Swedish on the KTH Intranet.)
        </p>
      </main>
    </div>
  `)
})
