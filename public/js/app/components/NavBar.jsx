import React from 'react'

export default () => {
  return (
    <nav id="mainMenu" aria-label="Sub menu" className="col navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav">
          <li className="parentLink">
            <a href="/">KTH</a>
          </li>
        </ul>

        <ul className="nav nav-ancestor">
          <li>
            <span className="nav-item ancestor">Style</span>
          </li>
        </ul>
        <ul className="nav nav-list expandable">
          <li className="nav-item node expanded">
            <a href="/style/basic/colors" className="nav-link">
              Grundform
            </a>
            <ul id="leftmenu-div-1" className="nav nav-list">
              <li className="nav-item leaf">
                <a href="/style/basic/colors" className="nav-link">
                  Färger
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/basic/icons" className="nav-link">
                  Ikoner
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/basic/spacing" className="nav-link">
                  Avstånd
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/basic/typography" className="nav-link">
                  Typografi
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/basic/links" className="nav-link">
                  Länkar
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/basic/buttons" className="nav-link">
                  Knappar
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/basic/tables" className="nav-link">
                  Tabeller
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/basic/separators" className="nav-link">
                  Avskiljare
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item node expanded">
            <a href="/style/components/alerts" className="nav-link">
              Komponenter
            </a>
            <ul id="leftmenu-div-2" className="nav nav-list">
              <li className="nav-item leaf">
                <a href="/style/components/alerts" className="nav-link">
                  Meddelanderutor (Alerts)
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/components/breadcrumbs" className="nav-link">
                  Brödsmulor
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/components/collapse" className="nav-link">
                  Collapse
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/components/forms" className="nav-link">
                  Formulär
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/components/modals" className="nav-link">
                  Modaler
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/components/navigation" className="nav-link">
                  Navigation
                </a>
              </li>

              <li className="nav-item leaf">
                <a href="/style/components/tabs" className="nav-link">
                  Tabbar
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item node expanded">
            <a href="/style/setup-guide/guidelines" className="nav-link">
              Bra att veta för utvecklare
            </a>
            <ul id="leftmenu-div-3" className="nav nav-list">
              <li className="nav-item leaf">
                <a href="/style/setup-guide/guidelines" className="nav-link">
                  Riktlinjer
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/setup-guide/setup" className="nav-link">
                  Använda kth-style i sitt projekt
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/setup-guide/cortina-blocks" className="nav-link">
                  Hur man hämtar html-block från Cortina
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/setup-guide/deprecations" className="nav-link">
                  Deprikerad style / kod
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
