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
            <a href="/forskning" className="nav-link">
              Grund form
            </a>
            <ul id="leftmenu-div-1" className="nav nav-list">
              <li className="nav-item leaf">
                <a href="/forskning/omraden" className="nav-link">
                  Typografi
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/forskning/forskningsplattformar" className="nav-link">
                  Färger
                </a>
              </li>
              <li className="nav-item leaf">
                <a href="/forskning/sarskilda-forskningssatsningar" className="nav-link">
                  Ikoner
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item node">
            <a href="/samverkan" className="nav-link">
              Layouter
            </a>
          </li>
          <li className="nav-item node">
            <a href="/om" className="nav-link">
              Komponenter
            </a>
          </li>
          <li className="nav-item node">
            <a href="/student" className="nav-link">
              Riktlinjer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
