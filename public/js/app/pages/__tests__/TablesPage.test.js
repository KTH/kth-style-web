import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../TablesPage'

test('Tables page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Tables page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Tabeller
        </h1>
        <p>
          Read the guidelines for the use of tables in the
           
          <a
            href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/tabeller-1.1005514"
          >
            KTH Style guide
          </a>
           
          at the KTH Intranet (Information in Swedish).
        </p>
        <table
          class="table"
        >
          <thead>
            <tr>
              <th
                scope="col"
              >
                #
              </th>
              <th
                scope="col"
              >
                Col 1
              </th>
              <th
                scope="col"
              >
                Col 2
              </th>
              <th
                scope="col"
              >
                Col 3
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
              >
                1
              </th>
              <td>
                Lorem ipsum
              </td>
              <td>
                Dolor sit amet
              </td>
              <td>
                Consectetur adipiscing elit
              </td>
            </tr>
            <tr>
              <th
                scope="row"
              >
                2
              </th>
              <td>
                Lorem ipsum
              </td>
              <td>
                Dolor sit amet
              </td>
              <td>
                Consectetur adipiscing elit
              </td>
            </tr>
            <tr>
              <th
                scope="row"
              >
                3
              </th>
              <td>
                Lorem ipsum
              </td>
              <td>
                Dolor sit amet
              </td>
              <td>
                Consectetur adipiscing elit
              </td>
            </tr>
          </tbody>
        </table>
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
                &lt;table class="table"&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th scope="col"&gt;#&lt;/th&gt;
          &lt;th scope="col"&gt;Col 1&lt;/th&gt;
          &lt;th scope="col"&gt;Col 2&lt;/th&gt;
          &lt;th scope="col"&gt;Col 3&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;th scope="row"&gt;1&lt;/th&gt;
          &lt;td&gt;Lorem ipsum&lt;/td&gt;
          &lt;td&gt;Dolor sit amet&lt;/td&gt;
          &lt;td&gt;Consectetur adipiscing elit&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;th scope="row"&gt;2&lt;/th&gt;
          &lt;td&gt;Lorem ipsum&lt;/td&gt;
          &lt;td&gt;Dolor sit amet&lt;/td&gt;
          &lt;td&gt;Consectetur adipiscing elit&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;th scope="row"&gt;3&lt;/th&gt;
          &lt;td&gt;Lorem ipsum&lt;/td&gt;
          &lt;td&gt;Dolor sit amet&lt;/td&gt;
          &lt;td&gt;Consectetur adipiscing elit&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
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
