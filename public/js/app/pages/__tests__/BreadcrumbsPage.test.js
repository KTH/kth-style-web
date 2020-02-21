import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../BreadcrumbsPage'

test('Breadcrumbs page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Breadcrumbs page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="mainContent"
      >
        <h1>
          Breadcrumbs
        </h1>
        <nav
          aria-label="breadcrumb"
          id="breadcrumbs"
        >
          <ol
            class="breadcrumb"
          >
            <li
              class="breadcrumb-item"
            >
              <a
                href="#"
              >
                Home
              </a>
            </li>
            <li
              class="breadcrumb-item"
            >
              <a
                href="#"
              >
                Library
              </a>
            </li>
            <li
              aria-current="page"
              class="breadcrumb-item active"
            >
              Data
            </li>
          </ol>
        </nav>
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
                &lt;nav id="breadcrumbs" aria-label="breadcrumb"&gt;
      &lt;ol class="breadcrumb"&gt;
        &lt;li class="breadcrumb-item"&gt;
          &lt;a href="#"&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="breadcrumb-item"&gt;
          &lt;a href="#"&gt;Library&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="breadcrumb-item active" aria-current="page"&gt;
          Data
        &lt;/li&gt;
      &lt;/ol&gt;
    &lt;/nav&gt;
              </code>
            </pre>
            <div
              class="code-snippet__btn-container"
            >
              <button
                class="btn"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
})