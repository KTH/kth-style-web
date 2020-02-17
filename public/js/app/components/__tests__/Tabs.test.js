import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import Tabs from '../Tabs'

test('Navbar component complies to axe accesibility', async () => {
  const { container } = render(<Tabs />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
