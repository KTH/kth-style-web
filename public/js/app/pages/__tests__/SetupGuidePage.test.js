import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

import { Main } from '../SetupGuidePage'

test('Setup guide page complies to axe accesibility', async () => {
  const { container } = render(<Main />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Setup guide page snapshot', () => {
  const { container, getByText, debug } = render(<Main />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="mainContent"
      >
        <h1>
          How to use KTH Style in your project
        </h1>
        <p>
          The tecnical documentation is written in english.
        </p>
        <p>
          To use KTH-style in a Node.JS project you can look at the node template project
           
          <a
            href="https://github.com/KTH/node-web"
          >
            node-web
          </a>
           or any of the projects that are based on node-web for reference.
        </p>
        <p>
          Install kth-style by typing:
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
                $ npm i -S kth-style
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
        <p>
          This will add the kth-style package to your dependencies in you package.json file and into the node_modules folder.
        </p>
        <h2>
          Serving static files
        </h2>
        <h3>
          If 'kth-node-server' module is used as a server
        </h3>
        <p>
          In file server/server.js:
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
                const path = require('path')
    const express = require('express')
    const server = require('kth-node-server')

    // Now read the server config etc.
    const config = require('./configuration').server

    server.use(config.proxyPrefixPath.uri + '/static/kth-style', express.static('./node_modules/kth-style/dist'))
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
        <h3>
          If 'express' module is used
        </h3>
        <p>
          In file server/server.js:
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
                const path = require('path')
    const express = require('express')
    const app = express()

    // Now read the server config etc.
    const config = require('./configuration').server

    app.use(config.proxyPrefixPath.uri +'/kth-style', express.static(path.join(__dirname, '../node_modules/kth-style/dist')))
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
          Linking to stylesheet
        </h2>
        <p>
          Then link to the KTH-bootstrap stylesheet in /dist directory, f.e.:
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
                &lt;link rel='stylesheet' href='/style/static/kth-style/css/kth-bootstrap.css'/&gt;
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
        <p>
          Remember to place the import above your own project stylesheet imports to be able to override necessary elements.
        </p>
        <h2>
          Linking to static resouces from kth-style package
        </h2>
        <p>
          If you just want to reference to resourses in the node_modules package you can do that as well. This is examples from scss files.
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
                @import '../../node_modules/kth-style/public/sass/variables/fonts';
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
                background-image: url(../../node_modules/kth-style/dist/img/kth-style/icons/arrow-black-left.svg);
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
