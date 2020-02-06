import React from 'react'

export default () => {
  return (
    <nav id="mainMenu" className="col navbar navbar-expand-lg navbar-light">
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
            <a href="/style/colors" className="nav-link">
              Grundform
            </a>
            <ul id="leftmenu-div-1" className="nav nav-list">
              <li className="nav-item leaf">
                <a href="/style/colors" className="nav-link">
                  Färger
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/icons" className="nav-link">
                  Ikoner
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/spacing" className="nav-link">
                  Mellanrum
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/typography" className="nav-link">
                  Typografi
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/buttons" className="nav-link">
                  Länkar
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/buttons" className="nav-link">
                  Knappar
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/tables" className="nav-link">
                  Tabeller
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/" className="nav-link">
                  Avskiljare
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item node expanded">
            <a href="/style/layouts" className="nav-link">
              Layouter
            </a>
          </li>
          <li className="nav-item node expanded">
            <a href="/style/components" className="nav-link">
              Komponenter
            </a>
            <ul id="leftmenu-div-2" className="nav nav-list">
              <li className="nav-item leaf">
                <a href="/style/alerts" className="nav-link">
                  Alerts
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/breadcrumbs" className="nav-link">
                  Breadcrumbs
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/collapse" className="nav-link">
                  Collapse
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/forms" className="nav-link">
                  Forms
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/" className="nav-link">
                  Modal
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/style/" className="nav-link">
                  Navbar
                </a>
              </li>

              <li className="nav-item leaf">
                <a href="/style/" className="nav-link">
                  Tabs
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item node">
            <a href="/style/guidelines" className="nav-link">
              Riktlinjer
            </a>
          </li>
          <li className="nav-item node">
            <a href="/style/setup-guide" className="nav-link">
              Använda kth-style
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
