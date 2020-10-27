/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>How to use KTH Style in your project</h1>
      <p>(The technical documentation is written in english)</p>
      <h2>General description</h2>
      <p>
        The <a href="https://www.npmjs.com/package/kth-style">kth-style package</a> is a npm package with resources for
        projects that should follow the look and feel of the KTH design. Below is a description of what the package
        contains and how to retrieve it from NPM.
      </p>
      <h3>The structure and contents of the package</h3>
      The distribution folder has the structure shown below and contains css, image, javascript and scss resources which
      can be used in the parent project.
      <CodeSnippet
        snippet={`kth-style
  |-- dist
    |-- css
    |--img
    |--js
    |--kth-style-scss.zip`}
      />
      <p>
        To download the kth-style package from npmjs.org you need to install the Node Package Manager (NPM).
        Instructions on how to do that can be found on this page:{' '}
        <a href="https://www.npmjs.com/get-npm">https://www.npmjs.com/get-npm</a>
      </p>
      <p>
        When you have that installed, run the following command in your project root. This will create a folder named
        node_modules/kth-style.
      </p>
      <CodeSnippet snippet="$ npm i -S kth-style" />
      <h3>Linking to static resouces from the kth-style package</h3>
      <p>If you just want to reference resources in the node_modules/kth-style package. Eg. from scss files.</p>
      <CodeSnippet snippet={`@import '../../node_modules/kth-style/public/sass/variables/fonts';`} />
      <CodeSnippet snippet="background-image: url(../../node_modules/kth-style/dist/img/kth-style/icons/arrow-black-left.svg);" />
      <h3>Use the scss resources as part of your project's local transpilation</h3>
      <p>
        If you want to use the scss resources in your local project just import them in your scss files so you can use
        all the colors and other variables directly in your own styling.
      </p>
      <h2>Use in Node.js projects</h2>
      <p>
        To use KTH-style in a Node.JS project you can look at the node template project{' '}
        <a href="https://github.com/KTH/node-web">node-web</a> or any of the projects that are based on node-web for
        reference.
      </p>
      <p>Install kth-style by typing:</p>
      <CodeSnippet snippet="$ npm i -S kth-style" />
      <p>
        This will add the kth-style package to your dependencies in you package.json file and into the node_modules
        folder.
      </p>
      <h3>Serving static files</h3>
      <h4>If 'kth-node-server' module is used as a server</h4>
      <p>In file server/server.js:</p>
      <CodeSnippet
        snippet={`const path = require('path')
const express = require('express')
const server = require('kth-node-server')

// Now read the server config etc.
const config = require('./configuration').server

server.use(config.proxyPrefixPath.uri + '/static/kth-style', express.static('./node_modules/kth-style/dist'))`}
      />
      <h4>If 'express' module is used</h4>
      <p>In file server/server.js:</p>
      <CodeSnippet
        snippet={`const path = require('path')
const express = require('express')
const app = express()

// Now read the server config etc.
const config = require('./configuration').server

app.use(config.proxyPrefixPath.uri +'/kth-style', express.static(path.join(__dirname, '../node_modules/kth-style/dist')))`}
      />
      <h3>Linking to stylesheet</h3>
      <p>Then link to the KTH-bootstrap stylesheet in /dist directory, e.g.:</p>
      <CodeSnippet snippet={`<link rel='stylesheet' href='/style/static/kth-style/css/kth-bootstrap.css'/>`} />
      <p>
        Remember to place the import above your own project stylesheet imports to be able to override necessary
        elements.
      </p>
    </main>
  )
}

export default observer(() => {
  return (
    <>
      <Main />
    </>
  )
})
