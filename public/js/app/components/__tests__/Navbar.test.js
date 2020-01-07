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
                href="/style/colors"
              >
                Grundform
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
                    href="/style/colors"
                  >
                    Färger
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/icons"
                  >
                    Ikoner
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/spacing"
                  >
                    Mellanrum
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/typography"
                  >
                    Typografi
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/buttons"
                  >
                    Länkar
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/buttons"
                  >
                    Knappar
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/"
                  >
                    Tabeller
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/"
                  >
                    Avskiljare
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="nav-item node expanded"
            >
              <a
                class="nav-link"
                href="/style/layouts"
              >
                Layouter
              </a>
            </li>
            <li
              class="nav-item node expanded"
            >
              <a
                class="nav-link"
                href="/style/components"
              >
                Komponenter
              </a>
              <ul
                class="nav nav-list"
                id="leftmenu-div-2"
              >
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/alerts"
                  >
                    Alerts
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/collapse"
                  >
                    Collapse
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/"
                  >
                    Forms
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/"
                  >
                    Modal
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/"
                  >
                    Navbar
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/"
                  >
                    Tabs
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="nav-item node"
            >
              <a
                class="nav-link"
                href="/style/guidelines"
              >
                Riktlinjer
              </a>
            </li>
            <li
              class="nav-item node"
            >
              <a
                class="nav-link"
                href="/style/"
              >
                Använda kth-style
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