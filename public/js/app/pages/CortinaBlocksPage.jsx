/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  // eslint-disable react/jsx-one-expression-per-line
  return (
    <main id="mainContent" className="mainContent">
      <h1>How to get html blocks from Cortina</h1>
      <p>
        To make your new application to look and behave as a "KTH application" you need a base html structure to apply
        stylesheets on. You can grab that from the source of www.kth.se due to the fact that it is relativly static but
        when it comes to the elements (so called blocks) in the header and footer like menus, search widget etc. you
        need to use the Cortina API to get the html blocks.
      </p>
      <h2>NodeJS based applications</h2>
      <p>
        If your application is based on NodeJS, you can use the{' '}
        <a
          href="https://github.com/KTH/kth-node-cortina-block"
          target="_blank"
          rel="noreferrer"
          className="external-link"
        >
          kth-node-cortina-block
        </a>{' '}
        package to retrive the html blocks you need. Look at the documentation of the package to see how it works.
      </p>
      <p>The header code in a Node application looks something like this:</p>
      <CodeSnippet
        snippet={`<!--indexOff: all-->
<header>
  <div class="container-fluid">
    <div class="container">
      
      <div class="header-container__top">
        {{{blocks.image}}} {{{blocks.title}}}
        <div id="mobileMenuWrapper">
          <button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav id="mobileMenu" class="block navbar navbar-expand-lg navbar-light">
            <div id="mobileMenuContent" class="navbar-collapse collapse">
              <ul id="mobileMenuList" class="menu navbar-nav mr-auto"></ul>
            </div>
          </nav>
        </div>
        {{{blocks.secondaryMenu}}}
      </div>
      <div class="header-container__bottom">{{{blocks.megaMenu}}} {{{blocks.search}}}</div>
    </div>
  </div>
  <div id="gradientBorder"></div>

  <div class="container articleNavigation">
    <div class="row justify-content-between">
      {{breadcrumbs breadcrumbsPath lang}}
    </div>
  </div>

</header>
<!--indexOn: all-->`}
      />

      <h2>Other applications</h2>
      <p>
        If your app is based on some other language you can retrieve the html blocks via the Cortina API directly. Eg.{' '}
        <a href="https://www.kth.se/cm/1.260060">https://www.kth.se/cm/1.260060</a> will give you the site name of the
        start page.
      </p>
      <p>
        The Cortina API gives you the html of the given content id the the content id can bee seen in the
        kth-node-cortina-block pakage or directly in the sourse code of www.kth.se.
      </p>

      <CodeSnippet
        snippet={`<h1 class="block siteName" data-cid="1.260060">
  <a href="/">Välkommen till KTH</a>
</h1>`}
      />
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
