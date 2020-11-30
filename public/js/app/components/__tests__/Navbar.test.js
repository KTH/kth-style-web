import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'

import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import NavBar from '../NavBar'

test('Navbar component complies to axe accesibility', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['components/alerts']}>
      <Route path=":section/:page">
        <NavBar />
      </Route>
    </MemoryRouter>
  )
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Navbar component includes typography', () => {
  const { container, getByText } = render(
    <MemoryRouter initialEntries={['basic/typography']}>
      <Route path=":section/:page">
        <NavBar />
      </Route>
    </MemoryRouter>
  )
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
                KTH Style
              </span>
            </li>
          </ul>
          <ul
            class="nav nav-list expandable"
          >
            <li
              class="nav-item leaf "
            >
              <a
                class="nav-link"
                href="/"
              >
                About KTH Style
              </a>
            </li>
            <li
              class="nav-item node selected expanded"
            >
              <a
                class="nav-link"
                href="/basic"
              >
                Basic
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
                    href="/basic/colors"
                  >
                    Colors
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/basic/icons"
                  >
                    Icons
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/basic/spacing"
                  >
                    Structure and layout
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/basic/typography"
                  >
                    Typography
                  </a>
                </li>
                <li
                  class="nav-item leaf"
                >
                  <a
                    class="nav-link"
                    href="/basic/separators"
                  >
                    Separators
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="nav-item node "
            >
              <a
                class="nav-link"
                href="/components"
              >
                Components
              </a>
            </li>
            <li
              class="nav-item node "
            >
              <a
                class="nav-link"
                href="/setup-guide"
              >
                Setup guide
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `)
  getByText(/Typography/i)
})
