import React from 'react'
import { observer } from 'mobx-react'

import CodeSnippet from '../components/CodeSnippet'

export const Main = () => {
  return (
    <main id="mainContent" className="mainContent">
      <h1>Navigation</h1>
      <p>Navigation is based on several menus in different contexts. Below you will find examples of these menus. </p>
      <h2>Main navigation</h2>
      <p>
        The main navigation is placed on the left side of the main content. Real life examples can be found on KTH.se,
        for examle here: <a href="https://www.kth.se/en/aktuellt/">Aktuellt</a>
      </p>
      <p>
        Remember that the aria-label attribute should be based on the current language of the page. For the primary menu
        it should be "Sub menu" or "Undermeny"
      </p>
      <p>A shortened example of the code can be seen below:</p>
      <CodeSnippet
        snippet={`<nav id="mainMenu" class="col navbar navbar-expand-lg navbar-light" aria-label="Sub menu">
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="nav">
        <li class="parentLink"><a href="/">KTH</a></li>
    </ul>
    <ul class="nav nav-ancestor">
      <li><span class="nav-item ancestor">Aktuellt</span></li>
      </ul>
      <ul class="nav nav-list">
        <li class="nav-item leaf"><a class="nav-link" href="/aktuellt/nyheter">Nyheter</a></li>
        <li class="nav-item node"><a class="nav-link" href="/aktuellt/nyhetsteman">Aktuella nyhetsteman</a></li>
        <li class="nav-item node"><a class="nav-link" href="/aktuellt/kalender">KTH-kalendern</a></li>
      </ul>
    </div>
  </nav>`}
      />
      <h2>Secondary menu</h2>
      <p>
        The secondary menu is placed in the top right corner of the header and contains entrancies for students,
        alumnies, employees and a language switcher. This menu is more or less included on all pages of www.kth.se.
      </p>
      <p>
        This menu is preferably imported to the application you are building via{' '}
        <a href="https://github.com/KTH/kth-node-cortina-block" target="_blank" className="external-link">
          kth-node-cortina-block
        </a>{' '}
        or similar functionality to keep the navigation in the header consistent throughout the sites.
      </p>
      <p>
        Remember that the aria-label attribute should be based on the current language of the page. For the primary menu
        it should be "Secondary top menu" or "Sekundär toppmeny"
      </p>
      <CodeSnippet
        snippet={`<nav aria-label="Secondary top menu">
  <ul>
    <li><a href="/student">Student</a>
    </li><li><a href="/alumni">Alumn</a>
    </li><li><a href="https://intra.kth.se/">Anställd</a>
    </li><li><a href="https://www.kth.se/en" hreflang="en-UK">International website</a></li>
  </ul>
</nav>`}
      />
      <h2>Mega menu</h2>
      <p>
        The mega menu is placed in the bottom of the the header and is expanded upon hover of a menu item and is
        included on all pages of www.kth.se.
      </p>
      <p>
        This menu is also preferably imported to the application you are building via{' '}
        <a href="https://github.com/KTH/kth-node-cortina-block" target="_blank" className="external-link">
          kth-node-cortina-block
        </a>{' '}
        or similar functionality to keep the navigation in the header consistent throughout the sites.
      </p>
      <p>
        Remember that the aria-label attribute should be based on the current language of the page. For the primary menu
        it should be "Primary top menu" or "Primär toppmeny"
      </p>

      <h2>Mobile menu</h2>
      <p>
        The mobile meny is visible with its hamburger icon when the width of the screen is 992px or less. On that
        breakpoint the menu is build up with javascript (menues.js) that combines the the menus depending on which menus
        are available on the current page.
      </p>
      <p>
        If there is a main menu present, it combines the main menu and secondary menu. If there is no main menu present,
        it combines the mega menu and the secondary menu into the mobile menu.{' '}
      </p>

      <CodeSnippet
        snippet={`<div id="mobileMenuWrapper">
  <button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
  <nav id="mobileMenu" aria-label="Mobilmeny" class="block navbar navbar-expand-lg navbar-light">
    <div id="mobileMenuContent" class="navbar-collapse collapse">
      <ul id="mobileMenuList" class="menu navbar-nav mr-auto"></ul>
    </div>
  </nav>
</div>`}
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
