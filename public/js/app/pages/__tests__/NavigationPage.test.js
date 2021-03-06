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
      <main
        class="mainContent"
        id="mainContent"
      >
        <h1>
          Navigation
        </h1>
        <p>
          Read the guidelines for the use of navigation and the principle behind them in the
           
          <a
            href="
    https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/navigation-
    1.952155"
          >
            KTH Style guide
          </a>
           
          at the KTH Intranet (Information in Swedish).
        </p>
        <p>
          Navigation is based on several menus in different contexts. Below you will find examples of these menus. 
        </p>
        <h2>
          Main navigation
        </h2>
        <p>
          Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Sub menu" or "Undermeny"
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
                &lt;nav id="mainMenu" class="col navbar navbar-expand-lg navbar-light" aria-label="Sub menu"&gt;
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
                type="button"
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
          This menu is preferably imported to the application you are building via
           
          <a
            class="external-link"
            href="https://github.com/KTH/kth-node-cortina-block"
            rel="noreferrer"
            target="_blank"
          >
            kth-node-cortina-block
          </a>
           
          or similar functionality to keep the navigation in the header consistent throughout the sites.
        </p>
        <p>
          Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Secondary top menu" or "Sekundär toppmeny"
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
                &lt;nav aria-label="Secondary top menu"&gt;
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
                type="button"
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
          This menu is also preferably imported to the application you are building via
           
          <a
            class="external-link"
            href="https://github.com/KTH/kth-node-cortina-block"
            rel="noreferrer"
            target="_blank"
          >
            kth-node-cortina-block
          </a>
           
          or similar functionality to keep the navigation in the header consistent throughout the sites.
        </p>
        <p>
          Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Primary top menu" or "Primär toppmeny"
        </p>
        <h2>
          Mobile menu
        </h2>
        <p>
          The mobile meny is visible with its hamburger icon when the width of the screen is 992px or less. On that breakpoint the menu is build up with javascript (menues.js) that combines the the menus depending on which menus are available on the current page.
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
                &lt;div id="mobileMenuWrapper"&gt;
      &lt;button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn"&gt;
        &lt;span&gt;&lt;/span&gt;
        &lt;span&gt;&lt;/span&gt;
        &lt;span&gt;&lt;/span&gt;
        &lt;span&gt;&lt;/span&gt;
      &lt;/button&gt;
      &lt;nav id="mobileMenu" aria-label="Mobilmeny" class="block navbar navbar-expand-lg navbar-light"&gt;
        &lt;div id="mobileMenuContent" class="navbar-collapse collapse"&gt;
          &lt;ul id="mobileMenuList" class="menu navbar-nav mr-auto"&gt;&lt;/ul&gt;
        &lt;/div&gt;
      &lt;/nav&gt;
    &lt;/div&gt;
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
        <h2>
          Breadcrumbs
        </h2>
        <p>
          Read the guidelines for the use of breadcrumbs in the
           
          <a
            href="https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/navigation-
    1.952155"
          >
            KTH Style guide
          </a>
           
          at the KTH Intranet (Information in Swedish).
        </p>
        <p>
          Breadcrumbs help the user to navigate up and down in the structure. This component is places above the main content on most of our regular pages.
        </p>
        <p>
          Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Breadcrumbs" or "Brödsmulor"
        </p>
        <nav
          aria-label="Breadcrumbs"
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
                &lt;nav id="breadcrumbs" aria-label="Breadcrumbs"&gt;
      &lt;ol class="breadcrumb"&gt;
        &lt;li class="breadcrumb-item"&gt;
          &lt;a href="#"&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="breadcrumb-item"&gt;
          &lt;a href="#"&gt;Library&lt;/a&gt;
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
                type="button"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
        <h2>
          Skip to main content
        </h2>
        <p>
          The "skip to main content navigation is a link used ...". Its link text should be language specific 
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
                &lt;a class="skipToMainContent" href="#mainContent" tabindex="1"&gt;Skip to main content&lt;/a&gt;
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
