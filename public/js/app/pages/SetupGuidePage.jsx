import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import CodeSnippet from '../components/CodeSnippet'

export const Main = props => {
  return (
    <div className="mainContent">
      <h1>How to use KTH Style in your project</h1>
      <p>The tecnical documentation is written in english.</p>
      <p>
        To use KTH-style in a Node.JS project you can look at the node template project{' '}
        <a href="https://github.com/KTH/node-web">node-web</a> or any of the projects that are based on node-web for
        reference.
      </p>
      <p>Install kth-style by typing:</p>
      <CodeSnippet snippet={'$ npm i -S kth-style'} />
      <p>
        This will add the kth-style package to your dependencies in you package.json file and into the node_modules
        folder.
      </p>
      <h2>Serving static files</h2>
      <h3>If 'kth-node-server' module is used as a server</h3>
      <p>In file server/server.js:</p>
      <CodeSnippet
        snippet={`const path = require('path')
const express = require('express')
const server = require('kth-node-server')

// Now read the server config etc.
const config = require('./configuration').server

server.use(config.proxyPrefixPath.uri + '/static/kth-style', express.static('./node_modules/kth-style/dist'))`}
      />

      <h3>If 'express' module is used</h3>
      <p>In file server/server.js:</p>
      <CodeSnippet
        snippet={`const path = require('path')
const express = require('express')
const app = express()

// Now read the server config etc.
const config = require('./configuration').server

app.use(config.proxyPrefixPath.uri +'/kth-style', express.static(path.join(__dirname, '../node_modules/kth-style/dist')))`}
      />

      <h2>Linking to stylesheet</h2>
      <p>Then link to the KTH-bootstrap stylesheet in /dist directory, f.e.:</p>
      <CodeSnippet snippet={`<link rel='stylesheet' href='/style/static/kth-style/css/kth-bootstrap.css'/>`} />
      <p>
        Remember to place the import above your own project stylesheet imports to be able to override necessary
        elements.
      </p>

      <h2>Linking to static resouces from kth-style package</h2>
      <p>
        If you just want to reference to resourses in the node_modules package you can do that as well. This is examples
        from scss files.
      </p>
      <CodeSnippet snippet={`@import '../../node_modules/kth-style/public/sass/variables/fonts';`} />
      <CodeSnippet
        snippet={`background-image: url(../../node_modules/kth-style/dist/img/kth-style/icons/arrow-black-left.svg);`}
      />
    </div>
  )
}

export default inject('styleStore')(
  observer(({ styleStore }) => {
    const { message } = styleStore

    return (
      <Fragment>
        <NavBar />
        <Main message={message} />
      </Fragment>
    )
  })
)
