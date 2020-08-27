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
        aria-label="main"
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
                    Avstånd
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
                    href="/style/links"
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
                    href="/style/tables"
                  >
                    Tabeller
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/separators"
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
                    Meddelanderutor (Alerts)
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/breadcrumbs"
                  >
                    Brödsmulor
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
                    href="/style/forms"
                  >
                    Formulär
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/modals"
                  >
                    Modaler
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/navigation"
                  >
                    Navigering
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/tabs"
                  >
                    Tabbar
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
                href="/style/setup-guide"
              >
                Använda kth-style i sitt projekt
              </a>
            </li>
            <li
              class="nav-item node"
            >
              <a
                class="nav-link"
                href="/style/cortina-blocks"
              >
                Hur man hämtar html-block från Cortina
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
