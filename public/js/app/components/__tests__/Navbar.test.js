import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import NavBar from '../NavBar'

test('Navbar component includes typografi', () => {
  const { container, getByText, debug } = render(<NavBar />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <nav
        class="col navbar navbar-expand-lg navbar-light"
        id="mainMenu"
      >
        <div
          class="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul
            class="nav"
          >
            <li
              class="parentLink"
            >
              <a
                href="/"
              >
                KTH
              </a>
            </li>
          </ul>
          <ul
            class="nav nav-ancestor"
          >
            <li>
              <span
                class="nav-item ancestor"
              >
                Style
              </span>
            </li>
          </ul>
          <ul
            class="nav nav-list expandable"
          >
            <li
              class="nav-item node expanded"
            >
              <a
                class="nav-link"
                href="/forskning"
              >
                Grund form
              </a>
              <ul
                class="nav nav-list"
                id="leftmenu-div-1"
              >
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/forskning/omraden"
                  >
                    Typografi
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/forskning/forskningsplattformar"
                  >
                    Färger
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/forskning/sarskilda-forskningssatsningar"
                  >
                    Ikoner
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="nav-item node"
            >
              <a
                class="nav-link"
                href="/samverkan"
              >
                Layouter
              </a>
            </li>
            <li
              class="nav-item node"
            >
              <a
                class="nav-link"
                href="/om"
              >
                Komponenter
              </a>
            </li>
            <li
              class="nav-item node"
            >
              <a
                class="nav-link"
                href="/student"
              >
                Riktlinjer
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `)
  getByText(/Typografi/i)
})

test('Navbar component complies to axe accesibility', async () => {
  const { container } = render(<NavBar />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
