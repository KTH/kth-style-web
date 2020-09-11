import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../CortinaBlocksPage'

test('Cortina blocks page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Cortina blocks page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <main
        class="mainContent"
      >
        <h1>
          How to get html blocks from Cortina
        </h1>
        <p>
          To make your new application to look and behave as a "KTH application" you need a base html structure to apply stylesheets on. You can grab that from the source of www.kth.se due to the fact that it is relativly static but when it comes to the elements (so called blocks) in the header and footer like menus, search widget etc. you need to use the Cortina API to get the html blocks.
        </p>
        <h2>
          NodeJS based applications
        </h2>
        <p>
          If your application is based on NodeJS, you can use the
           
          <a
            class="external-link"
            href="https://github.com/KTH/kth-node-cortina-block"
            target="_blank"
          >
            kth-node-cortina-block
          </a>
           
          package to retrive the html blocks you need. Look at the documentation of the package to see how it works.
        </p>
        <p>
          The header code in a Node application looks something like this:
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
                &lt;!--indexOff: all--&gt;
    &lt;header&gt;
      &lt;div class="container-fluid"&gt;
        &lt;div class="container"&gt;
          
          &lt;div class="header-container__top"&gt;
            {{{blocks.image}}} {{{blocks.title}}}
            &lt;div id="mobileMenuWrapper"&gt;
              &lt;button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn"&gt;
                &lt;span&gt;&lt;/span&gt;
                &lt;span&gt;&lt;/span&gt;
                &lt;span&gt;&lt;/span&gt;
                &lt;span&gt;&lt;/span&gt;
              &lt;/button&gt;
              &lt;nav id="mobileMenu" class="block navbar navbar-expand-lg navbar-light"&gt;
                &lt;div id="mobileMenuContent" class="navbar-collapse collapse"&gt;
                  &lt;ul id="mobileMenuList" class="menu navbar-nav mr-auto"&gt;&lt;/ul&gt;
                &lt;/div&gt;
              &lt;/nav&gt;
            &lt;/div&gt;
            {{{blocks.secondaryMenu}}}
          &lt;/div&gt;
          &lt;div class="header-container__bottom"&gt;{{{blocks.megaMenu}}} {{{blocks.search}}}&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div id="gradientBorder"&gt;&lt;/div&gt;

      &lt;div class="container articleNavigation"&gt;
        &lt;div class="row justify-content-between"&gt;
          {{breadcrumbs breadcrumbsPath lang}}
        &lt;/div&gt;
      &lt;/div&gt;

    &lt;/header&gt;
    &lt;!--indexOn: all--&gt;
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
          Other applications
        </h2>
        <p>
          If your app is based on some other language you can retrieve the html blocks via the Cortina API directly. Eg.
           
          <a
            href="https://www.kth.se/cm/1.260060"
          >
            https://www.kth.se/cm/1.260060
          </a>
           will give you the site name of the start page.
        </p>
        <p>
          The Cortina API gives you the html of the given content id the the content id can bee seen in the kth-node-cortina-block pakage or directly in the sourse code of www.kth.se.
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
                &lt;h1 class="block siteName" data-cid="1.260060"&gt;
      &lt;a href="/"&gt;Välkommen till KTH&lt;/a&gt;
    &lt;/h1&gt;
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
      </main>
    </div>
  `)
})
