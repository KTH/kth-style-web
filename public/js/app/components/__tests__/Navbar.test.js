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
        aria-label="Sub menu"
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
                KTH Style app
              </span>
            </li>
          </ul>
          <ul
            class="nav nav-list"
          >
            <li
              class="nav-item selected"
            >
              <a
                class="nav-link"
                href="/style"
              >
                Om KTH Style app
              </a>
            </li>
            <li
              class="nav-item node expanded"
            >
              <a
                class="nav-link"
                href="/style/basic/colors"
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
                    href="/style/basic/colors"
                  >
                    Färger
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/basic/icons"
                  >
                    Ikoner
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/basic/spacing"
                  >
                    Avstånd
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/basic/typography"
                  >
                    Typografi
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/basic/links"
                  >
                    Länkar
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/basic/buttons"
                  >
                    Knappar
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/basic/tables"
                  >
                    Tabeller
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/basic/separators"
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
                href="/style/components/alerts"
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
                    href="/style/components/alerts"
                  >
                    Meddelanderutor (Alerts)
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/components/breadcrumbs"
                  >
                    Brödsmulor
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/components/collapse"
                  >
                    Collapse
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/components/forms"
                  >
                    Formulär
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/components/modals"
                  >
                    Modaler
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/components/navigation"
                  >
                    Navigation
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/components/tabs"
                  >
                    Tabbar
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="nav-item node expanded"
            >
              <a
                class="nav-link"
                href="/style/setup-guide/guidelines"
              >
                Bra att veta för utvecklare
              </a>
              <ul
                class="nav nav-list"
                id="leftmenu-div-3"
              >
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/setup-guide/guidelines"
                  >
                    Riktlinjer
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/setup-guide/setup"
                  >
                    Använda kth-style i sitt projekt
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/setup-guide/cortina-blocks"
                  >
                    Hur man hämtar html-block från Cortina
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/style/setup-guide/deprecations"
                  >
                    Deprikerad style / kod
                  </a>
                </li>
              </ul>
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
