import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import CodeSnippet from '../CodeSnippet'

const snippet = '<div>Test</div>'

test('CodeSnippet component complies to axe accesibility', async () => {
  const { container } = render(<CodeSnippet snippet={snippet} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('CodeSnippet component renders the passed snippet prop', async () => {
  const { getByText } = render(<CodeSnippet snippet={snippet} />)
  expect(getByText(snippet)).toBeInTheDocument()
})

test('CodeSnippet component does not render if snippet prop is undefined', async () => {
  const { container } = render(<CodeSnippet />)
  expect(container).toMatchInlineSnapshot(`<div />`)
})

test('CodeSnippet component should have a button that says Copy', () => {
  const { getByText } = render(<CodeSnippet snippet={snippet} />)
  expect(getByText('Copy')).toBeInTheDocument()
})

test('CodeSnippet component should show tooltip when hovering the copy button', () => {
  const { getByText } = render(<CodeSnippet snippet={snippet} />)
  const button = getByText('Copy')

  fireEvent.mouseOver(button)
  expect(getByText('Copy to clipboard')).toBeInTheDocument()
})

test('CodeSnippet component snapshot', () => {
  const { container, getByText, debug } = render(<CodeSnippet snippet={snippet} />)
  expect(container).toMatchInlineSnapshot(`
    <div>
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
              &lt;div&gt;Test&lt;/div&gt;
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
  `)
})
