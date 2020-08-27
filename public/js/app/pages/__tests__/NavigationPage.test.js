import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../NavigationPage'

test('Navigation page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Navigation page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="mainContent"
      >
        <h1>
          Navigation
        </h1>
        <p>
          Navigation is based on several menus in different contexts. Below you will find examples of these menus. 
        </p>
        <h2>
          Main navigation
        </h2>
        <p>
          The main navigation is placed on the left side of the main contnent. Real life examples can be found on KTH.se, for examle here: 
          <a
            href="https://www.kth.se/en/aktuellt/"
          >
            Aktuellt
          </a>
        </p>
        <p>
          A shortened example of the code can be seen below:
        </p>
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
                &lt;nav id="mainMenu" class="col navbar navbar-expand-lg navbar-light"&gt;
      &lt;div class="collapse navbar-collapse" id="navbarNav"&gt;
          &lt;ul class="nav"&gt;
            &lt;li class="parentLink"&gt;&lt;a href="/"&gt;KTH&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
        &lt;ul class="nav nav-ancestor"&gt;
          &lt;li&gt;&lt;span class="nav-item ancestor"&gt;Aktuellt&lt;/span&gt;&lt;/li&gt;
          &lt;/ul&gt;
          &lt;ul class="nav nav-list"&gt;
            &lt;li class="nav-item leaf"&gt;&lt;a class="nav-link" href="/aktuellt/nyheter"&gt;Nyheter&lt;/a&gt;&lt;/li&gt;
            &lt;li class="nav-item node"&gt;&lt;a class="nav-link" href="/aktuellt/nyhetsteman"&gt;Aktuella nyhetsteman&lt;/a&gt;&lt;/li&gt;
            &lt;li class="nav-item node"&gt;&lt;a class="nav-link" href="/aktuellt/kalender"&gt;KTH-kalendern&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
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
        <h2>
          Secondary menu
        </h2>
        <p>
          The secondary menu is placed in the top right corner of the header and contains entrancies for students, alumnies, employees and a language switcher. This menu is more or less included on all pages of www.kth.se.
        </p>
        <p>
          This menu is preferably imported to the application you are building via
           
          <a
            class="external-link"
            href="https://github.com/KTH/kth-node-cortina-block"
            target="_blank"
          >
            kth-node-cortina-block
          </a>
           
          or similar functionality to keep the navigation in the header consistent throughout the sites.
        </p>
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
                &lt;nav aria-label="global secondary"&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="/student"&gt;Student&lt;/a&gt;
        &lt;/li&gt;&lt;li&gt;&lt;a href="/alumni"&gt;Alumn&lt;/a&gt;
        &lt;/li&gt;&lt;li&gt;&lt;a href="https://intra.kth.se/"&gt;Anställd&lt;/a&gt;
        &lt;/li&gt;&lt;li&gt;&lt;a href="https://www.kth.se/en" hreflang="en-UK"&gt;International website&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
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
        <h2>
          Mega menu
        </h2>
        <p>
          The mega menu is placed in the bottom of the the header and is expanded upon hover of a menu item and is included on all pages of www.kth.se.
        </p>
        <p>
          This menu is also preferably imported to the application you are building via
           
          <a
            class="external-link"
            href="https://github.com/KTH/kth-node-cortina-block"
            target="_blank"
          >
            kth-node-cortina-block
          </a>
           
          or similar functionality to keep the navigation in the header consistent throughout the sites.
        </p>
      </div>
    </div>
  `)
})
